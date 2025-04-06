import defaultImg from '@/assets/imgs/default.png';
import { Calendar, Eye, Heart } from 'lucide-react';
import Image from 'next/image';

const BlogHeader = () => {
  return (
    <header className="w-full flex flex-col gap-5">
      <figure className="w-full max-[420px]:h-48 h-60 sm:h-72 md:h-96 aspect-[16/9] flex items-center justify-center overflow-hidden rounded-xl">
        <Image
          src={defaultImg}
          height={1}
          width={1}
          className="h-full w-full object-cover"
          alt="Blog"
        ></Image>
      </figure>
      <section className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 sm:gap-3">
          <figure className="min-w-8 h-8 sm:min-w-10 sm:h-10 rounded-full bg-zinc-100"></figure>
          <div className="flex flex-col text-sm">
            <span className="font-[500]">Author</span>
            <span className="flex flex-wrap items-center text-zinc-500">
              <Calendar size={14} className="mr-1" />
              03/04/2024 • 5 phút đọc
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-zinc-50 border border-zinc-300 font-[500] flex items-center gap-1 px-2 rounded-md py-[2px]">
            <Eye strokeWidth={2} size={15} />5
          </span>
          <span className="bg-blue-50 border text-blue-600 font-[500] border-blue-400 flex items-center gap-1 px-2 rounded-md py-[2px]">
            <Heart strokeWidth={2} size={13} />5
          </span>
        </div>
      </section>
      <h2 className="text-2xl md:text-3xl font-[700] leading-[1.1] sm:tracking-wide">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure placeat, sapiente maiores
        quibusdam deserunt, eveniet nihil amet facilis blanditiis in asperiores
      </h2>
      <div className="flex items-center flex-wrap gap-2">
        {Array.from({ length: 4 }).map((_, index: number) => (
          <span key={index} className="border rounded-sm text-sm px-2 py-1 text-zinc-400">
            #abc{index}
          </span>
        ))}
      </div>
    </header>
  );
};

export default BlogHeader;
