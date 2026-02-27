import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'purple' | 'cyan' | 'blue' | 'gray' | 'green' | 'gold';
  className?: string;
  size?: 'sm' | 'md';
}

const variants: Record<string, string> = {
  purple: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
  cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
  blue: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
  gray: 'bg-gray-500/10 text-gray-300 border-gray-500/30',
  green: 'bg-green-500/10 text-green-300 border-green-500/30',
  gold: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30',
};

const sizes: Record<string, string> = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-3 py-1',
};

export function Badge({ children, variant = 'purple', className, size = 'md' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border font-medium',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
