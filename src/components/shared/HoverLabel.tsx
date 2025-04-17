import { ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

type Props = {
  label?: string | ReactNode;
  children: ReactNode;
  side?: 'left' | 'top' | 'right' | 'bottom';
};

const HoverLabel = ({ label, children, side }: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent side={side} className={`${label ? 'max-md:hidden' : 'hidden'}`}>
          {label ?? ''}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default HoverLabel;
