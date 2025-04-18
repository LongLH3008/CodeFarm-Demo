import { cn } from '@/core/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';

type Props = {
  className?: string;
  isActive?: boolean;
  disabled?: boolean;
  children: ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

const SettingButton = ({ className, children, isActive, disabled, ...rest }: Props) => {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={`
      ${isActive ? '' : 'active:scale-[.9] hover:'}bg-(--lms-foreground) text-(--lms-text)
      ${cn(
        `rounded-md p-3 ring-none outline-none cursor-pointer gap-3 flex duration-200 items-center text-sm ${className}`,
      )}`}
    >
      {children}
    </button>
  );
};

export default SettingButton;
