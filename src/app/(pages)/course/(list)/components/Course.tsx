import defaultImg from '@/assets/imgs/default.png';
import { BookOpenCheck, Star, UsersRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  course?: ICourseItem;
};

const CourseItem = ({ course }: Props) => {
  return (
    <Link
      href={'/course/abc'}
      className="min-w-[260px] bg-white rounded-[15px] h-64 flex flex-col gap-2 w-full border border-zinc-200 p-3 shadow-xs cursor-pointer hover:-translate-y-1 hover:shadow-lg duration-200"
    >
      <figure className="w-full flex items-center justify-center rounded-[7px] aspect-[16/9] h-[60%] overflow-hidden bg-zinc-50">
        <Image
          // src={course?.thumbnail || 'default'}
          // onError={e => (e.currentTarget.src = defaultImg.src)}
          src={defaultImg}
          alt={course?.title || 'Course thumbnail'}
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
        <div className="flex justify-between items-center">
          <span className="text-sm p-1 px-2 rounded-full bg-zinc-100 flex items-center text-zinc-500">
            <BookOpenCheck size={16} className="mr-1" />
            48 bài giảng
          </span>
          <div className="flex items-center gap-2">
            <div className="flex text-[#0a7294] font-semibold items-center gap-1 text-sm">
              <span className="bg-[#ebfeff] flex items-center gap-1 px-2 rounded-full p-1">
                <UsersRound strokeWidth={1} size={15} />
                48
              </span>
            </div>
            <div className="flex text-yellow-500 font-semibold items-center gap-1 text-sm">
              <span className="bg-yellow-50 flex items-center gap-1 px-2 rounded-full p-1">
                <Star strokeWidth={3} size={15} />5
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseItem;
