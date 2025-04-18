import { BookOpenText } from 'lucide-react';

const LessonItem = () => {
  return (
    <div className="border border-(--lms-border) rounded-sm min-w-fit tracking-tight text-(--lms-text) hover:bg-(--lms-foreground) sticky top-0 flex items-start gap-2 bg-(--lms-bg) p-3 cursor-pointer">
      <BookOpenText strokeWidth={1.5} size={22} className="text-(--text-sm)" /> Bài x: Lorem ipsum
      dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit
    </div>
  );
};

export default LessonItem;
