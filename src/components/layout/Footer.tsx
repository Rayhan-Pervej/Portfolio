import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 mt-10">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-2xl font-bold gradient-text mb-1">Rayhan Pervej</p>
          <p className="text-sm text-gray-500">Software Engineer · Flutter · AI/LLM</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass border border-white/10 text-gray-400 hover:text-white hover:border-primary-500/50 transition-all"
          >
            <Github size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full glass border border-white/10 text-gray-400 hover:text-white hover:border-primary-500/50 transition-all"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-full glass border border-white/10 text-gray-400 hover:text-white hover:border-primary-500/50 transition-all"
          >
            <Mail size={18} />
          </a>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Rayhan Pervej
          </p>
          <a
            href="#home"
            className="p-2.5 rounded-full glass border border-white/10 text-gray-400 hover:text-white hover:border-primary-500/50 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
