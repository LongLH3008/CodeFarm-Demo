import { Paperclip } from 'lucide-react';

const Requirements = () => {
  return (
    <section className="!min-h-fit grid md:grid-cols-2 max-md:gap-10">
      <div className="flex items-center md:justify-center">
        <div className="flex flex-col justify-center gap-2">
          <h3 className="text-3xl sm:text-4xl font-[500] leading-none tracking-tight">
            <span className="bg-gradient-to-br from-[#11ccf5] to-[#7ed276] bg-clip-text text-[rgba(0,0,0,0.2)]">
              Điều kiện ...
            </span>
            <br /> tham gia khóa học
          </h3>
          <span className="mt-2 max-md:text-lg text-zinc-500 font-[500]">
            Khóa học này dành cho ai ? <br />
            Kiến thức cần những gì để tham gia ? <br />
            Điều kiện tham gia khóa học gồm những gì ?
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="shadow-md rounded-lg sm:w-2/3 bg-white relative overflow-hidden flex-col flex gap-3 p-2 py-3">
          <span className="h-1 w-full bg-gradient-to-r from-[#11ccf5] to-[#7ed276] absolute top-0 left-0"></span>
          <div className="flex items-center gap-2">
            <Paperclip className="text-zinc-400" size={18} />
            <span className="text-zinc-400 font-[500] md:text-sm">Requirements</span>
          </div>
          <hr />
          <div className="flex-col flex gap-4 md:gap-2 text-lg md:text-[15px] p-2">
            <div className="flex items-center gap-2 text-zinc-500 font-[500] md:text-sm">
              <span className="size-2 rounded-full bg-[#11ccf5] shadow-sm"></span>
              Dành cho ai ?
            </div>
            <span className="text-zinc-500 leading-none">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
            <span className="text-zinc-500 leading-none">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
            <span className="text-zinc-500 leading-none">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
          </div>
          <hr />
          <div className="flex-col flex gap-4 md:gap-2 text-lg md:text-[15px] p-2">
            <div className="flex items-center gap-2 text-zinc-500 font-[500] md:text-sm">
              <span className="size-2 rounded-full bg-[#7ed276] shadow-sm"></span>
              Kiến thức yêu cầu ?
            </div>
            <span className="text-zinc-500 leading-none">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
            <span className="text-zinc-500 leading-none">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
            <span className="text-zinc-500 leading-none">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </span>
            <div className="flex flex-wrap gap-2 mt-3">
              {Array.from({ length: 5 }).map((_, index: number) => (
                <span key={index} className="size-8 rounded-sm bg-zinc-200"></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
