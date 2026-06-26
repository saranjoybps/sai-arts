/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomeView from './components/views/HomeView';
import ArtworksView from './components/views/ArtworksView';
import ContactView from './components/views/ContactView';
import CursorFollower from './components/animations/CursorFollower';
import ScrollProgress from './components/animations/ScrollProgress';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-bg-gallery text-primary selection:bg-accent selection:text-primary">
      {/* Scroll indicator & Cursor follower */}
      <ScrollProgress />
      <CursorFollower />

      {/* Primary Navigation Bar */}
      <Navbar />

      {/* Animated Main Content Wrapper */}
      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1], // Luxury easeInOutExpo curve
            }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomeView />} />
              <Route path="/artworks" element={<ArtworksView />} />
              <Route path="/contact" element={<ContactView />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Primary Footer Section */}
      <Footer />
    </div>
  );
}
