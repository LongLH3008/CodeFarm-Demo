'use client';

import RenderMarkdown from '@/components/markdown/RenderMarkdown';
import learningSetting from '@/core/store/learningSetting';

type Props = {
  markdown: string;
};

const Lesson = ({ markdown }: Props) => {
  const fontSize = learningSetting().textSize;

  const styles: React.CSSProperties = {
    fontSize,
  };

  return (
    <div
      style={styles}
      className="w-full bg-(--lms-bg) p-2 pb-9 lg:p-5 h-fit !font-sans select-none"
    >
      <div className="flex flex-col gap-2 bg-(--lms-bg) mb-16">
        <h3 className="text-[2.5em] leading-[1.1] font-semibold text-(--lms-heading)">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h3>
        <span className="text-[0.85em] text-(--lms-text)">
          Cập nhật lần cuối: {new Date().toLocaleString('vi-VN')}
        </span>
      </div>
      <RenderMarkdown config="lms" markdown={markdown} />
    </div>
  );
};

export default Lesson;
