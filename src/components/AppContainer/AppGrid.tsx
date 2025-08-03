import { useState } from 'react';
import { DndContext, DragOverlay, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, rectSortingStrategy } from '@dnd-kit/sortable';

interface AppItem {
  id: string;
  name: string;
  icon: string;
  size: [number, number];
}

interface AppGridProps {
  items: AppItem[];
  columns?: number;
  pageSize?: number;
}

export function AppGrid({ items = [], columns = 5, pageSize = 20 }: AppGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [apps, setApps] = useState(items);

  const totalPages = Math.ceil(items.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const visibleItems = apps.slice(startIndex, startIndex + pageSize);

  const handleDragStart = (event: any) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setApps((items) => {
        const oldIndex = items.findIndex(i => i.id === active.id);
        const newIndex = items.findIndex(i => i.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
    setActiveId(null);
  };

  return (
    <div className="grid">
      <DndContext
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext items={visibleItems} strategy={rectSortingStrategy}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              gap: '8px',
              padding: '12px'
            }}
          >
            {visibleItems.map((app) => (
              <div
                key={app.id}
                style={{
                  gridColumn: `span ${app.size[0]}`,
                  gridRow: `span ${app.size[1]}`,
                  border: '1px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '8px',
                  cursor: 'grab',
                  backgroundColor: 'white'
                }}
              >
                <div className="flex flex-col items-center">
                  <img src={app.icon} className="w-12 h-12 mb-2" />
                  <span className="text-sm">{app.name}</span>
                </div>
              </div>
            ))}
          </div>
        </SortableContext>

        <DragOverlay>
          {activeId ? (
            <div style={{
              transform: 'scale(1.05)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              gridColumn: 'span 1',
              gridRow: 'span 1'
            }}>
              {visibleItems.find(app => app.id === activeId)?.name}
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>

      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 rounded-md ${currentPage === index + 1
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}