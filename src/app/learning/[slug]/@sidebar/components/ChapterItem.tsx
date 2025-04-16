'use client';

import { BookOpenText, ChevronDown } from 'lucide-react';
import { useState } from 'react';

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
        <ChevronDown />
        Chương x: Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
      </div>
      <div className={`bg-zinc-300 w-full show_dropdown_lesson__${dropdown}`}>
        {Array.from({ length: 10 }).map((_, index: number) => (
          <div
            key={index}
            className="border-b last-of-type:border-b-0 min-w-fit text-[14px] tracking-tight text-zinc-600 hover:bg-zinc-100 sticky top-0 flex items-start gap-2 bg-white p-3 cursor-pointer"
          >
            <BookOpenText strokeWidth={1.5} size={22} /> Bài {index + 1}: Lorem ipsum dolor sit
            Lorem ipsum dolor sit Lorem ipsum dolor sit
          </div>
        ))}
      </div>
    </>
  );
};

export default ChapterItem;
