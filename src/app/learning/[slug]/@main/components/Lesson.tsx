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
      <RenderMarkdown markdown={markdown} />
    </div>
  );
};

export default Lesson;
