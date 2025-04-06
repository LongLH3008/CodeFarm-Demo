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
import { Dot, Funnel, Search } from 'lucide-react';
import { useState } from 'react';

const SearchAndFilterMobile = () => {
  const [control, setControl] = useState<'filter' | 'search'>('search');

  const openControl = (open: 'filter' | 'search') => {
    if (control === open) return;
    setControl(open);
  };

  return (
    <section className="md:hidden fixed left-1/2 -translate-x-1/2 bottom-[2%] rounded-full z-30 bg-[rgba(0,0,0,0.5)] p-[6px] px-2 shadow-lg w-fit flex gap-2 items-center">
      <div
        className={`${control == 'filter' ? 'pr-2 gap-1 w-52' : 'w-10'} duration-200 ease-linear h-10 flex items-center overflow-hidden rounded-full border-none bg-white`}
      >
        <span onClick={() => openControl('filter')} className="size-10 grid place-items-center">
          <Funnel strokeWidth={2} size={18} className="text-zinc-600" />
        </span>
        <div
          className={`duration-200 ease-linear ${control !== 'filter' ? '-translate-x-full w-0' : 'w-full translate-x-0'}`}
        >
          <Select>
            <SelectTrigger className={`!h-10 border-none w-full`}>
              <SelectValue placeholder="Loại" className="text-zinc-200" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="*:flex *:items-center *:gap-3">
                <SelectLabel>Loại khóa học</SelectLabel>
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
    </section>
  );
};

export default SearchAndFilterMobile;
