import { useState } from "react";
import {Pagination, PaginationItem, PaginationCursor} from "@heroui/react";
// import { DndContext, DragOverlay, closestCenter } from '@dnd-kit/core';
// import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';

export function AppGrid() {
  
  return (
    <div className="w-full h-full flex flex-col">
      {/* App Grid Page */}
      <div className="h-full overflow-y-auto
          mx-auto grid grid-cols-14 gap-4
          bg-white/10">
        <div className="bg-white rounded-[25%] size-16 text-center">123</div>
        <div className="bg-white rounded-[25%] size-16 text-center">123</div>
        <div className="bg-white rounded-[25%] size-16 text-center">123</div>
        <div className="bg-white rounded-[25%] size-16 text-center">123</div>
      </div>
      {/* Pagination */}
      <div className="mt-2 mx-auto">
        <Pagination isCompact color="warning" initialPage={1} total={10} />
      </div>
    </div>
  );
}
