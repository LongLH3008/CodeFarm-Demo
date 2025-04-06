import Twitter from '@/components/icons/Twitter';
import { Facebook, Heart, Link, Linkedin, MessageCircleMore } from 'lucide-react';
import CommentListMobile from './CommentListMobile';

const ControlMobile = () => {
  return (
    <section className="md:hidden fixed left-1/2 -translate-x-1/2 bottom-[4%] z-30 flex gap-3 items-center">
      <div className="rounded-full border border-zinc-100 bg-white p-[6px] px-2 shadow-lg w-fit flex gap-2 items-center">
        <span className="size-9 grid place-items-center rounded-full bg-[#1877f2]">
          <Facebook fill="#fff" size={24} className="text-white stroke-none" />
        </span>
        <span className="size-9 grid place-items-center rounded-full bg-[#007ab9]">
          <Linkedin fill="#fff" size={22} className="text-white stroke-none" />
        </span>
        <span className="size-9 grid place-items-center rounded-full bg-black">
          <Twitter className="size-[18px] fill-white" />
        </span>
        <span className="size-9 grid place-items-center rounded-full bg-gradient-to-br from-blue-400 to-green-400">
          <Link strokeWidth={2} size={20} className="text-white" />
        </span>
      </div>
      <div className="rounded-full border border-zinc-100 bg-[rgba(0,0,0,0.7)] bg-white p-[6px] px-2 shadow-lg w-fit flex gap-2 items-center">
        <span className="size-9 group grid place-items-center rounded-full bg-white ">
          <Heart
            strokeWidth={2}
            size={20}
            className="group-active:text-rose-500 group-active:scale-[0.8] duration-200"
          />
        </span>
        <CommentListMobile
          trigger={
            <span className="size-9 group grid place-items-center rounded-full bg-white">
              <MessageCircleMore
                strokeWidth={2}
                size={20}
                className="group-active:scale-[0.8] duration-200"
              />
            </span>
          }
        />
      </div>
    </section>
  );
};

export default ControlMobile;
