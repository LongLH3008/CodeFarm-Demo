'use client';

import Logo from '@/components/icons/Logo';
import TechTree from '@/components/icons/TechTree';
import learningSetting from '@/core/store/learningSetting';
import {
  ChevronFirst,
  ChevronLast,
  Maximize,
  Minimize,
  PanelLeft,
  PanelLeftDashed,
  PanelRight,
  PanelsTopLeft,
  X,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import ButtonControl from './ButtonControl';

const Control = () => {
  const { back } = useRouter();
  const expand = learningSetting(state => state.expand);
  const layout = learningSetting(state => state.layout);
  const sidebar = learningSetting(state => state.sidebar);

  const toggleSidebar = learningSetting(state => state.toggleSidebar);
  const expandChange = learningSetting(state => state.expandChange);
  const layoutChange = learningSetting(state => state.layoutChange);

  const expandEffect = (type: 'open' | 'close'): React.CSSProperties => {
    const condition = type === 'open' ? true : false;
    return {
      transitionDuration: '200ms',
      opacity: expand === condition ? 1 : 0,
    };
  };

  const sidebarEffect = (type: 'open' | 'close'): React.CSSProperties => {
    const condition = type === 'open' ? true : false;
    return {
      transitionDuration: '200ms',
      opacity: sidebar === condition ? 1 : 0,
    };
  };

  const navigateButton =
    'max-md:fixed max-md:bottom-3 max-md:bg-(--lms-bg) max-md:border max-md:shadow-md max-md:rounded-full max-md:size-10 max-md:z-50';

  return (
    <section className="min-h-[56px] text-(--lms-text) relative border-b border-(--lms-border) w-full items-center gap-5 flex md:px-1 xl:px-2">
      <div className="w-full flex justify-between items-center py-1">
        <ButtonControl
          label={`${sidebar ? 'Ẩn mục lục' : 'Hiện mục lục'}`}
          onClick={() => toggleSidebar(sidebar)}
          className={`max-xl:hidden rounded-md border-none ml-2 *:absolute *:-translate-1/2 *:left-1/2 *:top-1/2`}
        >
          <PanelLeftDashed size={18} strokeWidth={1.5} style={sidebarEffect('open')} />
          <PanelsTopLeft size={18} strokeWidth={1.5} style={sidebarEffect('close')} />
        </ButtonControl>
        <TechTree className="max-md:hidden h-8 w-fit" />
        <Logo className="md:hidden absolute top-2 left-1/2 -translate-x-1/2 h-10 w-fit" />
      </div>
      <div className="flex justify-between items-center md:min-w-[700px]">
        <div className="max-md:hidden h-full flex flex-col gap-[2px] justify-center">
          <h3 className="text-lg font-[500] leading-none text-(--lms-heading)">
            Lập trình Javascript cơ bản
          </h3>
          <span className="leading-none text-[15px] text-(--lms-text)">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </span>
        </div>
        <div className="flex items-center">
          <ButtonControl
            label="Bài học trước"
            className={`${navigateButton} md:border-none md:rounded-md max-md:left-2`}
          >
            <ChevronFirst size={17} strokeWidth={1.5} />
          </ButtonControl>
          <ButtonControl
            label="Bài học tiếp theo"
            className={`${navigateButton} md:border-none md:rounded-md max-md:right-2`}
          >
            <ChevronLast size={17} strokeWidth={1.5} />
          </ButtonControl>
        </div>
      </div>
      <div className="w-full flex justify-end items-center gap-2 lg:pr-4">
        {sidebar && (
          <ButtonControl
            label={`${layout == 'ltr' ? 'Phải qua trái' : 'Trái quả phải'}`}
            onClick={() => layoutChange(layout === 'ltr' ? 'rtl' : 'ltr')}
            className={`max-xl:hidden border-none rounded-md *:absolute *:left-1/2 *:top-1/2 *:-translate-1/2`}
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
          </ButtonControl>
        )}
        <ButtonControl
          onClick={() => expandChange(expand)}
          label={`${expand ? 'Thu nhỏ' : 'Phóng to'}`}
          className={`max-xl:hidden border-none rounded-md *:absolute *:left-1/2 *:top-1/2 *:-translate-1/2`}
        >
          <Minimize size={18} strokeWidth={1.5} style={expandEffect('open')} />
          <Maximize size={18} strokeWidth={1.5} style={expandEffect('close')} />
        </ButtonControl>
        <ButtonControl onClick={back} className={`border-none rounded-md`}>
          <X strokeWidth={1.5} size={19} />
        </ButtonControl>
      </div>
    </section>
  );
};

export default Control;
