import { ChevronDown, ChevronUp, ChevronsDown } from 'lucide-react';

const Paginate = () => {
  return (
    <div className="flex items-end flex-col gap-1 text-zinc-500 font-[600] text-[12px] *:cursor-pointer *:size-8 *:grid *:place-items-center *:duration-200 *:rounded-full">
      <span className="!hidden hover:border hover:border-zinc-400">
        <ChevronUp size={15} />
      </span>
      <span className="border-zinc-400 border">1</span>
      <span className="hover:border hover:border-zinc-400">2</span>
      <span className="hover:border hover:border-zinc-400">3</span>
      <span className="hover:border hover:border-zinc-400">
        <ChevronDown size={15} />
      </span>
      <span className="hover:border hover:border-zinc-400">
        <ChevronsDown size={15} />
      </span>
    </div>
  );
};

export default Paginate;
