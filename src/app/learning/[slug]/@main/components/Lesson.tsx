'use client';

import RenderMarkdown from '@/components/shared/RenderMarkdown';
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
      className="w-full bg-white p-2 md:p-5 h-fit !text-[#333] !font-sans select-none"
    >
      <div className="flex flex-col gap-2 bg-white mb-16">
        <h3 className="text-[2.5em] leading-[1.1] font-semibold">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h3>
        <span className="text-[0.85em]">
          Cập nhật lần cuối: {new Date().toLocaleString('vi-VN')}
        </span>
      </div>
      <RenderMarkdown markdown={markdown} />
    </div>
  );
};

export default Lesson;
