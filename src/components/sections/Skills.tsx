'use client';

import { motion } from 'framer-motion';
import { Smartphone, Server, Brain, Wrench } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { GlassCard } from '@/components/ui/GlassCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skills } from '@/data/portfolio';
import type { Skill } from '@/types';

const categories = [
  {
    key: 'mobile' as const,
    label: 'Mobile Development',
    icon: Smartphone,
    color: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
  },
  {
    key: 'backend' as const,
    label: 'Backend & APIs',
    icon: Server,
    color: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    badgeColor: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
  },
  {
    key: 'ai' as const,
    label: 'AI / LLM / GenAI',
    icon: Brain,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    badgeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]',
  },
  {
    key: 'tools' as const,
    label: 'Databases & Tools',
    icon: Wrench,
    color: 'text-gray-400',
    borderColor: 'border-gray-500/30',
    badgeColor: 'bg-gray-500/10 text-gray-300 border-gray-500/30',
    glowColor: 'group-hover:shadow-[0_0_30px_rgba(156,163,175,0.1)]',
  },
];

function SkillBadge({ skill, badgeColor, index }: { skill: Skill; badgeColor: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium border ${badgeColor} hover:scale-105 transition-transform cursor-default`}
    >
      {skill.name}
    </motion.span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="orb w-80 h-80 top-0 left-1/4 bg-cyan-500/10 blur-[100px]" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <SectionHeading
            label="Technical Skills"
            title="My Tech Stack"
            description="Technologies I use to build mobile apps, backend systems, and AI-powered solutions."
          />
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, catIndex) => {
            const Icon = cat.icon;
            const catSkills = skills.filter((s) => s.category === cat.key);

            return (
              <AnimatedSection key={cat.key} delay={catIndex * 0.1}>
                <div className={`group glass rounded-2xl p-6 border border-white/5 transition-all duration-300 hover:border-opacity-60 hover:${cat.borderColor} ${cat.glowColor}`}>
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`p-2.5 rounded-xl glass border ${cat.borderColor}`}>
                      <Icon size={20} className={cat.color} />
                    </div>
                    <h3 className="font-semibold text-white text-lg">{cat.label}</h3>
                    <span className="ml-auto text-xs text-gray-600 font-medium">
                      {catSkills.length} skills
                    </span>
                  </div>

                  {/* Skill badges */}
                  <div className="flex flex-wrap gap-2">
                    {catSkills.map((skill, i) => (
                      <SkillBadge
                        key={skill.name}
                        skill={skill}
                        badgeColor={cat.badgeColor}
                        index={i}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Bottom languages strip */}
        <AnimatedSection delay={0.4} className="mt-8">
          <GlassCard hover={false} className="text-center">
            <p className="text-sm text-gray-500 mb-4 font-medium uppercase tracking-widest">
              Programming Languages
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-gray-300">
              {['Python', 'Dart', 'JavaScript', 'C++'].map((lang) => (
                <span key={lang} className="font-semibold text-lg hover:gradient-text transition-all cursor-default">
                  {lang}
                </span>
              ))}
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
}
