import Link from 'next/link';

const Tags = () => {
  return (
    <div className="flex flex-col gap-3 items-end">
      <span className="bg-zinc-100 w-fit px-3 py-1 border-zinc-300 text-sm font-[500] border rounded-md flex items-center justify-center">
        #Thẻ
      </span>
      <div className="flex justify-end flex-wrap gap-2 text-zinc-400">
        <Link
          href={'/'}
          className="text-sm px-2 py-1 text-zinc-600 border-zinc-400 rounded-sm border"
        >
          abc
        </Link>
        <Link href={'/'} className="text-sm px-2 py-1 rounded-sm border">
          abc22
        </Link>
        <Link href={'/'} className="text-sm px-2 py-1 rounded-sm border">
          abc1111
        </Link>
        <Link href={'/'} className="text-sm px-2 py-1 rounded-sm border">
          abc2
        </Link>
      </div>
    </div>
  );
};

export default Tags;
