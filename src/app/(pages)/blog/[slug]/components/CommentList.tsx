import { Send } from 'lucide-react';
import Comment from './Comment';

const CommentList = () => {
  return (
    <section className="w-full flex flex-col md:gap-3">
      <h3 className="text-lg md:text-xl font-[500] mb-2">Bình luận</h3>
      <div className="flex flex-col gap-4 h-screen md:max-h-96 hiding_scroll_on_mobile overflow-y-scroll pr-1 md:pr-4">
        {Array.from({ length: 10 }).map((_, index: number) => (
          <Comment key={index} />
        ))}
      </div>
      <div className="max-md:absolute max-md:p-2 left-0 w-full bg-white bottom-0 flex gap-2 sm:gap-3">
        <figure className="max-md:hidden min-w-10 h-10 rounded-full bg-zinc-100"></figure>
        <input
          type="text"
          className="md:hidden outline-none border border-zinc-300 px-3 py-2 text-sm w-full rounded-full"
          placeholder="Nhập ..."
        />
        <textarea
          className="max-md:hidden w-full p-2 row-span-1 md:row-span-3 rounded-md outline-none border"
          placeholder="Nhập nội dung bình luận ..."
        />
        <span className="min-w-8 h-8 sm:min-w-10 sm:h-10 grid place-items-center cursor-pointer duration-200 hover:scale-[1.2] active:scale-[0.8]">
          <Send size={18} className="group-hover:text-zinc-700 text-zinc-500" />
        </span>
      </div>
    </section>
  );
};

export default CommentList;
