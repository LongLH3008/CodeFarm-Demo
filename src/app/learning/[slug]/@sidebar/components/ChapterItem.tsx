'use client';

import learningSetting from '@/core/store/learningSetting';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import LessonItem from './LessonItem';
import styles from './_components.module.css';

const ChapterItem = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  const fontSize = learningSetting().textSize;

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div style={{ fontSize }} className={`contents`}>
      <div
        onClick={toggleDropdown}
        className={`border-b border-(--lms-border) min-w-fit text-[0.9em] tracking-tight text-(--lms-text) hover:bg-(--lms-foreground) flex items-start gap-2 bg-(--lms-bg) sticky top-0 z-10 font-[500] p-3 cursor-pointer`}
      >
        <ChevronDown className={`${dropdown ? 'rotate-180' : 'rotate-0'} duration-200 ease`} />
        Chương x: Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
      </div>
      <div
        className={`w-full flex flex-col text-[0.85em] gap-2 border-(--lms-border) ${styles[`show_dropdown_lesson__${dropdown}`]}`}
      >
        {Array.from({ length: 10 }).map((_, index: number) => (
          <LessonItem key={index} />
        ))}
      </div>
    </div>
  );
};

export default ChapterItem;
