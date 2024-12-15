import { useAuthStore } from '../../stores/authStore';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Layout, FileText, Trello, Settings } from 'lucide-react';

export default function MembersLayout() {
  const { user } = useAuthStore();
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/members', icon: Layout },
    { name: 'Documents', href: '/members/documents', icon: FileText },
    { name: 'Projects', href: '/members/projects', icon: Trello },
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-900 min-h-screen fixed">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-4 h-16 border-b border-gray-800">
              <span className="text-xl font-bold text-white">Members Area</span>
            </div>
            <nav className="flex-1 px-2 py-4 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`
                      flex items-center px-4 py-2 text-sm rounded-md
                      ${
                        location.pathname === item.href
                          ? 'bg-hampton-blue text-white'
                          : 'text-gray-300 hover:bg-gray-800'
                      }
                    `}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
            <div className="p-4 border-t border-gray-800">
              <div className="flex items-center">
                <img
                  src={user?.photoURL || 'https://api.dicebear.com/7.x/initials/svg?seed=' + user?.email}
                  alt=""
                  className="h-8 w-8 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">{user?.displayName || user?.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 ml-64">
          <main className="p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}