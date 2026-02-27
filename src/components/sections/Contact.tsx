'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionHeading } from '@/components/ui/SectionHeading';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type FormData = z.infer<typeof schema>;

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rayhanpervej12@gmail.com',
    href: 'mailto:rayhanpervej12@gmail.com',
    color: 'text-primary-400',
    border: 'hover:border-primary-500/40',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/rayhanpervej',
    href: 'https://linkedin.com/in/rayhanpervej',
    color: 'text-blue-400',
    border: 'hover:border-blue-500/40',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Rayhan-Pervej',
    href: 'https://github.com/Rayhan-Pervej',
    color: 'text-gray-300',
    border: 'hover:border-gray-500/40',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dhaka, Bangladesh',
    href: null,
    color: 'text-accent-400',
    border: '',
  },
];

export default function Contact() {
  const [submitState, setSubmitState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setSubmitState('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitState('success');
        reset();
        setTimeout(() => setSubmitState('idle'), 5000);
      } else {
        setSubmitState('error');
        setTimeout(() => setSubmitState('idle'), 4000);
      }
    } catch {
      setSubmitState('error');
      setTimeout(() => setSubmitState('idle'), 4000);
    }
  };

  const inputClass =
    'w-full glass border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-primary-500/60 focus:bg-white/[0.06] transition-all';
  const errorClass = 'text-red-400 text-xs mt-1';

  return (
    <section id="contact" className="section-padding relative">
      <div className="orb w-96 h-96 bottom-0 right-0 bg-primary-600/15 blur-[120px]" />
      <div className="orb w-64 h-64 top-0 left-1/4 bg-accent-500/10 blur-[80px]" />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <SectionHeading
            label="Contact"
            title="Let's Work Together"
            description="Have a project in mind or want to chat? I'm always open to new opportunities."
          />
        </AnimatedSection>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* ── Contact info ──────────────────────────── */}
          <AnimatedSection direction="left" className="lg:col-span-2 space-y-4">
            <div className="glass border border-white/7 rounded-2xl p-6 mb-6">
              <h3 className="font-bold text-white text-lg mb-2">Get in touch</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Currently open to full-time roles and freelance work. Let&apos;s build something
                great together!
              </p>
            </div>

            {contactLinks.map(({ icon: Icon, label, value, href, color, border }) => (
              <div key={label}>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex items-start gap-4 glass border border-white/7 rounded-xl p-4 transition-all duration-200 ${border}`}
                  >
                    <div className="p-2 rounded-lg glass flex-shrink-0">
                      <Icon size={16} className={color} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-medium mb-0.5">{label}</p>
                      <p className="text-sm text-gray-300 break-all">{value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 glass border border-white/7 rounded-xl p-4">
                    <div className="p-2 rounded-lg glass flex-shrink-0">
                      <Icon size={16} className={color} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 font-medium mb-0.5">{label}</p>
                      <p className="text-sm text-gray-300">{value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </AnimatedSection>

          {/* ── Contact form ──────────────────────────── */}
          <AnimatedSection direction="right" delay={0.1} className="lg:col-span-3">
            <div className="glass border border-white/7 rounded-2xl p-8">
              <div className="flex items-center gap-2 text-yellow-400 text-xs bg-yellow-500/10 border border-yellow-500/20 rounded-lg px-3 py-2 mb-5">
                <AlertCircle size={14} className="flex-shrink-0" />
                Demo only — form submissions are not delivered. Contact me directly via email or LinkedIn.
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      {...register('name')}
                      placeholder="Your Name"
                      className={inputClass}
                    />
                    {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                  </div>
                  <div>
                    <input
                      {...register('email')}
                      placeholder="Your Email"
                      type="email"
                      className={inputClass}
                    />
                    {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <input
                    {...register('subject')}
                    placeholder="Subject"
                    className={inputClass}
                  />
                  {errors.subject && <p className={errorClass}>{errors.subject.message}</p>}
                </div>

                <div>
                  <textarea
                    {...register('message')}
                    placeholder="Your message..."
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                  {errors.message && <p className={errorClass}>{errors.message.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitState === 'loading'}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-primary-600 to-accent-500 text-white hover:opacity-90 disabled:opacity-60 transition-all"
                >
                  {submitState === 'loading' ? (
                    <>
                      <div className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status messages */}
                {submitState === 'success' && (
                  <div className="flex items-center gap-2 text-green-400 text-sm bg-green-500/10 border border-green-500/20 rounded-xl p-3">
                    <CheckCircle size={16} />
                    Message sent! I&apos;ll get back to you soon.
                  </div>
                )}
                {submitState === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                    <AlertCircle size={16} />
                    Something went wrong. Please try emailing me directly.
                  </div>
                )}
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
