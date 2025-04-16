'use client';

import learningSetting from '@/core/store/learningSetting';
import { AArrowDown, AArrowUp, ArrowDownToDot, ArrowUpFromDot, Settings } from 'lucide-react';

const Features = () => {
  const { changeTextSize } = learningSetting();

  return (
    <div className="absolute top-1/2 -translate-y-1/2 right-[1.5vw] flex flex-col gap-5">
      <div className=" bg-white border-zinc-200 shadow-md flex flex-col gap-[6px] p-[6px] rounded-full border">
        <span
          onClick={() => changeTextSize('bigger')}
          className="size-8 cursor-pointer grid place-items-center rounded-full active:scale-[0.9] hover:bg-zinc-100 border duration-200"
        >
          <AArrowUp size={17} className="text-zinc-700" />
        </span>
        <span
          onClick={() => changeTextSize('smaller')}
          className="size-8 cursor-pointer grid place-items-center rounded-full active:scale-[0.9] hover:bg-zinc-100 border duration-200"
        >
          <AArrowDown size={17} className="text-zinc-700" />
        </span>
      </div>
      <div className=" bg-white border-zinc-200 shadow-md flex flex-col gap-[6px] p-[6px] rounded-full border">
        <span className="size-8 cursor-pointer grid place-items-center rounded-full active:scale-[0.9] hover:bg-zinc-100 border duration-200">
          <ArrowUpFromDot size={17} className="text-zinc-700" />
        </span>
        <span className="size-8 cursor-pointer grid place-items-center rounded-full active:scale-[0.9] hover:bg-zinc-100 border duration-200">
          <ArrowDownToDot size={17} className="text-zinc-700" />
        </span>
        <span className="size-8 cursor-pointer grid place-items-center rounded-full active:scale-[0.9] hover:bg-zinc-100 border duration-200">
          <Settings size={17} className="text-zinc-700" />
        </span>
      </div>
    </div>
  );
};

export default Features;
