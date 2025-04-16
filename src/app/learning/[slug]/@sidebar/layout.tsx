'use client';

import learningSetting from '@/core/store/learningSetting';
import { motion } from 'framer-motion';
import { PanelLeftDashed } from 'lucide-react';
import { ReactNode } from 'react';
import { ListChapterResponsive } from './components/ListChapterResponsive';

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  const sidebar = learningSetting(state => state.sidebar);
  const expand = learningSetting(state => state.expand);

  const animate = {
    marginLeft: !expand && sidebar ? '10px' : 0,
    marginRight: !expand && sidebar ? '10px' : 0,
    width: sidebar ? 500 : 0,
    opacity: sidebar ? 1 : 0,
    borderRadius: expand ? 0 : 10,
  };

  return (
    <>
      <div className="max-lg:flex min-h-[56px] items-center hidden absolute top-0 left-0">
        <ListChapterResponsive
          trigger={
            <span
              className={`ml-2 size-8 active:scale-[0.9] relative *:absolute *:-translate-1/2 *:left-1/2 *:top-1/2 duration-200 rounded-md hover:bg-zinc-100 grid place-items-center cursor-pointer`}
            >
              <PanelLeftDashed size={18} strokeWidth={1.5} />
            </span>
          }
        >
          {children}
        </ListChapterResponsive>
      </div>
      <motion.div
        animate={animate}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        layout
        className={`max-lg:hidden will-change-transform bg-white border-x overflow-hidden h-full flex flex-col`}
      >
        {children}
      </motion.div>
    </>
  );
};

export default Layout;
