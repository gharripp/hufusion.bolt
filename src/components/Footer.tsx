import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1">
            <Logo className="h-12 w-auto mb-4" variant="icon" />
            <p className="text-gray-400 mb-4">
              HU Fusion is at the forefront of fusion energy research, focusing on innovative stellarator design and plasma physics education.
            </p>
          </div>

          {/* Contact Section */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>Hampton University<br />100 E Queen Street<br />Hampton, VA 23668</p>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <p>(757) 727-5239</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-gray-400" />
                <a href="mailto:fusion@hamptonu.edu" className="text-hampton-blue hover:text-white transition-colors">
                  fusion@hamptonu.edu
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/fusion/overview" className="text-gray-400 hover:text-hampton-blue transition-colors">
                  Research Overview
                </Link>
              </li>
              <li>
                <Link to="/education/graduate" className="text-gray-400 hover:text-hampton-blue transition-colors">
                  Graduate Program
                </Link>
              </li>
              <li>
                <Link to="/people/faculty" className="text-gray-400 hover:text-hampton-blue transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/news/latest" className="text-gray-400 hover:text-hampton-blue transition-colors">
                  Latest News
                </Link>
              </li>
            </ul>
          </div>

          {/* External Resources */}
          <div className="col-span-1">
            <h2 className="text-xl font-bold text-white mb-4">Resources</h2>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.hamptonu.edu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-hampton-blue transition-colors"
                >
                  Hampton University
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://science.energy.gov/fes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-hampton-blue transition-colors"
                >
                  DOE Fusion Energy
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.iter.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-hampton-blue transition-colors"
                >
                  ITER Project
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center text-gray-400">
            <p>© {new Date().getFullYear()} HU Fusion Research. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}