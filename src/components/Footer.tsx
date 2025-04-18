
import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_NAME, LEGAL_DISCLAIMER } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className="bg-mjblack-dark border-t border-gold-dark py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-gold mb-2">{SITE_NAME}</h3>
            <p className="text-sm text-gray-400 max-w-md">{LEGAL_DISCLAIMER}</p>
          </div>
          
          <div className="flex flex-col space-y-2">
            <Link to="/privacy" className="fancy-link text-sm">Privacy Policy</Link>
            <Link to="/terms" className="fancy-link text-sm">Terms of Use</Link>
            <Link to="/copyright" className="fancy-link text-sm">Copyright Disclaimer</Link>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gold-dark text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} {SITE_NAME}. All tribute content falls under fair use.
          </p>
          <p className="text-xs text-gray-500 mt-2">
            This site is not affiliated with the Michael Jackson Estate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
