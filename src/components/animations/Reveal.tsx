import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 30,
  direction = 'up'
}: FadeInProps) {
  const directions = {
    up: { x: 0, y: yOffset },
    down: { x: 0, y: -yOffset },
    left: { x: yOffset, y: 0 },
    right: { x: -yOffset, y: 0 },
    none: { x: 0, y: 0 }
  };

  const initial = {
    opacity: 0,
    ...directions[direction]
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1] // Custom easeInOutExpo for luxury feel
      }}
    >
      {children}
    </motion.div>
  );
}

interface WordRevealProps {
  text: string;
  delay?: number;
  className?: string;
}

export function WordReveal({ text, delay = 0, className = '' }: WordRevealProps) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        damping: 25,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      className={`inline-block ${className}`}
    >
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.25em] py-1">
          <motion.span variants={child} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

interface LetterRevealProps {
  text: string;
  delay?: number;
  className?: string;
}

export function LetterReveal({ text, delay = 0, className = '' }: LetterRevealProps) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const
      }
    },
    hidden: {
      opacity: 0,
      y: '100%',
    },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10%' }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {letters.map((letter, index) => (
        <span key={index} className="inline-block overflow-hidden leading-tight">
          <motion.span variants={child} className="inline-block">
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

interface ImageRevealProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  delay?: number;
}

export function ImageReveal({
  src,
  alt,
  className = '',
  aspectRatio = 'aspect-[3/4]',
  delay = 0
}: ImageRevealProps) {
  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
      {/* Slide overlay for that high-end reveal */}
      <motion.div
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{
          duration: 1.1,
          delay,
          ease: [0.76, 0, 0.24, 1]
        }}
        className="absolute inset-0 bg-accent origin-top z-10"
      />
      
      {/* Zoom in image upon load */}
      <motion.img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        initial={{ scale: 1.25 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{
          duration: 1.4,
          delay: delay + 0.1,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
