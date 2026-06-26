import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Artwork } from '../../types';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  artwork: Artwork | null;
  onPrev: () => void;
  onNext: () => void;
  currentIndex: number;
  totalCount: number;
}

export default function Lightbox({
  isOpen,
  onClose,
  artwork,
  onPrev,
  onNext,
  currentIndex,
  totalCount,
}: LightboxProps) {
  const touchStartX = useRef(0);

  // Handle keyboard events
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 60) {
      if (diff > 0) onNext();
      else onPrev();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && artwork && (
        <motion.div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col items-center bg-primary/95 backdrop-blur-xl overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close overlay */}
          <div className="fixed inset-0 cursor-default" onClick={onClose} />

          {/* Top Panel Controls */}
          <div className="fixed top-0 left-0 right-0 flex justify-between items-center z-20 px-4 pt-4 pb-2 bg-gradient-to-b from-primary/80 to-transparent">
            <div className="text-bg-gallery/45 font-mono text-xs tracking-[0.2em] uppercase flex items-center space-x-2">
              <Maximize2 size={12} className="text-accent" />
              <span>
                {currentIndex + 1} of {totalCount}
              </span>
            </div>
            
            <button
              onClick={onClose}
              className="text-bg-gallery/75 hover:text-accent transition-colors p-3 md:p-2 rounded-full border border-bg-gallery/10 bg-primary/40 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>
          </div>

          {/* Center Content */}
          <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-6 md:gap-12 relative z-10 px-4 md:px-8 pt-20 pb-8 md:py-16 my-auto">
            {/* Image Box */}
            <motion.div
              className="w-full md:w-3/5 max-h-[50vh] md:max-h-[75vh] overflow-hidden flex items-center justify-center rounded-sm bg-black/25"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 150 }}
            >
              <img
                src={artwork.image}
                alt={artwork.title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[50vh] md:max-h-[75vh] object-contain shadow-2xl rounded-sm pointer-events-none"
              />
            </motion.div>

            {/* Artwork Details */}
            <motion.div
              className="w-full md:w-2/5 text-bg-gallery text-left flex flex-col justify-center space-y-5 pb-4 md:pb-0"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <div className="space-y-1">
                <span className="text-accent text-xs font-mono tracking-widest uppercase">
                  {artwork.subtitle || artwork.category}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-bg-gallery mt-1">
                  {artwork.title}
                </h2>
              </div>

              <div className="w-12 h-[1px] bg-accent/40" />

              <p className="text-bg-gallery/75 text-sm md:text-base font-light leading-relaxed">
                {artwork.description}
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-mono text-bg-gallery/50 select-none">
                <div>
                  <p className="text-accent/65 uppercase tracking-wider text-[10px] mb-1">Medium</p>
                  <p className="text-bg-gallery/85 font-light">{artwork.medium}</p>
                </div>
                <div>
                  <p className="text-accent/65 uppercase tracking-wider text-[10px] mb-1">Dimensions</p>
                  <p className="text-bg-gallery/85 font-light">{artwork.dimensions}</p>
                </div>
                <div>
                  <p className="text-accent/65 uppercase tracking-wider text-[10px] mb-1">Year Created</p>
                  <p className="text-bg-gallery/85 font-light">{artwork.year}</p>
                </div>
                <div>
                  <p className="text-accent/65 uppercase tracking-wider text-[10px] mb-1">Availability</p>
                  <p className="text-accent font-medium">Inquire Gallery</p>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href={`mailto:saranvaradharajan29@gmail.com?subject=Inquiry regarding: ${artwork.title}`}
                  className="inline-block bg-accent text-primary font-sans uppercase font-medium tracking-[0.25em] text-[10px] py-4 px-8 rounded-sm hover:bg-bg-gallery hover:text-primary transition-colors duration-300 shadow-md text-center"
                >
                  Acquire This Masterpiece
                </a>
              </div>
            </motion.div>
          </div>

          {/* Left Arrow */}
          <button
            onClick={onPrev}
            className="fixed left-2 md:left-8 top-1/2 -translate-y-1/2 z-20 text-bg-gallery/70 hover:text-accent p-3 border border-bg-gallery/5 bg-primary/60 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm"
            aria-label="Previous Artwork"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={onNext}
            className="fixed right-2 md:right-8 top-1/2 -translate-y-1/2 z-20 text-bg-gallery/70 hover:text-accent p-3 border border-bg-gallery/5 bg-primary/60 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer backdrop-blur-sm"
            aria-label="Next Artwork"
          >
            <ChevronRight size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
