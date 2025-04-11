import { Check, CheckCheck } from 'lucide-react';

const YouWillEarn = () => {
  return (
    <section className="flex gap-5 md:gap-10 max-md:flex-col justify-between">
      <div className="flex flex-col gap-2 md:gap-10">
        <h3 className="text-3xl sm:text-4xl text-left font-[500] leading-none tracking-tight">
          Bạn sẽ{' '}
          <span className="bg-gradient-to-br from-[#11ccf5] to-[#7ed276] bg-clip-text text-[rgba(0,0,0,0.2)]">
            nhận được gì
          </span>
          <br /> sau khóa học
        </h3>
        <span className="mt-2 max-md:text-lg text-zinc-500 font-[500]">
          Kiến thức nhận được từ khóa học <br />
          Dự án, bài tập được tham gia
          <br />
          Điều kiện tham gia khóa học gồm những gì ?
        </span>
      </div>
      <div className="relative overflow-hidden md:w-[40%] text-zinc-500 *:leading-[1.1] p-5 bg-white rounded-lg shadow-md tracking-tight flex flex-col gap-3 max-md:text-[17px] *:flex sm:*:items-start *:gap-3">
        <span className="h-1 w-full bg-gradient-to-r from-[#11ccf5] to-[#7ed276] absolute top-0 left-0"></span>
        <div className="flex items-center gap-2">
          <CheckCheck className="text-zinc-400" size={18} />
          <span className="text-zinc-400 font-[500] md:text-sm">Receive</span>
        </div>
        <hr />
        <span className="mb-2">
          <Check className="text-green-600 size-6 sm:size-4" /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facilis consectetur deserunt
        </span>
        <span className="mb-2">
          <Check className="text-green-600 size-6 sm:size-4" /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facilis consectetur deserunt
        </span>
        <span className="mb-2">
          <Check className="text-green-600 size-6 sm:size-4" /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facilis consectetur deserunt
        </span>
        <span className="mb-2">
          <Check className="text-green-600 size-6 sm:size-4" /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facilis consectetur deserunt
        </span>
        <span className="mb-2">
          <Check className="text-green-600 size-6 sm:size-4" /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facilis consectetur deserunt
        </span>
        <span className="mb-2">
          <Check className="text-green-600 size-6 sm:size-4" /> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Facilis consectetur deserunt
        </span>
      </div>
    </section>
  );
};

export default YouWillEarn;
