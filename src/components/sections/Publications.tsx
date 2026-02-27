'use client';

import { FileText, ExternalLink, CheckCircle } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { publications } from '@/data/portfolio';

export default function Publications() {
  return (
    <section id="publications" className="section-padding relative">
      <div className="orb w-80 h-80 top-0 right-1/4 bg-cyan-500/10 blur-[100px]" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <SectionHeading
            label="Research"
            title="Publications"
            description="Contributing to the academic community through peer-reviewed research."
          />
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {publications.map((pub, i) => (
            <AnimatedSection key={pub.title} delay={i * 0.1}>
              <div className="glass border border-white/7 rounded-3xl p-8 hover:border-accent-500/30 transition-all duration-300 relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-accent-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 p-3 rounded-2xl bg-accent-500/10 border border-accent-500/20">
                      <FileText size={24} className="text-accent-400" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold tracking-widest uppercase text-accent-400 mb-2 block">
                        Peer-Reviewed · {pub.year}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                        {pub.title}
                      </h3>
                    </div>
                  </div>

                  {/* Journal */}
                  <div className="flex items-center gap-2 mb-6 pl-1">
                    <div className="w-1 h-4 rounded-full bg-gradient-to-b from-primary-500 to-accent-400" />
                    <span className="text-gray-400 font-medium italic">{pub.journal}</span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3 mb-6">
                    {pub.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                        <CheckCircle size={15} className="text-accent-400 flex-shrink-0 mt-0.5" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* DOI link */}
                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-accent-500/30 text-accent-300 hover:border-accent-400 hover:text-white transition-all text-sm font-medium"
                    >
                      <ExternalLink size={14} />
                      View Publication (DOI)
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
