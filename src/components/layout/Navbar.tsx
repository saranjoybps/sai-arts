import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Facebook, Menu, X } from 'lucide-react';
import Magnetic from '../animations/Magnetic';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/artworks', label: 'Artworks' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <motion.header
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 flex items-center justify-between ${
          isScrolled
            ? 'py-3 px-6 md:px-12 glass-nav mx-4 mt-4 rounded-full max-w-5xl md:mx-auto shadow-sm'
            : 'py-6 px-8 md:px-16 bg-transparent'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Brand Typography */}
        <div 
          onClick={() => handleNavClick('/')}
          className="cursor-pointer font-serif text-xl md:text-2xl font-bold tracking-[0.2em] text-primary select-none"
        >
          SAI <span className="text-accent">ARTS</span>
        </div>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            const active = isActive(item.path);
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`relative text-xs uppercase tracking-[0.25em] font-medium font-sans transition-colors py-2 px-1 hover:text-accent cursor-pointer ${
                  active ? 'text-accent' : 'text-primary/70'
                }`}
              >
                {item.label}
                {active && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent"
                    layoutId="activeNavLine"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-5">
          <Magnetic range={40}>
            <a
              href="https://www.instagram.com/sai_arts_29?igsh=NW1oOGhoa3ZhaW0x"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-primary/70 hover:text-accent transition-colors"
            >
              <Instagram size={18} />
            </a>
          </Magnetic>
          <Magnetic range={40}>
            <a
              href="https://www.facebook.com/share/1UhKjhG8o6/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-primary/70 hover:text-accent transition-colors"
            >
              <Facebook size={18} />
            </a>
          </Magnetic>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary p-1 focus:outline-none z-50 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.header>

      {/* Mobile Fullscreen Animated Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-primary z-30 flex flex-col justify-between p-12 md:hidden"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
          >
            {/* Top Empty Space */}
            <div className="h-12" />

            {/* Nav Menu Links */}
            <div className="flex flex-col space-y-6">
              {navItems.map((item, index) => {
                const active = isActive(item.path);
                return (
                  <motion.button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`text-left font-serif text-4xl font-light tracking-[0.1em] flex items-center justify-between ${
                      active ? 'text-accent' : 'text-bg-gallery'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index + 0.2 }}
                  >
                    <span>{item.label}</span>
                    <span className="font-sans text-xs text-accent/50">0{index + 1}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Bottom Info & Socials */}
            <div className="flex flex-col space-y-6 pt-12 border-t border-bg-gallery/10">
              <div>
                <p className="text-bg-gallery/40 text-[10px] uppercase tracking-[0.25em]">Sai Arts Studio</p>
                <p className="text-bg-gallery/80 text-sm font-light mt-1">saranvaradharajan29@gmail.com</p>
              </div>
              <div className="flex items-center space-x-6">
                <a
                  href="https://www.instagram.com/sai_arts_29?igsh=NW1oOGhoa3ZhaW0x"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bg-gallery/80 hover:text-accent transition-colors flex items-center space-x-2 text-sm font-sans tracking-widest"
                >
                  <Instagram size={16} />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/share/1UhKjhG8o6/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bg-gallery/80 hover:text-accent transition-colors flex items-center space-x-2 text-sm font-sans tracking-widest"
                >
                  <Facebook size={16} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
