'use client';

import learningSetting from '@/core/store/learningSetting';
import { AArrowDown, AArrowUp, ArrowDownFromLine, ArrowUpFromLine, Settings } from 'lucide-react';
import { RefObject } from 'react';
import ButtonControl from './ButtonControl';
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
    <div className="fixed md:absolute max-md:bottom-2 max-md:left-1/2 max-md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:right-[1.5vw] flex md:flex-col gap-2 md:gap-5">
      <div className="bg-white border-zinc-200 shadow-md flex max-md:flex-row md:flex-col gap-[6px] p-[6px] rounded-full border">
        <ButtonControl side="left" label="Tăng cỡ chữ" onClick={() => changeTextSize('bigger')}>
          <AArrowUp size={17} className="text-zinc-700" />
        </ButtonControl>
        <ButtonControl side="left" label="Giảm cỡ chữ" onClick={() => changeTextSize('smaller')}>
          <AArrowDown size={17} className="text-zinc-700" />
        </ButtonControl>
      </div>
      <div className="bg-white border-zinc-200 shadow-md flex max-md:flex-row md:flex-col gap-[6px] p-[6px] rounded-full border">
        <ButtonControl label="Cuộn lên" side="left" onClick={() => scrollByPercent(-0.1)}>
          <ArrowUpFromLine size={17} className="text-zinc-700" />
        </ButtonControl>
        <ButtonControl label="Cuộn xuống" side="left" onClick={() => scrollByPercent(0.1)}>
          <ArrowDownFromLine size={17} className="text-zinc-700" />
        </ButtonControl>
        <Setting
          trigger={
            <ButtonControl label="Tùy chỉnh" side="left" className="group">
              <Settings size={17} className="text-zinc-700 group-hover:rotate-180 duration-400" />
            </ButtonControl>
          }
        />
      </div>
    </div>
  );
};

export default Features;
