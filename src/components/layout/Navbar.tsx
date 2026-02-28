'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#publications', label: 'Research' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showAvatar, setShowAvatar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const hero = document.querySelector('#home');
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowAvatar(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'glass-navbar py-3' : 'py-5'
        )}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo — always takes up space, only visible after scrolling past hero */}
          <button
            onClick={() => handleNavClick('#home')}
            className={cn(
              'w-9 h-9 rounded-full overflow-hidden ring-2 ring-primary-500/50 hover:ring-primary-500 transition-all duration-300 flex-shrink-0',
              showAvatar ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
            )}
          >
            <Image
              src="/images/profile/profile.png"
              alt="Rayhan Pervej"
              width={36}
              height={36}
              className="w-full h-full object-cover"
            />
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const isActive = activeSection === href.replace('#', '');
              return (
                <button
                  key={href}
                  onClick={() => handleNavClick(href)}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 glass rounded-lg border border-primary-500/30"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </button>
              );
            })}
          </div>

          {/* Hire Me button */}
          <a
            href="mailto:rayhanpervej12@gmail.com"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-primary-600 to-accent-500 text-white hover:opacity-90 transition-opacity"
          >
            Hire Me
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg glass text-gray-300 hover:text-white transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            {/* Menu panel */}
            <div className="absolute top-16 left-4 right-4 glass rounded-2xl p-6 border border-white/10">
              <nav className="flex flex-col gap-2">
                {navLinks.map(({ href, label }) => (
                  <button
                    key={href}
                    onClick={() => handleNavClick(href)}
                    className="text-left px-4 py-3 rounded-xl text-gray-300 hover:text-white hover:bg-white/5 transition-colors font-medium"
                  >
                    {label}
                  </button>
                ))}
                <a
                  href="mailto:rayhanpervej12@gmail.com"
                  className="mt-4 flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-primary-600 to-accent-500 text-white"
                >
                  Hire Me
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
