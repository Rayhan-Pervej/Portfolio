'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Github, Star } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { projects } from '@/data/portfolio';

function ProjectImage({
  src,
  alt,
  featured,
}: {
  src: string | null;
  alt: string;
  featured: boolean;
}) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div
        className={`w-full bg-gradient-to-br from-primary-600/30 to-accent-500/30 flex items-center justify-center ${
          featured ? 'h-full min-h-[280px]' : 'h-44'
        }`}
      >
        <span className="text-4xl font-bold text-white/20">{alt[0]}</span>
      </div>
    );
  }

  return (
    <div className={`relative w-full overflow-hidden ${featured ? 'h-full min-h-[280px]' : 'h-44'}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={`${featured ? 'object-cover object-top' : 'object-cover'} group-hover:scale-105 transition-transform duration-500`}
        onError={() => setError(true)}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/60 via-transparent to-transparent" />
    </div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding relative">
      <div className="orb w-96 h-96 top-1/4 left-0 bg-accent-500/10 blur-[120px]" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <SectionHeading
            label="Projects"
            title="What I've Built"
            description="From AI chatbots to mobile apps — projects that solve real problems."
          />
        </AnimatedSection>

        {/* Featured project */}
        {featured && (
          <AnimatedSection delay={0.1} className="mb-8">
            <div className="group glass border border-white/7 rounded-3xl overflow-hidden hover:border-primary-500/30 transition-all duration-300 hover:shadow-glow-lg">
              <div className="lg:flex lg:items-stretch">
                {/* Image */}
                <div className="lg:w-1/2 flex-shrink-0 relative lg:self-stretch min-h-[280px]">
                  <ProjectImage src={featured.image} alt={featured.title} featured />
                  {/* Featured badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary-600 to-accent-500 text-white text-xs font-bold shadow-glow">
                    <Star size={11} fill="currentColor" />
                    Featured
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {featured.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">{featured.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-accent-500/10 text-accent-300 border border-accent-500/25 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {featured.liveUrl && (
                      <a
                        href={featured.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold bg-gradient-to-r from-primary-600 to-accent-500 text-white hover:opacity-90 transition-opacity text-sm"
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </a>
                    )}
                    {featured.githubUrl && (
                      <a
                        href={featured.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold glass border border-white/15 text-gray-300 hover:border-primary-500/40 hover:text-white transition-all text-sm"
                      >
                        <Github size={15} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Other projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((project, i) => (
            <AnimatedSection key={project.title} delay={0.1 + i * 0.1}>
              <div className="group glass border border-white/7 rounded-2xl overflow-hidden hover:border-primary-500/25 transition-all duration-300 hover:-translate-y-1 flex flex-col h-full">
                <ProjectImage src={project.image} alt={project.title} featured={false} />

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-primary-500/10 text-primary-300 border border-primary-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium glass border border-accent-500/30 text-accent-300 hover:border-accent-400 transition-colors"
                      >
                        <ExternalLink size={12} />
                        Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium glass border border-white/15 text-gray-400 hover:border-primary-500/40 hover:text-white transition-colors"
                      >
                        <Github size={12} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* GitHub CTA */}
        <AnimatedSection delay={0.4} className="mt-12 text-center">
          <a
            href="https://github.com/Rayhan-Pervej"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full glass border border-white/15 text-gray-300 hover:border-primary-500/50 hover:text-white transition-all font-medium"
          >
            <Github size={18} />
            View All Projects on GitHub
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
