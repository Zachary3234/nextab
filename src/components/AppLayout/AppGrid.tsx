import { useState } from 'react';
// import { DndContext, DragOverlay, closestCenter } from '@dnd-kit/core';
// import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';

export function AppGrid({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="w-full h-full overflow-y-auto flex gap-3 bg-white/10">
      <div className="w-full h-full flex gap-3">
        {children}
      </div>
    </div>
  );
}