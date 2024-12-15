import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavItem {
  label: string;
  href: string;
}

interface NavDropdownProps {
  label: string;
  items: NavItem[];
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export default function NavDropdown({
  label,
  items,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: NavDropdownProps) {
  return (
    <div
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        className={`flex items-center space-x-1 py-2 text-sm font-medium transition-colors
          ${isActive ? 'text-hampton-blue' : 'text-white hover:text-hampton-blue'}`}
      >
        <span>{label}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isActive ? 'rotate-180' : ''}`} />
      </button>

      {isActive && (
        <div 
          className="absolute left-0 mt-1 w-48 rounded-md bg-black border border-hampton-blue/20 shadow-lg"
          style={{ 
            marginTop: '0.5rem',
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem'
          }}
        >
          <div className="absolute -top-2 left-0 right-0 h-4 bg-transparent" />
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block px-4 py-3 text-sm text-gray-300 hover:bg-hampton-blue hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}