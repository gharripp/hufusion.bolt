import { useState } from 'react';
import {
  DndContext,
  DragOverlay,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useKanbanStore } from '../../stores/kanbanStore';
import KanbanColumn from './KanbanColumn';
import KanbanTask from './KanbanTask';
import AddTaskModal from './AddTaskModal';

export default function KanbanBoard() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState<string | null>(null);
  
  const { currentBoard, moveTask } = useKanbanStore();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  if (!currentBoard) return null;

  const handleDragStart = ({ active }: any) => setActiveId(active.id);

  const handleDragEnd = ({ active, over }: any) => {
    if (!over) return;

    if (active.id !== over.id) {
      const activeType = active.data.current.type;
      const overId = over.id;

      if (activeType === 'Task') {
        const activeColumn = currentBoard.columns.find(col =>
          col.tasks.some(task => task.id === active.id)
        );
        const overColumn = currentBoard.columns.find(col =>
          col.id === overId || col.tasks.some(task => task.id === overId)
        );

        if (activeColumn && overColumn) {
          moveTask(active.id, activeColumn.id, overColumn.id);
        }
      }
    }
    setActiveId(null);
  };

  return (
    <div className="h-full">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className="flex space-x-4 p-4 overflow-x-auto">
          <SortableContext
            items={currentBoard.columns.map(col => col.id)}
            strategy={horizontalListSortingStrategy}
          >
            {currentBoard.columns.map(column => (
              <KanbanColumn
                key={column.id}
                column={column}
                onAddTask={() => {
                  setSelectedColumn(column.id);
                  setIsAddingTask(true);
                }}
              />
            ))}
          </SortableContext>
        </div>

        <DragOverlay>
          {activeId && (
            <div className="opacity-50">
              {/* Render overlay content based on dragged item type */}
            </div>
          )}
        </DragOverlay>
      </DndContext>

      {isAddingTask && selectedColumn && (
        <AddTaskModal
          columnId={selectedColumn}
          onClose={() => {
            setIsAddingTask(false);
            setSelectedColumn(null);
          }}
        />
      )}
    </div>
  );
}