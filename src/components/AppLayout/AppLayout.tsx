import React, { type ReactNode, useState, forwardRef } from "react";
import { motion } from "framer-motion";
import { randomPick } from "../../utils/common";
import { AppItem, type AppItemProps } from "../AppLayout/AppItem";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  closestCenter,
  closestCorners,
  useSensor,
  useSensors,
  type UniqueIdentifier,
  type DragStartEvent,
  type DragOverEvent,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  arrayMove,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function SortableItem(props: AppItemProps & { id: UniqueIdentifier }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  console.log("Sortable", props.rowSpan, props.colSpan);

  return (
    <AppItem
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      {...props}
    >
      {props.children}
    </AppItem>
  );
}

export type AppLayoutProps = {
  maxWidth?: number;
  iconSize?: number;
  iconRadius?: number;
  gapSize?: number;
  maxCol?: number;
  className?: string;
  appPropList?: AppItemProps & { id: UniqueIdentifier }[];
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
    id: i as UniqueIdentifier,
    ...randomPick(Object.values(itemSpanOptions)),
  }));
}

const testAppPropList = genDevAppPropList(48);

export function AppLayout({
  maxWidth = 900,
  iconSize = 60,
  iconRadius = 16,
  gapSize = 16,
  maxCol = 16,
  className = "",
  appPropList = testAppPropList,
}: AppLayoutProps) {
  const [items, setItems] = useState(appPropList);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const sensors = useSensors(useSensor(PointerSensor));

  function handleDragOver({ active, over }: DragOverEvent) {
    if (!over) {
      return;
    }

    setItems((items) =>
      arrayMove(
        items,
        items.findIndex((item) => item.id === active.id),
        items.findIndex((item) => item.id === over.id)
      )
    );
  }

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id);
  }

  function handleDragEnd({ active, over }: DragEndEvent) {
    setActiveId(null);
  }

  console.log(activeId);
  console.log(items[Number(activeId)]);

  return (
    <DndContext
      collisionDetection={closestCenter}
      sensors={sensors}
      onDragOver={handleDragOver}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div
        style={
          {
            "--icon-size": `${iconSize}px`,
            "--icon-radius": `${iconRadius}px`,
            "--gap-size": `${gapSize}px`,
          } as React.CSSProperties
        }
      >
        <SortableContext strategy={rectSortingStrategy} items={items}>
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
              <SortableItem key={item.id} {...item}>
                {`App ${item.id}`}
              </SortableItem>
            ))}
          </div>
        </SortableContext>
        <DragOverlay>
          {activeId ? (
            <AppItem {...items.find((item) => item.id === activeId)}>
              {`App ${activeId}`}
            </AppItem>
          ) : null}
        </DragOverlay>
      </div>
    </DndContext>
  );
}
