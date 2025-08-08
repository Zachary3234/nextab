import { useState } from 'react';
// import { DndContext, DragOverlay, closestCenter } from '@dnd-kit/core';
// import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';

export function AppGrid({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  );
}