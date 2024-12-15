import { ExternalLink, FileText, FolderOpen } from 'lucide-react';

// Configure your cloud storage links here
const documentLinks = {
  researchPapers: {
    title: 'Research Papers',
    description: 'Access published papers and ongoing research documents',
    url: 'https://drive.google.com/drive/folders/1AzMpL92ye3ekv4Lupfjm-PxFwwUMj1qv?usp=drive_link',
    icon: FileText,
  },
  experimentalData: {
    title: 'Experimental Data',
    description: 'Raw data and analysis from STAR_Lite experiments',
    url: 'https://drive.google.com/drive/folders/your-folder-id',
    icon: FolderOpen,
  },
  presentations: {
    title: 'Presentations',
    description: 'Conference presentations and research slides',
    url: 'https://drive.google.com/drive/folders/your-folder-id',
    icon: FileText,
  }
};

export default function Documents() {
  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-white mb-4">Document Repository</h1>
        <p className="text-gray-300">
          Access our shared documents and research materials. Click any section to open it in Google Drive.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(documentLinks).map(([key, section]) => {
          const Icon = section.icon;
          return (
            <a
              key={key}
              href={section.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors group"
            >
              <div className="flex items-center justify-between mb-4">
                <Icon className="h-8 w-8 text-hampton-blue" />
                <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{section.title}</h2>
              <p className="text-gray-400">{section.description}</p>
            </a>
          );
        })}
      </div>

      <div className="bg-gray-900/50 rounded-lg p-6 mt-8">
        <h3 className="text-lg font-semibold text-white mb-2">Note</h3>
        <p className="text-gray-400">
          Documents are managed through Google Drive. You'll need appropriate permissions to access these folders. 
          Contact your administrator if you need access.
        </p>
      </div>
    </div>
  );
}