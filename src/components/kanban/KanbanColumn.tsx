import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { KanbanColumn as IKanbanColumn } from '../../types/kanban';
import KanbanTask from './KanbanTask';
import { Plus } from 'lucide-react';

interface KanbanColumnProps {
  column: IKanbanColumn;
  onAddTask: () => void;
}

export default function KanbanColumn({ column, onAddTask }: KanbanColumnProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: column.id,
    data: {
      type: 'Column',
      column,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="flex flex-col bg-gray-900 rounded-lg w-80 min-h-[500px]"
    >
      <div
        className="p-4 font-semibold text-white border-b border-gray-800 flex justify-between items-center"
        {...attributes}
        {...listeners}
      >
        <span>{column.title}</span>
        <button
          onClick={onAddTask}
          className="p-1 hover:bg-gray-800 rounded-md transition-colors"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
      
      <div className="flex-1 p-2 space-y-2 overflow-y-auto">
        {column.tasks.map((task) => (
          <KanbanTask key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}