import { useState, useRef } from "react";

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
  const rowSpanVariants: Record<number, string> = {
    1: "row-span-1",
    2: "row-span-2",

  };
  const colSpanVariants: Record<number, string> = {
    1: "col-span-1",
    2: "col-span-2",
    4: "col-span-4",
  };
  const rowSpanStr = rowSpanVariants[rowSpan] || rowSpanVariants[1];
  const colSpanStr = colSpanVariants[colSpan] || colSpanVariants[1];


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
        ${rowSpanStr} ${colSpanStr}
      `}
    >
      <div
        className="drag-item absolute w-full h-full rounded-[1rem]
          overflow-hidden bg-white text-center content-center"
        onClick={() => {
          console.log(rowSpan, colSpan);
          dragItemRef.current?.classList.remove(rowSpanStr, colSpanStr);
        }}
      >
        123
      </div>
      <div className={`absolute w-full h-6 -bottom-6 text-white`}>{name}</div>
    </div>
  );
}