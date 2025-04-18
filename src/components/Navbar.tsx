
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_ITEMS, SITE_NAME } from '@/lib/constants';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-mjblack-dark border-b border-gold-dark">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gold">
            {SITE_NAME}
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {NAVIGATION_ITEMS.map((item) => (
              <Link 
                key={item.title} 
                to={item.href} 
                className="fancy-link"
              >
                {item.title}
              </Link>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gold-dark bg-mjblack-light animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <Link 
                  key={item.title} 
                  to={item.href} 
                  className="text-gold hover:text-gold-light pl-2 border-l-2 border-gold"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
