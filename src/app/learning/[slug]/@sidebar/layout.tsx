'use client';

import learningSetting from '@/core/store/learningSetting';
import { motion } from 'framer-motion';
import { ListOrdered } from 'lucide-react';
import { ReactNode } from 'react';

type Props = { children: ReactNode };

const Layout = ({ children }: Props) => {
  const { sidebar, expand } = learningSetting();

  const animate = {
    marginLeft: !expand && sidebar ? '0.5%' : '0%',
    marginRight: !expand && sidebar ? '0.5%' : '0%',
    width: sidebar ? 500 : 0,
    opacity: sidebar ? 1 : 0,
    borderRadius: expand ? 0 : 10,
  };

  return (
    <motion.div
      animate={animate}
      transition={{ duration: 0.3 }}
      className={`learning_part panel bg-white border-x overflow-hidden h-full flex flex-col`}
    >
      <div className="flex items-center justify-between gap-x-2 !h-[56px] overflow-hidden border-b px-3 font-[600]">
        <span className="flex items-center gap-2">
          <ListOrdered size={16} />
          Nội dung
        </span>
      </div>
      {children}
    </motion.div>
  );
};

export default Layout;
