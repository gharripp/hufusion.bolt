import { X } from 'lucide-react';

interface DocumentPreviewProps {
  fileUrl: string;
  onClose: () => void;
}

export default function DocumentPreview({ fileUrl, onClose }: DocumentPreviewProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <h3 className="text-white font-medium">Preview</h3>
        <button onClick={onClose} className="text-gray-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>
      </div>
      <div className="flex-1">
        <iframe
          src={`https://docs.google.com/viewer?url=${encodeURIComponent(fileUrl)}&embedded=true`}
          className="w-full h-full border-0"
          title="Document Preview"
        />
      </div>
    </div>
  );
}