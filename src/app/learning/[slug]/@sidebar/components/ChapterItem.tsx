'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import LessonItem from './LessonItem';
import styles from './_components.module.css';

const ChapterItem = () => {
  const [dropdown, setDropdown] = useState<boolean>(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <>
      <div
        onClick={toggleDropdown}
        className={`border-b min-w-fit text-[14px] tracking-tight text-zinc-600 hover:bg-zinc-100 flex items-start gap-2 bg-white sticky top-0 z-10 font-[500] p-3 cursor-pointer`}
      >
        <ChevronDown className={`${dropdown ? 'rotate-180' : 'rotate-0'} duration-200 ease`} />
        Chương x: Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
      </div>
      <div className={`bg-zinc-300 w-full ${styles[`show_dropdown_lesson__${dropdown}`]}`}>
        {Array.from({ length: 10 }).map((_, index: number) => (
          <LessonItem key={index} />
        ))}
      </div>
    </>
  );
};

export default ChapterItem;
