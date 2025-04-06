import defaultImg from '@/assets/imgs/default.png';
import { Calendar, Eye, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const BlogItem = () => {
  return (
    <Link
      href={'/blog/abc'}
      className="min-w-[260px] bg-white rounded-[15px] h-70 flex flex-col gap-2 w-full border border-zinc-200 p-3 shadow-xs cursor-pointer hover:-translate-y-1 hover:shadow-lg duration-200"
    >
      <figure className="w-full flex items-center justify-center rounded-[7px] aspect-[16/9] h-[60%] overflow-hidden bg-zinc-50">
        <Image
          // src={course?.thumbnail || 'default'}
          // onError={e => (e.currentTarget.src = defaultImg.src)}
          src={defaultImg}
          alt={'BlogItem'}
          width={1}
          height={1}
          className="w-full aspect-[16/9] h-full object-cover"
        />
      </figure>
      <div className="flex flex-col justify-between h-[40%]">
        <h4 className="font-semibold text-foreground/70 truncate text-wrap leading-[1.1] line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nihil quae aliquid iure
          expedita sint consectetur illum harum. Qui voluptates laboriosam harum repellat autem nemo
          eligendi rerum ullam reiciendis sunt.
        </h4>
        <div className="flex gap-1 overflow-hidden">
          {Array.from({ length: 4 }).map((_, index: number) => (
            <span
              key={index}
              className="px-1 py-[2px] rounded-sm text-sm md:text-[12px] text-zinc-400 border border-zinc-300"
            >
              #abc{index}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-end">
          <span className="text-[13px] md:text-[12px] flex items-center text-zinc-500 font-[500]">
            <Calendar size={14} className="mr-1" />
            03/04/2024 • 5 phút đọc
          </span>
          <div className="flex items-center gap-2">
            <div className="flex text-zinc-500 font-semibold items-center gap-1 text-[12px]">
              <span className="bg-zinc-50 font-[500] border border-zinc-300 flex items-center gap-1 px-2 rounded-full py-[2px]">
                <Eye strokeWidth={2} size={15} />5
              </span>
              <span className="bg-blue-50 border text-blue-600 font-[500] border-blue-400 flex items-center gap-1 px-2 rounded-full py-[2px]">
                <Heart strokeWidth={2} size={13} />5
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
