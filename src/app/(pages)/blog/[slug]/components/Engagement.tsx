import HoverLabel from '@/components/shared/HoverLabel';
import { Eye, Heart, MessageCircleMore } from 'lucide-react';
import Link from 'next/link';

const Engagement = () => {
  return (
    <div className="flex flex-col gap-5">
      <HoverLabel label="Nhấn để yêu thích bài viết">
        <div className="flex items-center text-foreground/50 group cursor-pointer text-sm gap-2">
          28
          <Heart
            strokeWidth={2}
            className="text-zinc-500 size-5 group-active:scale-[0.8] group-hover:text-rose-500 group-hover:scale-[1.2] duration-200"
          />
        </div>
      </HoverLabel>
      <HoverLabel label="Nhấn để xem các bình luận">
        <Link
          href={'#comments'}
          className="flex items-center text-foreground/50 group cursor-pointer text-sm gap-2"
        >
          28
          <MessageCircleMore
            strokeWidth={2}
            className="text-zinc-500 size-5 group-active:scale-[0.8] group-hover:text-cyan-500 group-hover:scale-[1.2] duration-200"
          />
        </Link>
      </HoverLabel>
      <span className="flex items-center text-foreground/50 text-sm gap-2">
        28
        <Eye className="text-zinc-500" strokeWidth={2} size={20} />
      </span>
    </div>
  );
};

export default Engagement;
