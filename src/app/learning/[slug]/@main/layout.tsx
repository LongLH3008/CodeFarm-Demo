'use client';

import TechTree from '@/components/icons/TechTree';
import ScrollProgress from '@/components/shared/ScrollProgress';
import learningSetting from '@/core/store/learningSetting';
import { motion } from 'framer-motion';
import { PanelLeftDashed, PanelsTopLeft } from 'lucide-react';
import { ReactNode, useRef } from 'react';
import Features from './components/Features';
import HeadControl from './components/HeadControl';

type Props = {
  children: ReactNode;
};

const MainContent = ({ children }: Props) => {
  const expand = learningSetting(state => state.expand);
  const sidebar = learningSetting(state => state.sidebar);
  const toggleSidebar = learningSetting(state => state.toggleSidebar);

  const contentLesson = useRef<HTMLElement>(null);

  const marginValue = !expand && sidebar ? '0.5%' : '0%';

  const sidebarEffect = (type: 'open' | 'close'): React.CSSProperties => {
    const condition = type === 'open' ? true : false;
    return {
      transitionDuration: '200ms',
      opacity: sidebar === condition ? 1 : 0,
    };
  };

  return (
    <motion.div
      layout
      animate={{
        marginLeft: marginValue,
        marginRight: marginValue,
        borderRadius: expand ? 0 : 10,
      }}
      transition={{ duration: 0.3 }}
      className={`bg-white overflow-hidden relative flex flex-col transition-transform w-full`}
    >
      <section className="min-h-[56px] border-b w-full items-center gap-5 flex md:px-1 xl:px-2">
        <div className="w-full flex justify-between items-center py-1">
          <span
            onClick={() => toggleSidebar(sidebar)}
            className={`max-xl:hidden ml-2 size-8 active:scale-[0.9] relative *:absolute *:-translate-1/2 *:left-1/2 *:top-1/2 duration-200 rounded-md hover:bg-zinc-100 grid place-items-center cursor-pointer`}
          >
            <PanelLeftDashed size={18} strokeWidth={1.5} style={sidebarEffect('open')} />
            <PanelsTopLeft size={18} strokeWidth={1.5} style={sidebarEffect('close')} />
          </span>
          <span className="max-lg:hidden p-[3px] bg-transparent rounded-md">
            <TechTree className="h-8 w-fit" />
          </span>
        </div>
        <div className="max-md:hidden md:min-w-[700px] h-full flex flex-col gap-[2px] justify-center">
          <h3 className="text-lg font-[500] leading-none">Lập trình Javascript cơ bản</h3>
          <span className="leading-none text-[15px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </span>
        </div>
        <HeadControl />
      </section>
      <div className="h-full flex justify-center pt-[2px] md:py-3 bg-zinc-100 relative">
        <ScrollProgress container={contentLesson} />
        <section
          ref={contentLesson}
          className="h-[calc(100%-56px-12px)] md:rounded-lg w-full max-w-[700px] overflow-y-scroll relative"
        >
          {children}
        </section>
        <Features document={contentLesson} />
      </div>
    </motion.div>
  );
};

export default MainContent;
