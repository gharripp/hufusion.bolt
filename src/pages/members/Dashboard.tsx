import { useAuthStore } from '../../stores/authStore';

export default function Dashboard() {
  const { user } = useAuthStore();

  return (
    <div className="space-y-6">
      <div className="bg-gray-900 rounded-lg p-6">
        <h1 className="text-2xl font-bold text-white mb-4">
          Welcome back, {user?.displayName || user?.email}
        </h1>
        <p className="text-gray-300">
          Access your projects, documents, and team collaboration tools from this dashboard.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-2">Recent Documents</h2>
          <p className="text-gray-400">No recent documents</p>
        </div>

        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-2">Active Projects</h2>
          <p className="text-gray-400">No active projects</p>
        </div>

        <div className="bg-gray-900 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-2">Team Updates</h2>
          <p className="text-gray-400">No recent updates</p>
        </div>
      </div>
    </div>
  );
}