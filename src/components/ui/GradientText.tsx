import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-purple-400 via-primary-500 to-accent-400 bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </span>
  );
}
