'use client';

import { motion } from 'motion/react';
import { RefObject, useEffect, useState } from 'react';

type Props = {
  container: RefObject<HTMLElement | null>;
};

function ScrollProgress({ container }: Props) {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const el = container.current;
    if (!el) return;

    const handleScroll = () => {
      const { scrollHeight, scrollTop, clientHeight } = el;
      const total = scrollHeight - clientHeight;

      if (total === 0) return setProgress(0);

      const currentProgress = (scrollTop / total) * 100;
      setProgress(currentProgress);
    };

    el.addEventListener('scroll', handleScroll);

    return () => el.removeEventListener('scroll', handleScroll);
  }, [container]);

  return (
    <motion.div
      className="h-1 duration-200 bg-gradient-to-r to-cyan-500 from-green-200 absolute top-0 left-0 rounded-r-full"
      style={{ width: `${progress}%` }}
    />
  );
}

export default ScrollProgress;
