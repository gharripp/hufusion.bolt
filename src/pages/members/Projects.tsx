import KanbanBoard from '../../components/kanban/KanbanBoard';
import { useKanbanStore } from '../../stores/kanbanStore';
import { useEffect } from 'react';

export default function Projects() {
  const { fetchBoard, currentBoard, loading } = useKanbanStore();

  useEffect(() => {
    // Fetch the default board - in a real app, you might want to fetch based on selected project
    fetchBoard('default-board');
  }, [fetchBoard]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-hampton-blue"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">
          {currentBoard?.title || 'Project Board'}
        </h1>
      </div>

      <KanbanBoard />
    </div>
  );
}