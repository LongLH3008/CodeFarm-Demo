'use client';

import learningSetting from '@/core/store/learningSetting';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, useLayoutEffect } from 'react';
import './styles.css';

type Props = {
  sidebar: ReactNode;
  main: ReactNode;
};

const Layout = ({ sidebar, main }: Props) => {
  const expand = learningSetting(state => state.expand);
  const layout = learningSetting(state => state.layout);
  const theme = learningSetting(state => state.theme);

  useLayoutEffect(() => {}, [theme]);

  const themeSetting = JSON.parse(localStorage.getItem('learning-setting') || '');

  return (
    <main data-lms-theme={themeSetting.state.theme || 'light'}>
      <AnimatePresence initial={false}>
        <motion.div
          layout
          animate={{
            gap: expand ? '0% 0' : '1.2% 0',
            padding: !expand ? 'var(--lms-collapse)' : 0,
          }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className={`flex h-screen bg-(--lms-layout-bg) ${layout === 'ltr' ? 'lg:flex-row-reverse' : ''}`}
        >
          {main}
          {sidebar}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Layout;
