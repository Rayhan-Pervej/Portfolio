import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glowOnHover?: boolean;
}

export function GlassCard({
  children,
  className,
  hover = true,
  glowOnHover = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass rounded-2xl p-6',
        hover && 'glass-hover',
        glowOnHover && 'hover:shadow-glow',
        className
      )}
    >
      {children}
    </div>
  );
}
