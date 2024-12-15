import { useEffect } from 'react';
import { File, Folder, MoreVertical, Download, Trash2, Share2 } from 'lucide-react';
import { useDocumentStore } from '../../stores/documentStore';

interface DocumentListProps {
  onFileSelect: (fileUrl: string) => void;
}

export default function DocumentList({ onFileSelect }: DocumentListProps) {
  const { currentPath, files, folders, loading, fetchContents } = useDocumentStore();

  useEffect(() => {
    fetchContents(currentPath);
  }, [currentPath, fetchContents]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-hampton-blue"></div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-white">
          {currentPath === '/' ? 'All Documents' : currentPath.split('/').pop()}
        </h2>
        <p className="text-gray-400 text-sm">{currentPath}</p>
      </div>

      <div className="space-y-2">
        {folders.map((folder) => (
          <div
            key={folder.id}
            className="flex items-center justify-between p-3 hover:bg-gray-900 rounded-md group"
          >
            <div className="flex items-center">
              <Folder className="w-5 h-5 text-hampton-blue mr-3" />
              <span className="text-white">{folder.name}</span>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="p-1 hover:bg-gray-800 rounded">
                <MoreVertical className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        ))}

        {files.map((file) => (
          <div
            key={file.id}
            className="flex items-center justify-between p-3 hover:bg-gray-900 rounded-md group cursor-pointer"
            onClick={() => onFileSelect(file.url)}
          >
            <div className="flex items-center flex-1">
              <File className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                <span className="text-white block">{file.name}</span>
                <span className="text-gray-400 text-sm">
                  {new Date(file.modifiedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-2">
              <button className="p-1 hover:bg-gray-800 rounded" onClick={(e) => e.stopPropagation()}>
                <Download className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-1 hover:bg-gray-800 rounded" onClick={(e) => e.stopPropagation()}>
                <Share2 className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-1 hover:bg-gray-800 rounded" onClick={(e) => e.stopPropagation()}>
                <Trash2 className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}