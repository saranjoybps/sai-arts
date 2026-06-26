import { useNavigate, useLocation } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import Magnetic from '../animations/Magnetic';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <footer className="bg-primary text-bg-gallery border-t border-bg-gallery/5 pt-16 pb-8 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-bg-gallery/10 select-none">
        
        {/* Brand Information Column */}
        <div className="md:col-span-5 space-y-4">
          <div 
            onClick={() => handleNavClick('/')}
            className="font-serif text-3xl font-bold tracking-[0.2em] text-bg-gallery cursor-pointer select-none inline-block"
          >
            SAI <span className="text-accent">ARTS</span>
          </div>
          <p className="max-w-xs text-xs font-light text-bg-gallery/50 leading-relaxed">
            An immersive gallery showcasing contemporary oil canvas paintings, meticulous portraits, organic nature compositions, and raw charcoal sketches.
          </p>
        </div>

        {/* Navigation Column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-accent font-mono text-[10px] tracking-[0.3em] uppercase font-bold">Navigation</h4>
          <ul className="space-y-2 text-xs font-sans tracking-[0.15em] uppercase font-medium">
            <li>
              <button
                onClick={() => handleNavClick('/')}
                className={`hover:text-accent transition-colors py-1 block cursor-pointer ${
                  isActive('/') ? 'text-accent' : 'text-bg-gallery/70'
                }`}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('/artworks')}
                className={`hover:text-accent transition-colors py-1 block cursor-pointer ${
                  isActive('/artworks') ? 'text-accent' : 'text-bg-gallery/70'
                }`}
              >
                Artworks
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick('/contact')}
                className={`hover:text-accent transition-colors py-1 block cursor-pointer ${
                  isActive('/contact') ? 'text-accent' : 'text-bg-gallery/70'
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Studio Info Column */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-accent font-mono text-[10px] tracking-[0.3em] uppercase font-bold">Location</h4>
          <p className="text-xs font-light text-bg-gallery/60 leading-relaxed">
            Tamilnadu, India<br />
            Delivery available all over India
          </p>
          <div className="flex items-center space-x-4 pt-2">
            <Magnetic range={30}>
              <a
                href="https://www.instagram.com/sai_arts_29?igsh=NW1oOGhoa3ZhaW0x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bg-gallery/75 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </Magnetic>
            <Magnetic range={30}>
              <a
                href="https://www.facebook.com/share/1UhKjhG8o6/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-bg-gallery/75 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </Magnetic>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono tracking-wider text-bg-gallery/40 gap-4">
        <span>&copy; 2026 Sai Arts. All rights reserved.</span>
      </div>
    </footer>
  );
}
