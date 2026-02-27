'use client';

import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { education } from '@/data/portfolio';

export default function Education() {
  return (
    <section id="education" className="section-padding relative">
      <div className="orb w-80 h-80 bottom-0 left-1/3 bg-primary-600/10 blur-[100px]" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <SectionHeading
            label="Education"
            title="Academic Background"
            description="The foundation that shapes my technical thinking."
          />
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, i) => (
            <AnimatedSection key={edu.institution} delay={i * 0.15}>
              <div className="group glass border border-white/7 rounded-2xl p-6 hover:border-primary-500/25 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-600/30 to-accent-500/30 border border-primary-500/20 flex items-center justify-center">
                      <GraduationCap size={24} className="text-primary-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{edu.institution}</h3>
                    <p className="text-primary-400 font-medium mb-2">{edu.degree}</p>

                    <div className="flex flex-wrap gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        {edu.location}
                      </span>
                      {edu.grade && (
                        <span className="flex items-center gap-1.5 text-yellow-400/80">
                          <Award size={13} />
                          {edu.grade}
                        </span>
                      )}
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
