'use client';

import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { experiences } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="orb w-96 h-96 bottom-0 right-0 bg-primary-600/10 blur-[120px]" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <SectionHeading
            label="Work Experience"
            title="Where I've Worked"
            description="Real-world impact through production apps and AI systems."
          />
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, expIndex) => (
            <AnimatedSection key={`${exp.company}-${exp.role}`} delay={expIndex * 0.15}>
              <div className="flex gap-6">

                {/* ── Left column: line + dot ── */}
                <div className="flex flex-col items-center flex-shrink-0">
                  {/* Dot */}
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary-500 to-accent-400 shadow-glow flex items-center justify-center flex-shrink-0 mt-3">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  {/* Line below dot */}
                  <div className="flex-1 w-px bg-gradient-to-b from-primary-500/60 to-transparent mt-2" />
                </div>

                {/* ── Right column: card ── */}
                <div className="flex-1 pb-4">
                  <div className="glass border border-white/7 rounded-2xl p-6 hover:border-primary-500/25 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase size={16} className="text-primary-400" />
                          <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                          <span
                            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                              exp.type === 'fulltime'
                                ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30'
                                : 'bg-gray-500/20 text-gray-400 border border-gray-500/30'
                            }`}
                          >
                            {exp.type === 'fulltime' ? 'Full-time' : 'Intern'}
                          </span>
                        </div>
                        <p className="text-primary-400 font-semibold text-base">{exp.company}</p>
                      </div>

                      <div className="flex flex-col sm:items-end gap-1 text-sm text-gray-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={13} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Projects */}
                    <div className="space-y-5">
                      {exp.projects.map((project) => (
                        <div
                          key={project.name}
                          className="pl-4 border-l-2 border-primary-500/30 hover:border-primary-500/60 transition-colors"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <ChevronRight size={14} className="text-accent-400 flex-shrink-0" />
                            <h4 className="font-semibold text-white">{project.name}</h4>
                          </div>
                          <p className="text-gray-400 text-sm leading-relaxed mb-3">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2.5 py-1 rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/20 font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
