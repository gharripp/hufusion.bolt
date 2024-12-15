import { create } from 'zustand';
import { KanbanBoard, KanbanTask } from '../types/kanban';
import { db } from '../lib/firebase';
import { collection, doc, setDoc, getDoc, updateDoc } from 'firebase/firestore';

interface KanbanState {
  boards: KanbanBoard[];
  currentBoard: KanbanBoard | null;
  loading: boolean;
  error: string | null;
  fetchBoard: (boardId: string) => Promise<void>;
  moveTask: (taskId: string, fromColumn: string, toColumn: string) => Promise<void>;
  addTask: (columnId: string, task: Omit<KanbanTask, 'id'>) => Promise<void>;
  updateTask: (taskId: string, updates: Partial<KanbanTask>) => Promise<void>;
}

export const useKanbanStore = create<KanbanState>((set, get) => ({
  boards: [],
  currentBoard: null,
  loading: false,
  error: null,

  fetchBoard: async (boardId: string) => {
    try {
      set({ loading: true, error: null });
      const docRef = doc(db, 'boards', boardId);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        set({ currentBoard: docSnap.data() as KanbanBoard });
      }
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  moveTask: async (taskId: string, fromColumn: string, toColumn: string) => {
    const { currentBoard } = get();
    if (!currentBoard) return;

    try {
      const updatedColumns = currentBoard.columns.map(column => {
        if (column.id === fromColumn) {
          return {
            ...column,
            tasks: column.tasks.filter(task => task.id !== taskId)
          };
        }
        if (column.id === toColumn) {
          const task = currentBoard.columns
            .find(col => col.id === fromColumn)
            ?.tasks.find(t => t.id === taskId);
          if (task) {
            return {
              ...column,
              tasks: [...column.tasks, task]
            };
          }
        }
        return column;
      });

      await updateDoc(doc(db, 'boards', currentBoard.id), {
        columns: updatedColumns
      });

      set({ currentBoard: { ...currentBoard, columns: updatedColumns } });
    } catch (error) {
      set({ error: (error as Error).message });
    }
  },

  addTask: async (columnId: string, task: Omit<KanbanTask, 'id'>) => {
    const { currentBoard } = get();
    if (!currentBoard) return;

    try {
      const newTask = {
        ...task,
        id: crypto.randomUUID()
      };

      const updatedColumns = currentBoard.columns.map(column => {
        if (column.id === columnId) {
          return {
            ...column,
            tasks: [...column.tasks, newTask]
          };
        }
        return column;
      });

      await updateDoc(doc(db, 'boards', currentBoard.id), {
        columns: updatedColumns
      });

      set({ currentBoard: { ...currentBoard, columns: updatedColumns } });
    } catch (error) {
      set({ error: (error as Error).message });
    }
  },

  updateTask: async (taskId: string, updates: Partial<KanbanTask>) => {
    const { currentBoard } = get();
    if (!currentBoard) return;

    try {
      const updatedColumns = currentBoard.columns.map(column => ({
        ...column,
        tasks: column.tasks.map(task => 
          task.id === taskId ? { ...task, ...updates } : task
        )
      }));

      await updateDoc(doc(db, 'boards', currentBoard.id), {
        columns: updatedColumns
      });

      set({ currentBoard: { ...currentBoard, columns: updatedColumns } });
    } catch (error) {
      set({ error: (error as Error).message });
    }
  }
}));