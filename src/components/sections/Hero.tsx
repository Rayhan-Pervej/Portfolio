'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Linkedin, Mail, Download, ArrowDown, ExternalLink } from 'lucide-react';
import { GradientText } from '@/components/ui/GradientText';
import { personalInfo } from '@/data/portfolio';

function TypewriterRoles({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState<'typing' | 'hold' | 'erasing'>('typing');

  useEffect(() => {
    const current = roles[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === 'typing') {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setPhase('hold'), 1800);
      }
    } else if (phase === 'hold') {
      timeout = setTimeout(() => setPhase('erasing'), 300);
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setIndex((i) => (i + 1) % roles.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, index, roles]);

  return (
    <span className="text-primary-400">
      {displayed}
      <span className="animate-pulse text-accent-400">|</span>
    </span>
  );
}

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Gradient orbs */}
      <div className="orb w-[500px] h-[500px] top-[-100px] left-[-150px] bg-purple-600/15 blur-[120px]" />
      <div className="orb w-[400px] h-[400px] bottom-[-80px] right-[-100px] bg-cyan-500/15 blur-[100px]" />
      <div className="orb w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-600/10 blur-[80px]" />

      <div className="container-custom relative z-10 pt-20 pb-12 lg:min-h-screen lg:flex lg:items-center lg:py-28">
        <div className="w-full flex flex-col lg:flex-row items-center gap-4 sm:gap-8 lg:gap-20">

          {/* ── Profile image ───────────────────────────── */}
          <motion.div
            className="relative flex-shrink-0 order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            {/* Floating animation wrapper */}
            <div className="animate-float">
              {/* Outer spinning gradient ring */}
              <div className="relative w-36 h-36 sm:w-56 sm:h-56 lg:w-80 lg:h-80">
                <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-primary-500 via-accent-400 to-primary-500 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-[#0a0a0a]" />
                </div>

                {/* Glow rings */}
                <div className="absolute inset-2 rounded-full border border-primary-500/20" />
                <div className="absolute inset-4 rounded-full border border-accent-400/10" />

                {/* Photo or gradient placeholder */}
                <div className="absolute inset-[6px] rounded-full overflow-hidden">
                  {!imageError ? (
                    <Image
                      src={personalInfo.photo}
                      alt={personalInfo.name}
                      fill
                      className="object-cover rounded-full"
                      onError={() => setImageError(true)}
                      priority
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center">
                      <span className="text-5xl font-bold text-white/80">RP</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Floating stat chips */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
              className="hidden sm:block absolute -top-4 -left-8 glass border border-white/10 rounded-xl px-3 py-2 text-xs font-medium"
            >
              <span className="text-primary-400">Flutter</span>
              <span className="text-gray-500"> + </span>
              <span className="text-accent-400">AI/LLM</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, delay: 1 }}
              className="hidden sm:block absolute -bottom-4 -right-8 glass border border-white/10 rounded-xl px-3 py-2 text-xs font-medium text-gray-300"
            >
              🚀 Open to work
            </motion.div>
          </motion.div>

          {/* ── Text ───────────────────────────────────── */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 glass border border-green-500/30 rounded-full px-4 py-2 mb-3 text-sm text-gray-300"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse" />
              Available for opportunities
            </motion.div>

            {/* Name */}
            <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-2">
              Hi, I&apos;m
              <br />
              <GradientText>{personalInfo.name}</GradientText>
            </h1>

            {/* Typewriter roles */}
            <div className="text-lg sm:text-2xl text-gray-300 mb-2 h-8 font-medium">
              <TypewriterRoles roles={personalInfo.roles} />
            </div>

            {/* Tagline */}
            <p className="text-gray-400 text-sm sm:text-lg max-w-xl mx-auto lg:mx-0 mb-5 leading-relaxed">
              {personalInfo.tagline}. Based in{' '}
              <span className="text-gray-300 font-medium">Dhaka, Bangladesh</span>.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-5">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold bg-gradient-to-r from-primary-600 to-accent-500 text-white hover:opacity-90 hover:scale-105 transition-all shadow-glow"
              >
                View My Work
                <ExternalLink size={16} />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold glass border border-primary-500/40 text-gray-200 hover:border-primary-400 hover:text-white hover:scale-105 transition-all"
              >
                <Download size={16} />
                Contact Me
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <span className="text-gray-600 text-sm">Find me on</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full glass border border-white/10 text-gray-400 hover:text-white hover:border-primary-500/50 hover:scale-110 transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full glass border border-white/10 text-gray-400 hover:text-white hover:border-primary-500/50 hover:scale-110 transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-full glass border border-white/10 text-gray-400 hover:text-white hover:border-primary-500/50 hover:scale-110 transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-gray-600"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} />
        </motion.div>
      </div>
    </section>
  );
}
