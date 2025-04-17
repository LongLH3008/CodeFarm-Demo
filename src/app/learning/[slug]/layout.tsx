'use client';

import learningSetting from '@/core/store/learningSetting';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  sidebar: ReactNode;
  main: ReactNode;
};

const Layout = ({ sidebar, main }: Props) => {
  const expand = learningSetting(state => state.expand);
  const layout = learningSetting(state => state.layout);

  return (
    <motion.main
      layout
      initial={false}
      animate={{
        gap: expand ? '0% 0' : '1.2% 0',
        padding: expand ? '0%' : '1.2%',
      }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className={`flex h-screen bg-[rgba(0,0,0,0.3)] relative ${layout === 'ltr' ? 'lg:flex-row-reverse' : ''}`}
    >
      {main}
      {sidebar}
    </motion.main>
  );
};

export default Layout;
