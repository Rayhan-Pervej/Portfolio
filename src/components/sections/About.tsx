'use client';

import { useState } from 'react';
import Image from 'next/image';
import { MapPin, Mail, Github, Linkedin } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { personalInfo, stats } from '@/data/portfolio';

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="section-padding relative">
      {/* Background orb */}
      <div className="orb w-96 h-96 top-1/2 right-0 bg-primary-600/10 blur-[100px]" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <SectionHeading
            label="About Me"
            title="Who I Am"
            description="A passionate developer who loves building things that matter."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── Photo side ─────────────────────────────── */}
          <AnimatedSection direction="left" className="flex justify-center">
            <div className="relative">
              {/* Gradient frame */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/30 to-accent-500/30 blur-2xl scale-110" />
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden glass border border-white/10">
                {!imageError ? (
                  <Image
                    src={personalInfo.aboutPhoto}
                    alt={`${personalInfo.name} photo`}
                    fill
                    className="object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-600/40 to-accent-500/40 flex items-center justify-center">
                    <span className="text-7xl font-bold gradient-text">RP</span>
                  </div>
                )}
                {/* Overlay gradient at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent" />
              </div>

              {/* Location chip */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 glass border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 text-sm text-gray-300 whitespace-nowrap">
                <MapPin size={14} className="text-primary-400" />
                {personalInfo.location}
              </div>
            </div>
          </AnimatedSection>

          {/* ── Text side ──────────────────────────────── */}
          <AnimatedSection direction="right" delay={0.1}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Building the Future with{' '}
                  <span className="gradient-text">Code & AI</span>
                </h3>
                <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                  {personalInfo.bio}
                </p>
              </div>

              <p className="text-gray-400 leading-relaxed">
                I apply clean architecture principles to deliver maintainable Flutter and
                backend systems in collaborative environments. Currently exploring the
                frontier of Agentic AI and RAG-based systems.
              </p>

              {/* Contact chips */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 glass border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300 hover:border-primary-500/40 hover:text-white transition-all"
                >
                  <Mail size={14} className="text-primary-400" />
                  {personalInfo.email}
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 glass border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300 hover:border-primary-500/40 hover:text-white transition-all"
                >
                  <Github size={14} className="text-primary-400" />
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 glass border border-white/10 rounded-full px-4 py-2 text-sm text-gray-300 hover:border-primary-500/40 hover:text-white transition-all"
                >
                  <Linkedin size={14} className="text-accent-400" />
                  LinkedIn
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {stats.map((stat, i) => (
                  <AnimatedSection key={stat.label} delay={0.2 + i * 0.1}>
                    <GlassCard className="text-center py-4 px-2" hover={false}>
                      <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                    </GlassCard>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
