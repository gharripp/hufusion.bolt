import { create } from 'zustand';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

interface Document {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
  modifiedAt: string;
  createdBy: string;
}

interface Folder {
  id: string;
  name: string;
  path: string;
}

interface DocumentState {
  currentPath: string;
  files: Document[];
  folders: Folder[];
  loading: boolean;
  error: string | null;
  fetchContents: (path: string) => Promise<void>;
  navigateToFolder: (path: string) => void;
}

export const useDocumentStore = create<DocumentState>((set, get) => ({
  currentPath: '/',
  files: [],
  folders: [],
  loading: false,
  error: null,

  fetchContents: async (path: string) => {
    try {
      set({ loading: true, error: null });
      
      // Fetch folders
      const foldersQuery = query(
        collection(db, 'folders'),
        where('parentPath', '==', path)
      );
      const folderDocs = await getDocs(foldersQuery);
      const folders = folderDocs.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Folder[];

      // Fetch files
      const filesQuery = query(
        collection(db, 'files'),
        where('path', '==', path)
      );
      const fileDocs = await getDocs(filesQuery);
      const files = fileDocs.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Document[];

      set({ folders, files });
    } catch (error) {
      set({ error: (error as Error).message });
    } finally {
      set({ loading: false });
    }
  },

  navigateToFolder: (path: string) => {
    set({ currentPath: path });
    get().fetchContents(path);
  },
}));