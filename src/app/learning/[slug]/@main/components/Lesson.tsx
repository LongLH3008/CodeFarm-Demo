'use client';

import RenderMarkdown from '@/components/shared/RenderMarkdown';
import learningSetting from '@/core/store/learningSetting';

type Props = {
  markdown: string;
};

const Lesson = ({ markdown }: Props) => {
  const { textSize: fontSize } = learningSetting();

  const styles: React.CSSProperties = {
    fontSize,
  };

  console.log(fontSize);

  return (
    <div style={styles} className="prose w-full p-5 h-fit !text-[#333] !font-sans">
      <RenderMarkdown markdown={markdown} />
    </div>
  );
};

export default Lesson;
