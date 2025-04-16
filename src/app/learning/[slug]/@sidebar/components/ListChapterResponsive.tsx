import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ReactNode } from 'react';

type Props = {
  trigger: ReactNode;
  children: ReactNode;
};

export function ListChapterResponsive({ trigger, children }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="hidden" />
        <SheetTitle />
        {children}
      </SheetContent>
    </Sheet>
  );
}
