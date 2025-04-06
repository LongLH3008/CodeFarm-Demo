import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CornerDownRight, Dot, Funnel, Search } from 'lucide-react';
import Form from 'next/form';

const SearchAndFilter = () => {
  return (
    <section className="max-md:hidden p-2 left-0 flex items-center gap-5">
      <Form
        action={'/course/search'}
        className="w-[45%] lg:w-[30%] h-10 flex items-center gap-2 pl-3 pr-[5px] py-2 rounded-full border border-zinc-300"
      >
        <Search strokeWidth={2} className="text-zinc-700" />
        <input
          name="name"
          type="search"
          className="outline-none h-full w-full text-[15px] text-foreground/60 font-[500]"
          placeholder="Tìm kiếm theo từ khóa ..."
        />
        <button
          type="submit"
          className="text-[12px] rounded-full h-[30px] px-3 flex items-center gap-1 cursor-pointer border border-transparent font-[500] hover:border-zinc-300 text-foreground/60 hover:bg-zinc-100 duration-200"
        >
          <CornerDownRight strokeWidth={1} size={15} /> Enter
        </button>
      </Form>
      <Select>
        <SelectTrigger className="w-[25%] lg:w-[15%] !h-10 rounded-full border-zinc-300 shadow-none">
          <SelectValue
            placeholder={
              <div className="flex items-center gap-3">
                <Funnel strokeWidth={2} className="text-zinc-700" />
                Loại
              </div>
            }
            className="text-zinc-200"
          />
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
    </section>
  );
};

export default SearchAndFilter;
