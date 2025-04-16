'use client';

import learningSetting from '@/core/store/learningSetting';
import { Maximize, Minimize, PanelLeft, PanelRight, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

const HeadControl = () => {
  const { expand, expandChange, layout, layoutChange, sidebar } = learningSetting();
  const { back } = useRouter();

  const expandEffect = (type: 'open' | 'close'): React.CSSProperties => {
    const condition = type === 'open' ? true : false;
    return {
      transitionDuration: '200ms',
      opacity: expand === condition ? 1 : 0,
    };
  };

  return (
    <div className="w-full flex justify-end items-center gap-2 pr-4">
      {sidebar && (
        <span
          onClick={() => layoutChange(layout === 'ltr' ? 'rtl' : 'ltr')}
          className="size-8 rounded-md active:scale-[0.9] duration-200 hover:bg-zinc-100 relative cursor-pointer *:absolute *:left-1/2 *:top-1/2 *:-translate-1/2"
        >
          <PanelRight
            size={18}
            strokeWidth={1.5}
            className={`duration-200 ${layout === 'ltr' ? 'opacity-100' : 'opacity-0'}`}
          />
          <PanelLeft
            size={18}
            strokeWidth={1.5}
            className={`duration-200 ${layout !== 'ltr' ? 'opacity-100' : 'opacity-0'}`}
          />
        </span>
      )}
      <span
        onClick={() => expandChange(expand)}
        className="size-8 rounded-md active:scale-[0.9] duration-200 hover:bg-zinc-100 relative cursor-pointer *:absolute *:left-1/2 *:top-1/2 *:-translate-1/2"
      >
        <Minimize size={18} strokeWidth={1.5} style={expandEffect('open')} />
        <Maximize size={18} strokeWidth={1.5} style={expandEffect('close')} />
      </span>
      <span
        onClick={back}
        className="size-8 active:scale-[0.9] duration-200 rounded-md hover:bg-zinc-100 grid place-items-center cursor-pointer"
      >
        <X strokeWidth={1.5} size={19} />
      </span>
    </div>
  );
};

export default HeadControl;
