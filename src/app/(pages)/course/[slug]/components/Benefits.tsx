import { Box } from 'lucide-react';

const Benefits = () => {
  return (
    <section className="!min-h-fit grid md:grid-cols-2 max-md:gap-10">
      <div className="flex items-center justify-center">
        <div className="shadow-md rounded-lg sm:w-4/5 bg-white relative overflow-hidden flex-col flex gap-3 md:gap-1 p-3 md:p-2 md:py-3">
          <span className="h-1 w-full bg-gradient-to-r from-[#11ccf5] to-[#7ed276] absolute top-0 left-0"></span>
          <div className="flex items-center gap-2">
            <Box className="text-zinc-400" size={18} />
            <span className="text-zinc-400 font-[500] md:text-sm">Benefits</span>
          </div>
          <hr />
          <div className="flex-col flex gap-4 md:gap-2 text-lg md:text-[15px] p-2">
            <div className="flex items-center gap-2 text-zinc-500 font-[500] md:text-sm">
              <span className="size-2 rounded-full bg-[#11ccf5] shadow-sm"></span>
              Tài liệu của khóa học
            </div>
            <span className="text-zinc-500 leading-[1.2] max-md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores,
              voluptatem numquam quis cumque quisquam exercitationem. Mollitia quae neque officia
              animi necessitatibus eos atque totam! Officiis possimus natus necessitatibus fugit!
            </span>
          </div>
          <hr />
          <div className="flex-col flex gap-4 md:gap-2 text-lg md:text-[15px] p-2">
            <div className="flex items-center gap-2 text-zinc-500 font-[500] md:text-sm">
              <span className="size-2 rounded-full bg-[#7ed276] shadow-sm"></span>
              Cộng đồng CodeFarm
            </div>
            <span className="text-zinc-500 leading-[1.2] max-md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores,
              voluptatem numquam quis cumque quisquam exercitationem. Mollitia quae neque officia
              animi necessitatibus eos atque totam! Officiis possimus natus necessitatibus fugit!
            </span>
          </div>
          <hr />
          <div className="flex-col flex gap-4 md:gap-2 text-lg md:text-[15px] p-2">
            <div className="flex items-center gap-2 text-zinc-500 font-[500] md:text-sm">
              <span className="size-2 rounded-full bg-zinc-200 shadow-sm"></span>
              Hỗ trợ, hướng dẫn
            </div>
            <span className="text-zinc-500 leading-[1.2] max-md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis dolores,
              voluptatem numquam quis cumque quisquam exercitationem. Mollitia quae neque officia
              animi necessitatibus eos atque totam! Officiis possimus natus necessitatibus fugit!
            </span>
          </div>
          <span className="text-zinc-500 font-[500] text-sm text-right">
            ... và còn hơn thế nữa
          </span>
        </div>
      </div>
      <div className="max-md:order-first flex flex-col justify-center gap-2 md:pl-[15%]">
        <h3 className="text-3xl sm:text-4xl text-left font-[500] leading-none tracking-tight">
          <span className="bg-gradient-to-br from-[#11ccf5] to-[#7ed276] bg-clip-text text-[rgba(0,0,0,0.2)]">
            Quyền lợi ...
          </span>
          <br /> của học viên tham gia
        </h3>
        <span className="mt-2 text-zinc-500 font-[500]">
          Học viên có được hỗ trợ ... ? <br />
          Học viên sẽ có những quyền lợi gì ? <br />
        </span>
      </div>
    </section>
  );
};

export default Benefits;
