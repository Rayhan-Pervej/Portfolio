import { cn } from '@/lib/utils';
import { GradientText } from './GradientText';

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-16',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-primary-400 mb-3 px-3 py-1 rounded-full glass border border-primary-500/20">
        {label}
      </span>
      <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
        <GradientText>{title}</GradientText>
      </h2>
      {description && (
        <p
          className={cn(
            'text-gray-400 text-lg leading-relaxed',
            align === 'center' && 'max-w-2xl mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
