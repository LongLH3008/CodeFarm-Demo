import { CornerDownRight, Search } from 'lucide-react';
import Form from 'next/form';

const SearchAndFilter = () => {
  return (
    <section className="max-md:hidden flex items-center gap-5 w-full">
      <Form
        action={'/course/search'}
        className="w-full h-10 flex items-center gap-2 pl-3 pr-[5px] py-2 rounded-full border border-zinc-300"
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
    </section>
  );
};

export default SearchAndFilter;
