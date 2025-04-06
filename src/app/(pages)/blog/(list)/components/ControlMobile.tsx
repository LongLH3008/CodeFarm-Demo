'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronUp, ChevronsLeftRight, ChevronsRight, Dot, Hash, Search } from 'lucide-react';
import { useState } from 'react';

const ControlMobile = () => {
  const [control, setControl] = useState<'tags' | 'search' | 'paginate'>('search');

  const openControl = (open: 'tags' | 'search' | 'paginate') => {
    if (control === open) return;
    setControl(open);
  };

  return (
    <nav className="md:hidden fixed left-1/2 -translate-x-1/2 bottom-[2%] rounded-full z-30 bg-[rgba(0,0,0,0.5)] p-[6px] px-2 shadow-lg w-fit flex gap-[6px] items-center">
      <div
        className={`${control == 'tags' ? 'pr-2 gap-1 w-52' : 'w-10'} duration-200 ease-linear h-10 flex items-center overflow-hidden rounded-full border-none bg-white`}
      >
        <span onClick={() => openControl('tags')} className="size-10 grid place-items-center">
          <Hash strokeWidth={2} size={18} className="text-zinc-600" />
        </span>
        <div
          className={`duration-200 ease-linear ${control !== 'tags' ? '-translate-x-full w-0' : 'w-full translate-x-0'}`}
        >
          <Select>
            <SelectTrigger className={`!h-10 border-none w-full`}>
              <SelectValue placeholder="Thẻ" className="text-zinc-200" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="*:flex *:items-center *:gap-3">
                <SelectLabel>Thẻ bài viết</SelectLabel>
                <SelectItem value="ai">
                  <Dot strokeWidth={2} className="text-zinc-700 scale-[1.5]" /> AI
                </SelectItem>
                <SelectItem value="web">
                  <Dot strokeWidth={2} className="text-zinc-700 scale-[1.5]" /> Web
                </SelectItem>
                <SelectItem value="mobile">
                  <Dot strokeWidth={2} className="text-zinc-700 scale-[1.5]" /> Mobile
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div
        className={`${control == 'search' ? 'pr-2 gap-1 w-52' : 'w-10'} duration-200 ease-linear h-10 flex items-center overflow-hidden rounded-full border-none bg-white`}
      >
        <span onClick={() => openControl('search')} className="size-10 grid place-items-center">
          <Search strokeWidth={2} size={18} className="text-zinc-600" />
        </span>
        <div
          className={`duration-200 ease-linear ${control !== 'search' ? '-translate-x-full w-0' : 'w-full translate-x-0'}`}
        >
          <input
            type="search"
            className="outline-none h-full w-full text-[15px]"
            placeholder="Tìm kiếm ..."
          />
        </div>
      </div>
      <div
        className={`${control == 'paginate' ? 'pr-2 gap-1 w-52' : 'w-10'} duration-200 ease-linear h-10 flex items-center overflow-hidden rounded-full border-none bg-white`}
      >
        <span
          onClick={() => openControl('paginate')}
          className="size-10 grid place-items-center z-10"
        >
          <ChevronsLeftRight strokeWidth={2} size={18} className="text-zinc-600" />
        </span>
        <div
          className={`duration-200 ease-linear flex items-center justify-end gap-1 *:border *:size-7 *:grid *:place-items-center text-zinc-600 font-[500] text-sm *:rounded-full ${control !== 'paginate' ? '-translate-x-full w-0 *:opacity-0 *:-z-10' : 'w-full translate-x-0'}`}
        >
          <span className="!hidden hover:border hover:border-zinc-600">
            <ChevronUp size={15} />
          </span>
          <span className="border-zinc-500 border">1</span>
          <span className="border-zinc-300">2</span>
          <span className="border-zinc-300">3</span>
          <span className="border-zinc-300">
            <ChevronsRight size={15} />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default ControlMobile;
