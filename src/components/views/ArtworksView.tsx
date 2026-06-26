import { useState } from 'react';
import { motion } from 'motion/react';
import { Info } from 'lucide-react';
import { ARTWORKS } from '../../data/artworks';
import { Artwork } from '../../types';
import Lightbox from '../gallery/Lightbox';

export default function ArtworksView() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentArtwork, setCurrentArtwork] = useState<Artwork | null>(null);

  // Manage Lightbox Navigation
  const handleOpenLightbox = (artwork: Artwork) => {
    setCurrentArtwork(artwork);
    setLightboxOpen(true);
  };

  const handlePrevLightbox = () => {
    if (!currentArtwork) return;
    const currentIndex = ARTWORKS.findIndex(art => art.id === currentArtwork.id);
    const prevIndex = currentIndex === 0 ? ARTWORKS.length - 1 : currentIndex - 1;
    setCurrentArtwork(ARTWORKS[prevIndex]);
  };

  const handleNextLightbox = () => {
    if (!currentArtwork) return;
    const currentIndex = ARTWORKS.findIndex(art => art.id === currentArtwork.id);
    const nextIndex = currentIndex === ARTWORKS.length - 1 ? 0 : currentIndex + 1;
    setCurrentArtwork(ARTWORKS[nextIndex]);
  };

  const lightboxIndex = currentArtwork
    ? ARTWORKS.findIndex(art => art.id === currentArtwork.id)
    : 0;

  // Split artworks into columns for Pinterest masonry
  const getMasonryColumns = (colCount: number) => {
    const cols: Artwork[][] = Array.from({ length: colCount }, () => []);
    ARTWORKS.forEach((art, index) => {
      cols[index % colCount].push(art);
    });
    return cols;
  };

  const masonryCols3 = getMasonryColumns(3);
  const masonryCols2 = getMasonryColumns(2);

  const renderArtworkCard = (art: Artwork) => (
    <motion.div
      key={art.id}
      className="relative group cursor-pointer overflow-hidden rounded-sm bg-primary/5 border border-primary/5 shadow-sm hover:shadow-xl transition-all duration-500"
      onClick={() => handleOpenLightbox(art)}
      whileHover={{ y: -4 }}
      layout
    >
      <div className="relative overflow-hidden aspect-auto w-full">
        <img
          src={art.image}
          alt={art.title}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-auto object-cover transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-6 z-10">
          <div className="flex justify-between items-start text-bg-gallery/40 font-mono text-[9px] tracking-widest uppercase">
            <span>{art.dimensions}</span>
            <span className="flex items-center space-x-1">
              <Info size={10} className="text-accent" />
              <span>Zoom</span>
            </span>
          </div>

          <div className="space-y-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
            <span className="text-accent font-mono text-[9px] tracking-[0.25em] uppercase font-bold flex items-center gap-2">
              {art.subtitle && (
                <span className="text-accent/70 font-medium">{art.subtitle}</span>
              )}
              <span>{art.medium}</span>
            </span>
            <h3 className="font-serif text-2xl font-light text-bg-gallery tracking-wide leading-tight">
              {art.title}
            </h3>
            <div className="flex justify-between items-center pt-2 text-bg-gallery/50 text-[10px] font-sans">
              <span className="tracking-widest">Inquire Studio</span>
              <span className="font-serif italic text-accent font-light text-sm">{art.year}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="w-full bg-bg-gallery min-h-screen pt-32 pb-24 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
      
      {/* Page Header */}
      <div className="space-y-4 mb-16 text-center md:text-left">
        <span className="text-accent text-xs uppercase tracking-[0.4em] font-medium block">
          Sai Arts Catalog
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-primary">
          Immersive <span className="italic font-normal text-accent">Gallery</span>
        </h1>
        <p className="max-w-md text-text-gray font-light text-xs md:text-sm leading-relaxed pt-2">
          An ongoing survey of museum-quality canvases, academic sketches, and golden abstract studies crafted inside the studio.
        </p>
      </div>

      {/* Mobile: single column, all artworks */}
      <div className="flex flex-col md:hidden gap-8">
        {ARTWORKS.map(renderArtworkCard)}
      </div>

      {/* Tablet: 2-column masonry */}
      <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
        {[0, 1].map((colIdx) => (
          <div key={colIdx} className="flex flex-col gap-8">
            {masonryCols2[colIdx].map(renderArtworkCard)}
          </div>
        ))}
      </div>

      {/* Desktop: 3-column masonry */}
      <div className="hidden lg:grid grid-cols-3 gap-8">
        {[0, 1, 2].map((colIdx) => (
          <div key={colIdx} className="flex flex-col gap-8">
            {masonryCols3[colIdx].map(renderArtworkCard)}
          </div>
        ))}
      </div>

      {/* Lightbox Trigger */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        artwork={currentArtwork}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
        currentIndex={lightboxIndex}
        totalCount={ARTWORKS.length}
      />
    </div>
  );
}
