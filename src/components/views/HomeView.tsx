import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ArrowDown, Heart, Gift, Image, RotateCcw, Sparkles } from 'lucide-react';
import { ARTWORKS, PROCESS_STEPS, ARTIST_PORTRAIT } from '../../data/artworks';
import { FadeIn, WordReveal, LetterReveal, ImageReveal } from '../animations/Reveal';
import Magnetic from '../animations/Magnetic';

export default function HomeView() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax scroll controls for Hero Collage
  const { scrollY } = useScroll();
  const yCollage1 = useTransform(scrollY, [0, 800], [0, -120]);
  const yCollage2 = useTransform(scrollY, [0, 800], [0, -50]);
  const yCollage3 = useTransform(scrollY, [0, 800], [0, -200]);

  const featuredArtworks = ARTWORKS.filter(art => art.featured);

  // Helper to resolve string icons dynamically for the process steps
  const renderProcessIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart': return <Heart className="text-accent" size={24} />;
      case 'Gift': return <Gift className="text-accent" size={24} />;
      case 'Image': return <Image className="text-accent" size={24} />;
      case 'RotateCcw': return <RotateCcw className="text-accent" size={24} />;
      case 'Sparkles': return <Sparkles className="text-accent" size={24} />;
      default: return <Heart className="text-accent" size={24} />;
    }
  };

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-bg-gallery">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-between pt-36 pb-16 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
        {/* Subtle Editorial Grid Lines */}
        <div className="absolute top-[50%] left-0 w-full h-px bg-primary/5 z-0 pointer-events-none" />
        <div className="absolute top-0 left-[50%] w-px h-full bg-primary/5 z-0 pointer-events-none" />
        
        {/* Floating Decorative Elements */}
        <div className="absolute top-[20%] left-[5%] w-[1px] h-32 bg-gradient-to-b from-accent/30 to-transparent pointer-events-none" />
        <div className="absolute top-[45%] right-[10%] text-[10px] font-mono tracking-[0.4em] text-accent/40 uppercase hidden md:block select-none pointer-events-none rotate-90 z-10">
          ESTABLISHED 2021
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto relative z-10">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div className="space-y-3">
              <span className="text-accent text-[10px] uppercase tracking-[0.4em] font-bold block">
                ESTABLISHED 2021
              </span>
              <h1 className="font-serif text-7xl sm:text-8xl xl:text-9xl font-light tracking-tighter text-primary leading-[0.85] uppercase">
                SAI<br/>ARTS
              </h1>
            </div>

            <div className="flex flex-col gap-5 max-w-md">
              <h2 className="text-2xl italic font-serif text-primary/80">
                Where Creativity Meets Canvas
              </h2>
              <WordReveal
                text="A curated sanctuary of contemporary expression, blending traditional craftsmanship with avant-garde vision. Explore the silent dialogue between form and color through the lens of a modern master."
                delay={0.4}
                className="text-text-gray font-light leading-relaxed text-sm md:text-base"
              />
            </div>

            <div className="flex flex-wrap items-center gap-8 pt-4">
              <Magnetic range={40}>
                <div
                  onClick={() => navigate('/artworks')}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center relative transition-transform group-hover:scale-105">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-primary group-hover:text-accent transition-colors">
                    Explore Collection
                  </span>
                </div>
              </Magnetic>

              <button
                onClick={() => navigate('/contact')}
                className="text-[11px] uppercase tracking-[0.2em] py-3 text-primary/60 hover:text-accent font-semibold transition-colors cursor-pointer border-b border-primary/10 hover:border-accent duration-300"
              >
                Inquire Studio
              </button>
            </div>
          </div>

          {/* Hero Right Collage with Polaroid-style Rotating Frames */}
          <div className="lg:col-span-5 relative h-[520px] sm:h-[640px] w-full flex items-center justify-center select-none">
            {/* Background decorative square */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-[80%] h-[80%] border border-primary/5 rounded-2xl pointer-events-none"
            />

            {/* Collage Artwork 1 (Right side, slightly rotated) */}
            <motion.div
              style={{ y: yCollage1 }}
              className="absolute right-0 top-8 w-[260px] sm:w-[340px] aspect-[4/5] editorial-artwork-frame rotate-3 z-10"
            >
              <ImageReveal
                src="/IMG_6246.jpg"
                alt="Artwork"
                aspectRatio="aspect-[4/5]"
                delay={0.5}
              />
            </motion.div>

            {/* Collage Artwork 2 (Center-left, counter-rotated offset) */}
            <motion.div
              style={{ y: yCollage2 }}
              className="absolute left-0 bottom-8 w-[230px] sm:w-[300px] aspect-[4/5] editorial-artwork-frame -rotate-6 z-0"
            >
              <ImageReveal
                src="/IMG_6203.jpg"
                alt="Silent Glow"
                aspectRatio="aspect-[4/5]"
                delay={0.7}
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col items-center justify-center space-y-2 mt-8 cursor-pointer group z-10"
          onClick={() => {
            const featuredSection = document.getElementById('featured-gallery');
            featuredSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-text-gray group-hover:text-accent transition-colors">
            Scroll To Explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="text-accent"
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. FEATURED ARTWORKS (Horizontal Slider Layout) */}
      <section id="featured-gallery" className="py-24 md:py-32 bg-primary text-bg-gallery overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="text-accent text-xs uppercase tracking-[0.4em] font-medium block">
                Curated Collection
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-bg-gallery">
                Featured <span className="italic font-normal text-accent">Masterpieces</span>
              </h2>
            </div>
            <p className="max-w-xs text-xs md:text-sm text-bg-gallery/60 font-light leading-relaxed">
              A precise selection of current artworks exemplifying traditional values, high texture, and luxury design.
            </p>
          </div>
        </div>

        {/* Horizontal Card Carousel View */}
        <div className="relative pl-6 md:pl-16 lg:pl-24 pr-6 flex gap-8 overflow-x-auto pb-12 snap-x snap-mandatory scrollbar-thin scrollbar-track-primary scrollbar-thumb-accent">
          {featuredArtworks.map((art, idx) => (
            <motion.div
              key={art.id}
              className="flex-shrink-0 w-[280px] sm:w-[380px] md:w-[450px] snap-start group cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-5%' }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Card Image Container */}
              <div className="relative overflow-hidden aspect-[4/5] rounded-sm mb-4 border border-bg-gallery/10 bg-black/40">
                {/* Glow Highlight */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                
                {/* Real-time zoom in */}
                <img
                  src={art.image}
                  alt={art.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                />

                {/* Overlay Text Details */}
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <p className="text-accent font-mono text-[10px] tracking-widest uppercase mb-1">{art.dimensions}</p>
                  <p className="text-bg-gallery font-serif text-lg tracking-wide">{art.description}</p>
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="flex justify-between items-start pt-2">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-bg-gallery group-hover:text-accent transition-colors duration-300">
                    {art.title}
                  </h3>
                  <p className="text-xs text-bg-gallery/55 font-light tracking-wider mt-1">{art.medium}</p>
                </div>
                <span className="font-serif italic text-accent font-light text-base">{art.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. ABOUT SECTION */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Portrait Image (Right in design but placed left for bento balancing) */}
          <div className="lg:col-span-5">
            <FadeIn direction="left" delay={0.2}>
              <div className="relative p-4 border border-primary/5 rounded-2xl bg-[#f7f5f2]">
                <ImageReveal
                  src={ARTIST_PORTRAIT}
                  alt="Sai Portrait"
                  aspectRatio="aspect-[3/4]"
                  className="rounded-lg shadow-lg"
                />
                {/* Tiny Gold Seal */}
                <div className="absolute -bottom-6 -right-6 w-20 h-20 border border-accent/20 rounded-full flex items-center justify-center bg-bg-gallery/90 backdrop-blur shadow-sm pointer-events-none hidden md:flex">
                  <span className="text-[8px] font-mono tracking-widest text-accent font-bold uppercase text-center leading-tight">
                    Sai<br/>Studio
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Artist Bio */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-accent text-xs uppercase tracking-[0.4em] font-medium block">
                The Brush & The Soul
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-primary">
                A Visionary <span className="italic font-normal text-accent">Journey</span>
              </h2>
            </div>

            <div className="space-y-6 text-text-gray font-light text-sm md:text-base leading-relaxed">
              <p>
                Sai is an acclaimed contemporary master artist based in an immersive forest studio, dedicated to oil canvases and classical charcoal sketching. Drawing structural wisdom from neoclassical architecture and texture contrasts from nature, Sai creates art that stands between luxury gallery design and organic emotion.
              </p>
              <p className="border-l border-accent/40 pl-6 italic text-primary/80 font-serif text-base sm:text-lg">
                "I do not paint the object as it appears. I paint the silence it leaves behind, the lingering dust of sunlight, and the weight of shadows."
              </p>
              <p>
                With exhibits featured in contemporary design galleries and private collectors globally, each Sai Arts masterpiece is framed by hands, accompanied by physical signature certificate, and designed to anchor luxurious visual environments.
              </p>
            </div>

            <div className="pt-4">
              <Magnetic range={40}>
                <button
                  onClick={() => navigate('/contact')}
                  className="border border-primary text-primary hover:bg-primary hover:text-bg-gallery text-xs uppercase tracking-[0.25em] px-8 py-4 transition-colors duration-300 rounded-sm cursor-pointer"
                >
                  Book Private Viewing
                </button>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES & ORDERING */}
      <section className="py-24 md:py-32 bg-[#F7F5F2] relative">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          
          <div className="text-center max-w-xl mx-auto mb-20 space-y-4">
            <span className="text-accent text-xs uppercase tracking-[0.4em] font-medium block">
              Commission Your Art
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight text-primary">
              Order a <span className="italic font-normal text-accent">Sketch</span>
            </h2>
            <div className="w-12 h-[1px] bg-accent mx-auto mt-6" />
          </div>

          {/* Timeline Stack */}
          <div className="relative border-l border-primary/10 ml-4 md:ml-32 space-y-16">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={step.id} className="relative pl-8 md:pl-12 group">
                {/* Timeline dot / icon container */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-15%' }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="absolute left-[-20px] top-0 w-10 h-10 rounded-full bg-bg-gallery border border-accent flex items-center justify-center shadow-sm z-10 text-accent group-hover:bg-primary group-hover:text-bg-gallery transition-all duration-300"
                >
                  {renderProcessIcon(step.icon)}
                </motion.div>

                {/* Timeline Step index indicator */}
                <span className="absolute left-[-90px] top-2 text-accent font-serif italic text-lg hidden md:block opacity-60">
                  0{step.id}
                </span>

                <div className="space-y-2">
                  <FadeIn direction="up" delay={0.15}>
                    <h3 className="font-serif text-2xl font-light text-primary group-hover:text-accent transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-text-gray font-light text-sm md:text-base leading-relaxed max-w-2xl mt-2">
                      {step.description}
                    </p>
                  </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUOTE SECTION */}
      <section className="py-32 md:py-48 bg-primary text-bg-gallery relative flex items-center justify-center text-center overflow-hidden">
        {/* Subtle geometric circle background */}
        <div className="absolute w-[500px] h-[500px] rounded-full border border-bg-gallery/5 pointer-events-none opacity-40" />
        <div className="absolute w-[800px] h-[800px] rounded-full border border-bg-gallery/[0.02] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <span className="text-accent text-[10px] tracking-[0.4em] uppercase font-medium block mb-8">
            Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light leading-snug tracking-tight text-bg-gallery">
            <LetterReveal text="&ldquo;Every Canvas Tells A Story.&rdquo;" delay={0.2} />
          </h2>
          <div className="w-10 h-[1.5px] bg-accent mx-auto mt-8 mb-4" />
          <span className="text-xs uppercase tracking-[0.3em] text-bg-gallery/40 font-mono">
            — Sai Arts
          </span>
        </div>
      </section>

      {/* 6. CALL TO ACTION (CTA) */}
      <section className="py-24 md:py-32 bg-bg-gallery text-center max-w-5xl mx-auto px-6 relative">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-accent text-xs uppercase tracking-[0.4em] font-medium block">
              Artistic Acquisition
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl font-light tracking-tight text-primary leading-tight">
              Explore My <span className="italic font-normal text-accent">Collection</span>
            </h2>
          </div>

          <p className="max-w-lg mx-auto text-text-gray font-light text-sm md:text-base leading-relaxed">
            Delve into high-definition digital previews, material specifications, and purchase options for all active oil paintings, portraits, abstract works, and hand sketches.
          </p>

          <div className="pt-6">
            <Magnetic range={50}>
              <button
                onClick={() => navigate('/artworks')}
                className="bg-primary hover:bg-accent text-bg-gallery text-xs uppercase tracking-[0.25em] px-10 py-5 rounded-sm shadow-md transition-colors duration-300 font-sans font-medium cursor-pointer"
              >
                Enter Immersive Gallery
              </button>
            </Magnetic>
          </div>
        </div>
      </section>

    </div>
  );
}
