'use client';

import ScrollProgress from '@/components/shared/ScrollProgress';
import learningSetting from '@/core/store/learningSetting';
import { motion } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import Control from './components/Control';
import Features from './components/Features';

type Props = {
  children: ReactNode;
};

const MainContent = ({ children }: Props) => {
  const expand = learningSetting(state => state.expand);
  const sidebar = learningSetting(state => state.sidebar);

  const contentLesson = useRef<HTMLElement>(null);

  const marginValue = !expand && sidebar ? '0.5%' : '0%';

  return (
    <motion.div
      layout
      animate={{
        marginLeft: marginValue,
        marginRight: marginValue,
      }}
      transition={{ duration: 0.3 }}
      className={`bg-(--lms-bg) ${expand ? '' : 'lg:rounded-[10px]'} duration-300 overflow-hidden relative flex flex-col transition-transform w-full`}
    >
      <Control />
      <section className="h-full flex justify-center pt-[2px] lg:py-3 bg-(--lms-foreground) relative">
        <ScrollProgress container={contentLesson} />
        <section
          ref={contentLesson}
          className="h-[calc(100%-56px-12px)] lms_scroll md:rounded-lg w-full lg:max-w-[700px] overflow-y-scroll relative"
        >
          {children}
        </section>
        <Features document={contentLesson} />
      </section>
    </motion.div>
  );
};

export default MainContent;
