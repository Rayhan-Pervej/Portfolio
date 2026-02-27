'use client';

import { Trophy, Medal } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { awards } from '@/data/portfolio';
import type { Award } from '@/types';

const rankConfig: Record<
  Award['rank'],
  { icon: typeof Trophy; bg: string; border: string; badge: string; glow: string }
> = {
  champion: {
    icon: Trophy,
    bg: 'from-yellow-600/25 to-amber-500/15',
    border: 'border-yellow-500/30 hover:border-yellow-400/50',
    badge: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    glow: 'hover:shadow-[0_0_30px_rgba(234,179,8,0.15)]',
  },
  'runner-up': {
    icon: Medal,
    bg: 'from-slate-500/20 to-slate-400/10',
    border: 'border-slate-500/30 hover:border-primary-500/40',
    badge: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
    glow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]',
  },
  other: {
    icon: Medal,
    bg: 'from-primary-600/20 to-accent-500/10',
    border: 'border-primary-500/20 hover:border-primary-500/40',
    badge: 'bg-primary-500/20 text-primary-300 border-primary-500/30',
    glow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]',
  },
};

export default function Awards() {
  return (
    <section id="awards" className="section-padding relative">
      <div className="orb w-80 h-80 top-1/2 left-0 bg-yellow-500/8 blur-[100px]" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <SectionHeading
            label="Honors & Awards"
            title="Achievements"
            description="Recognition for innovation, problem-solving, and engineering excellence."
          />
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {awards.map((award, i) => {
            const config = rankConfig[award.rank];
            const Icon = config.icon;

            return (
              <AnimatedSection key={award.title + award.event} delay={i * 0.12}>
                <div
                  className={`group glass rounded-2xl p-6 border transition-all duration-300 flex flex-col ${config.border} ${config.glow}`}
                >
                  {/* Icon with gradient bg */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${config.bg} flex items-center justify-center mb-5 border ${config.border.split(' ')[0]}`}
                  >
                    <Icon
                      size={24}
                      className={
                        award.rank === 'champion' ? 'text-yellow-400' : 'text-slate-300'
                      }
                    />
                  </div>

                  {/* Badge */}
                  <span
                    className={`self-start text-xs font-bold px-2.5 py-1 rounded-full border mb-3 ${config.badge}`}
                  >
                    {award.title}
                  </span>

                  {/* Event */}
                  <h3 className="font-semibold text-white text-base mb-2 leading-snug">
                    {award.event}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {award.description}
                  </p>

                  {/* Year */}
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <span className="text-xs text-gray-600 font-medium">{award.year}</span>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
