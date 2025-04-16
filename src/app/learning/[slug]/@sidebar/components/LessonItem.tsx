import { ChevronDown } from 'lucide-react';

const LessonItem = () => {
  return (
    <div
      className={`border-b min-w-fit text-[14px] tracking-tight text-zinc-600 hover:bg-zinc-100 flex items-start gap-2 bg-white sticky top-0 font-[500] p-3 cursor-pointer`}
    >
      <ChevronDown />
      Chương x: Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
    </div>
  );
};

export default LessonItem;
