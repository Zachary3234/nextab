import React, {
  type ReactNode,
  useState,
  useCallback,
  forwardRef,
} from "react";
import { motion } from "framer-motion";
import { randomPick } from "../../utils/common";
import { AppItem, type AppItemProps } from "../AppLayout/AppItem";

export type AppLayoutProps = {
  maxWidth?: number;
  iconSize?: number;
  iconRadius?: number;
  gapSize?: number;
  maxCol?: number;
  className?: string;
};

function genDevAppPropList(count: number) {
  const itemSpanOptions = {
    "1x1": { rowSpan: 1, colSpan: 1 },
    "1x2": { rowSpan: 1, colSpan: 2 },
    "2x1": { rowSpan: 2, colSpan: 1 },
    "2x2": { rowSpan: 2, colSpan: 2 },
    "2x4": { rowSpan: 2, colSpan: 4 },
  };

  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    ...randomPick(Object.values(itemSpanOptions)),
  })) as AppItemProps & { id: number }[];
}

const testAppPropList = genDevAppPropList(48);

export function AppLayout({
  maxWidth = 900,
  iconSize = 60,
  iconRadius = 16,
  gapSize = 16,
  maxCol = 16,
  className = "",
}: AppLayoutProps) {
  const [items, setItems] = useState(testAppPropList);

  return (
    <div
      style={
        {
          "--icon-size": `${iconSize}px`,
          "--icon-radius": `${iconRadius}px`,
          "--gap-size": `${gapSize}px`,
        } as React.CSSProperties
      }
    >
      <div
        style={
          {
            maxWidth: `min(${maxWidth}px, calc(${iconSize}px * ${maxCol} + ${gapSize}px * (${maxCol} - 1)))`,
            display: "grid",
            gap: "var(--gap-size)",
            gridAutoFlow: "dense",
            gridTemplateColumns: `repeat(auto-fill, var(--icon-size))`,
            gridTemplateRows: `repeat(auto-fill, var(--icon-size))`,
            justifyContent: "center",
          } as React.CSSProperties
        }
        className={`bg-white/10 ${className}`}
      >
        {items.map((item) => (
          <AppItem key={item.id} {...item}>
            {`App ${item.id}`}
          </AppItem>
        ))}
      </div>
    </div>
  );
}
