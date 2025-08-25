import { useState, useRef } from "react";

const AppItemIcon = () => {
  return (
    <div
      className="drag-item absolute w-full h-full rounded-[1rem]
       overflow-hidden bg-white text-center content-center"
    >
      123
    </div>
  );
};

export default function AppItem({
  name = "",
  rowSpan = 1,
  colSpan = 1,
}: {
  name?: string;
  rowSpan?: number;
  colSpan?: number;
}) {
  const dragItemRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={dragItemRef}
      onDragStart={() => {
        setTimeout(() => {
          dragItemRef.current?.classList.add("opacity-0");
        }, 0);
      }}
      onDragEnd={(e) => {
        dragItemRef.current?.classList.remove("opacity-0");
      }}
      className={`select-none relative size-16 cursor-pointer text-center
        row-span-${rowSpan} col-span-${colSpan}
      `}
    >
      <AppItemIcon />
      <div className={`absolute w-full h-6 -bottom-6 text-white`}>{name}</div>
    </div>
  );
}