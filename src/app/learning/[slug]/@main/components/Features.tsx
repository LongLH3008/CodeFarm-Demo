'use client';

import learningSetting from '@/core/store/learningSetting';
import { AArrowDown, AArrowUp, ArrowDownToDot, ArrowUpFromDot, Settings } from 'lucide-react';
import { RefObject } from 'react';
import { Setting } from './Setting';

type Props = {
  document: RefObject<HTMLElement | null>;
};

const Features = ({ document }: Props) => {
  const { changeTextSize } = learningSetting();

  const scrollByPercent = (percent: number) => {
    const el = document.current;
    if (!el) return;

    const scrollAmount = el.scrollHeight * percent;
    el.scrollBy({
      top: scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed md:absolute max-md:bottom-3 max-md:left-1/2 max-md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:right-[1.5vw] flex md:flex-col gap-2 md:gap-5">
      <div className=" bg-white border-zinc-200 shadow-md flex max-md:flex-row md:flex-col gap-[6px] p-[6px] rounded-full border">
        <span
          onClick={() => changeTextSize('bigger')}
          className="size-8 cursor-pointer flex items-center justify-center rounded-full active:scale-[0.9] hover:bg-zinc-100 border duration-200"
        >
          <AArrowUp size={17} className="text-zinc-700" />
        </span>
        <span
          onClick={() => changeTextSize('smaller')}
          className="size-8 cursor-pointer flex items-center justify-center rounded-full active:scale-[0.9] hover:bg-zinc-100 border duration-200"
        >
          <AArrowDown size={17} className="text-zinc-700" />
        </span>
      </div>
      <div className="bg-white border-zinc-200 shadow-md flex max-md:flex-row md:flex-col gap-[6px] p-[6px] rounded-full border">
        <span
          onClick={() => scrollByPercent(-0.1)}
          className="size-8 cursor-pointer flex items-center justify-center rounded-full active:scale-[0.9] hover:bg-zinc-100 border duration-200"
        >
          <ArrowUpFromDot size={17} className="text-zinc-700" />
        </span>
        <span
          onClick={() => scrollByPercent(0.1)}
          className="size-8 cursor-pointer flex items-center justify-center rounded-full active:scale-[0.9] hover:bg-zinc-100 border duration-200"
        >
          <ArrowDownToDot size={17} className="text-zinc-700" />
        </span>
        <Setting
          trigger={
            <span className="size-8 cursor-pointer group flex items-center justify-center rounded-full active:scale-[0.9] hover:bg-zinc-100 border duration-200">
              <Settings size={17} className="text-zinc-700 group-hover:rotate-180 duration-400" />
            </span>
          }
        />
      </div>
    </div>
  );
};

export default Features;
