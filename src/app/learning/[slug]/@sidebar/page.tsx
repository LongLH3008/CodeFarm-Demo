import ChapterItem from './components/ChapterItem';

const Page = () => {
  return (
    <div className="flex flex-col overflow-y-scroll h-[calc(100%-56px)]">
      {Array.from({ length: 50 }).map((_, index: number) => (
        <ChapterItem key={index} />
      ))}
    </div>
  );
};

export default Page;
