import { useState } from 'react';
import DocumentList from './DocumentList';
import DocumentPreview from './DocumentPreview';
import { FileIcon, FolderIcon, Upload } from 'lucide-react';
import { useDocumentStore } from '../../stores/documentStore';

export default function DocumentViewer() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const { currentPath, navigateToFolder } = useDocumentStore();

  return (
    <div className="h-[calc(100vh-6rem)] flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <button className="w-full bg-hampton-blue text-white rounded-md px-4 py-2 flex items-center justify-center hover:bg-hampton-blue/90">
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </button>
        </div>
        <nav className="flex-1 p-2 space-y-1">
          <button
            onClick={() => navigateToFolder('/')}
            className="w-full flex items-center px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md"
          >
            <FolderIcon className="w-4 h-4 mr-2" />
            All Documents
          </button>
          <button
            onClick={() => navigateToFolder('/shared')}
            className="w-full flex items-center px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-md"
          >
            <FileIcon className="w-4 h-4 mr-2" />
            Shared with me
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex">
        <div className={`${selectedFile ? 'w-1/2' : 'w-full'} bg-black overflow-auto`}>
          <DocumentList onFileSelect={setSelectedFile} />
        </div>
        
        {selectedFile && (
          <div className="w-1/2 bg-gray-900 border-l border-gray-800">
            <DocumentPreview fileUrl={selectedFile} onClose={() => setSelectedFile(null)} />
          </div>
        )}
      </div>
    </div>
  );
}