import { ListOrdered } from 'lucide-react';
import ChapterItem from './components/ChapterItem';

const Page = () => {
  return (
    <>
      <div className="flex items-center justify-between lg:gap-x-2 !h-[56px] overflow-hidden border-b px-3 font-[600]">
        <span className="flex items-center gap-2">
          <ListOrdered size={16} />
          Nội dung
        </span>
      </div>
      <div className="flex flex-col overflow-y-scroll h-[calc(100%-56px)]">
        {Array.from({ length: 50 }).map((_, index: number) => (
          <ChapterItem key={index} />
        ))}
      </div>
    </>
  );
};

export default Page;
