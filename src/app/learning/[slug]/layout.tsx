'use client';

import learningSetting from '@/core/store/learningSetting';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import './styles.css';

type Props = {
  sidebar: ReactNode;
  main: ReactNode;
};

const Layout = ({ sidebar, main }: Props) => {
  const expand = learningSetting(state => state.expand);
  const layout = learningSetting(state => state.layout);
  const theme = learningSetting().theme;

  return (
    <main data-lms-theme={theme}>
      <motion.div
        layout
        initial={false}
        animate={{
          gap: expand ? '0% 0' : '1.2% 0',
        }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className={`flex h-screen bg-(--lms-layout-bg) relative duration-200 ease-in-out lg:${!expand ? 'p-[1.2%]' : ''} ${layout === 'ltr' ? 'lg:flex-row-reverse' : ''}`}
      >
        {main}
        {sidebar}
      </motion.div>
    </main>
  );
};

export default Layout;
