'use client';

import { debounce } from '@/core/lib/debounce';
import { throttle } from '@/core/lib/throttle';
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

    const updateProgress = () => {
      const { scrollHeight, scrollTop, clientHeight } = el;
      const total = scrollHeight - clientHeight;

      if (total === 0) return setProgress(0);

      const currentProgress = (scrollTop / total) * 100;
      setProgress(currentProgress);
    };

    const handleScroll = () => {
      throttle(updateProgress, 100)();
      debounce(updateProgress, 120)();
    };

    el.addEventListener('scroll', handleScroll);

    return () => el.removeEventListener('scroll', handleScroll);
  }, [container]);

  return (
    <motion.div
      className="h-1 lg:duration-400 ease-in-out will-change-transform ease-in-out bg-gradient-to-r to-(--lms-progress-to) from-(--lms-progress-from) absolute top-0 left-0 rounded-r-full"
      style={{ width: `${progress}%` }}
    />
  );
}

export default ScrollProgress;
