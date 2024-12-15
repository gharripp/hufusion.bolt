import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import NavDropdown from './NavDropdown';
import MobileNav from './MobileNav';
import { useAuthStore } from '../stores/authStore';
import { LogIn, LogOut, Menu } from 'lucide-react';

const navItems = {
  FUSION: [
    { label: 'Overview', href: '/fusion/overview' },
    { label: 'Magnetic Confinement', href: '/fusion/magneticconfinement' },
    { label: 'University Scale', href: '/fusion/universityscale' },
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

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuthStore();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <>
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <Logo className="h-12 w-auto" variant="full" />
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white hover:text-hampton-blue"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {Object.entries(navItems).map(([key, items]) => (
                <NavDropdown
                  key={key}
                  label={key}
                  items={items}
                  isActive={activeDropdown === key}
                  onMouseEnter={() => setActiveDropdown(key)}
                  onMouseLeave={() => setActiveDropdown(null)}
                />
              ))}

              {user ? (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/members"
                    className="text-white hover:text-hampton-blue transition-colors"
                  >
                    Members Area
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center text-white hover:text-hampton-blue transition-colors"
                  >
                    <LogOut className="h-5 w-5 mr-1" />
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center text-white hover:text-hampton-blue transition-colors"
                >
                  <LogIn className="h-5 w-5 mr-1" />
                  Member Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
