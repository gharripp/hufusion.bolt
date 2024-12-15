import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { KanbanTask as IKanbanTask } from '../../types/kanban';
import { Calendar, Tag } from 'lucide-react';

interface KanbanTaskProps {
  task: IKanbanTask;
}

const priorityColors = {
  low: 'bg-green-500/10 text-green-500',
  medium: 'bg-yellow-500/10 text-yellow-500',
  high: 'bg-red-500/10 text-red-500',
};

export default function KanbanTask({ task }: KanbanTaskProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: task.id,
    data: {
      type: 'Task',
      task,
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
      {...attributes}
      {...listeners}
      className="bg-gray-800 p-3 rounded-md shadow-sm cursor-pointer hover:bg-gray-700 transition-colors"
    >
      <h3 className="text-white font-medium mb-2">{task.title}</h3>
      <p className="text-gray-400 text-sm mb-3">{task.description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {task.dueDate && (
            <div className="flex items-center text-gray-400 text-xs">
              <Calendar className="h-3 w-3 mr-1" />
              {new Date(task.dueDate).toLocaleDateString()}
            </div>
          )}
        </div>
        
        <div className={`px-2 py-1 rounded text-xs ${priorityColors[task.priority]}`}>
          {task.priority}
        </div>
      </div>

      {task.labels.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1">
          {task.labels.map((label) => (
            <span
              key={label}
              className="flex items-center text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded"
            >
              <Tag className="h-3 w-3 mr-1" />
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}