'use client';

import learningSetting from '@/core/store/learningSetting';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const ListChapter = ({ children }: Props) => {
  const sidebar = learningSetting(state => state.sidebar);
  const expand = learningSetting(state => state.expand);

  const animate = {
    marginLeft: !expand && sidebar ? '10px' : 0,
    marginRight: !expand && sidebar ? '10px' : 0,
    width: sidebar ? 500 : 0,
    opacity: sidebar ? 1 : 0,
    borderRadius: expand ? 0 : 10,
    borderWidth: sidebar && expand ? 1 : 0,
  };

  return (
    <motion.div
      animate={animate}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      layout
      className={`max-lg:hidden will-change-transform !border-y-0 border-(--lms-border) bg-(--lms-bg) overflow-hidden h-full flex flex-col`}
    >
      {children}
    </motion.div>
  );
};

export default ListChapter;
