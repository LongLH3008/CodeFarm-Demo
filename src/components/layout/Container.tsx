import { cn } from '@/core/lib/utils';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  as?: 'section' | 'div' | 'main';
};

const Container = ({ children, className, as: TagName = 'main' }: Props) => {
  return (
    <TagName className={cn(`layout_responsive h-fit min-h-screen main_section ${className}`)}>
      {children}
    </TagName>
  );
};

export default Container;
