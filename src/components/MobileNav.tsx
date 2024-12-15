import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../stores/authStore';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = {
  FUSION: [
    { label: 'Overview', href: '/fusion/overview' },
    { label: 'Research Areas', href: '/fusion/research-areas' },
    { label: 'Facilities', href: '/fusion/facilities' },
  ],
  RESEARCH: [
    { label: 'CFRT', href: '/research/cfrt' },
    { label: 'Divertor Theory', href: '/research/divertor-theory' },
    { label: 'STAR_Lite', href: '/research/star-lite' },
    { label: 'Publications', href: '/research/publications' },
    { label: 'Collaborations', href: '/research/collaborations' },
  ],
  PEOPLE: [
    { label: 'Faculty', href: '/people/faculty' },
    { label: 'Students', href: '/people/students' },
    { label: 'Staff', href: '/people/staff' },
  ],
  EDUCATION: [
    { label: 'Graduate Program', href: '/education/graduate' },
    { label: 'Undergraduate', href: '/education/undergraduate' },
    { label: 'Summer School', href: '/education/summer-school' },
    { label: 'Internships', href: '/education/internships' },
  ],
  NEWS: [
    { label: 'Latest', href: '/news/latest' },
    { label: 'Archive', href: '/news/archive' },
  ],
};

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const { user, signOut } = useAuthStore();

  const handleSignOut = async () => {
    await signOut();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black">
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <Link to="/" className="text-xl font-bold text-white" onClick={onClose}>
          HU Fusion
        </Link>
        <button onClick={onClose} className="text-white">
          <X className="h-6 w-6" />
        </button>
      </div>

      <nav className="p-4">
        {Object.entries(navItems).map(([category, items]) => (
          <div key={category} className="mb-6">
            <h3 className="text-sm font-semibold text-gray-400 mb-2">{category}</h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="block text-white hover:text-hampton-blue py-2"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="mt-8 pt-8 border-t border-gray-800">
          {user ? (
            <div className="space-y-4">
              <Link
                to="/members"
                className="block text-white hover:text-hampton-blue py-2"
                onClick={onClose}
              >
                Members Area
              </Link>
              <button
                onClick={handleSignOut}
                className="block w-full text-left text-white hover:text-hampton-blue py-2"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="block text-white hover:text-hampton-blue py-2"
              onClick={onClose}
            >
              Member Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}