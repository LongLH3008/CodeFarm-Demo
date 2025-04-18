'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import learningSetting from '@/core/store/learningSetting';
import { PanelLeftDashed } from 'lucide-react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export function ListChapterResponsive({ children }: Props) {
  const theme = learningSetting().theme;

  return (
    <div className="max-lg:flex min-h-[56px] hidden items-center absolute top-0 left-0">
      <Sheet>
        <SheetTrigger asChild>
          <span
            className={`ml-2 size-8 active:scale-[0.9] relative *:absolute *:-translate-1/2 *:left-1/2 *:top-1/2 duration-200 rounded-md hover:bg-(--lms-foreground) grid place-items-center cursor-pointer`}
          >
            <PanelLeftDashed size={18} strokeWidth={1.5} className="text-(--lms-text)" />
          </span>
        </SheetTrigger>
        <SheetContent data-lms-theme={theme} className="bg-(--lms-bg) gap-0" side="left">
          <SheetHeader className="hidden">
            <SheetTitle />
          </SheetHeader>
          {children}
        </SheetContent>
      </Sheet>
    </div>
  );
}
