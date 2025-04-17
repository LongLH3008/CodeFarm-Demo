import HoverLabel from '@/components/shared/HoverLabel';
import { cn } from '@/core/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  label?: string;
  side?: 'left' | 'top' | 'right' | 'bottom';
} & HTMLAttributes<HTMLElement>;

const ButtonControl = ({ children, className, side, label, ...rest }: Props) => {
  return (
    <HoverLabel side={side} label={label}>
      <span
        className={cn(
          `size-8 rounded-full border active:scale-[0.9] duration-200 hover:bg-zinc-100 cursor-pointer relative grid place-items-center ${className}`,
        )}
        {...rest}
      >
        {children}
      </span>
    </HoverLabel>
  );
};

export default ButtonControl;
