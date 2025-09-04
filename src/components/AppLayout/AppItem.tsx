import React, { type ReactNode, useState, useRef } from "react";

export type AppItemProps = {
  rowSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  style?: React.CSSProperties;
  className?: string;
  children?: ReactNode;
};

export function AppItem({
  rowSpan = 1,
  colSpan = 1,
  style,
  className,
  children,
  ...props
}: AppItemProps) {
  const dragStateRef = useRef({
    isDragging: false,
    listenerAttached: false,
  });

  const [isDragging, setIsDragging] = useState(false);
  // const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  // 统一事件处理
  const handleGlobalPointerUp = () => {
    dragStateRef.current.isDragging = false;
    setIsDragging(false);
    document.removeEventListener("pointerup", handleGlobalPointerUp);
    document.removeEventListener("pointercancel", handleGlobalPointerUp);
    dragStateRef.current.listenerAttached = false;
  };

  return (
    <div
      // layout
      onPointerDown={(e) => {
        if (!dragStateRef.current.listenerAttached) {
          document.addEventListener("pointerup", handleGlobalPointerUp);
          document.addEventListener("pointercancel", handleGlobalPointerUp);
          dragStateRef.current.listenerAttached = true;
        }
        dragStateRef.current.isDragging = true;
        setIsDragging(true);
      }}
      {...props}
      style={{
        ...style,
        width: `calc(${colSpan} * var(--icon-size) + ${colSpan - 1} * var(--gap-size))`,
        height: `calc(${rowSpan} * var(--icon-size) + ${rowSpan - 1} * var(--gap-size))`,
        borderRadius: "var(--icon-radius)",
        gridRow: `span ${rowSpan}`,
        gridColumn: `span ${colSpan}`,
      }}
      className={`${isDragging ? "absolute" : "relative"} bg-white shadow-2xl cursor-pointer select-none content-center text-center ${className}`}
    >
      {children}
    </div>
  );
}
