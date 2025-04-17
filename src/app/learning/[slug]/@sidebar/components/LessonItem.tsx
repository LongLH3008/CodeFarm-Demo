import { BookOpenText } from 'lucide-react';

const LessonItem = () => {
  return (
    <div className="border-b last-of-type:border-b-0 min-w-fit text-[14px] tracking-tight text-zinc-600 hover:bg-zinc-100 sticky top-0 flex items-start gap-2 bg-white p-3 cursor-pointer">
      <BookOpenText strokeWidth={1.5} size={22} /> Bài x: Lorem ipsum dolor sit Lorem ipsum dolor
      sit Lorem ipsum dolor sit
    </div>
  );
};

export default LessonItem;
