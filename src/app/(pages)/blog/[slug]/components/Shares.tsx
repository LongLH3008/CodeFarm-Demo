import HoverLabel from '@/components/shared/HoverLabel';
import { Link as CopyLink, Facebook, Linkedin, Share2 } from 'lucide-react';
import Link from 'next/link';

const Shares = () => {
  return (
    <div className="flex flex-col items-end justify-end gap-6">
      <Share2 size={18} className="text-zinc-500" />
      <span className="border-zinc-400 border-t w-full rounded-full"></span>
      <HoverLabel label="Chia sẻ lên facebook">
        <Link
          href={''}
          className="flex justify-end text-foreground/60 group cursor-pointer text-sm gap-2"
        >
          <Facebook
            size={20}
            strokeWidth={2}
            className="group-hover:text-[#1877f2] group-hover:scale-[1.3] duration-200"
          />
        </Link>
      </HoverLabel>
      <HoverLabel label="Chia sẻ lên Linkedin">
        <Link
          href={'#comments'}
          className="flex justify-end text-foreground/70 group cursor-pointer text-sm gap-2"
        >
          <Linkedin
            strokeWidth={1.5}
            size={15}
            className="group-hover:text-[#007ab9] group-hover:scale-[1.3] duration-200"
          />
        </Link>
      </HoverLabel>
      <HoverLabel label="Chia sẻ lên Twitter">
        <Link href={''} className="hover:scale-[1.3] duration-200">
          <svg
            viewBox="0 0 24 24"
            width="15"
            height="15"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </Link>
      </HoverLabel>
      <HoverLabel label="Copy link bài viết">
        <span className="hover:scale-[1.3] cursor-pointer active:scale-[0.8] hover:text-cyan-600 group duration-200">
          <CopyLink size={15} />
        </span>
      </HoverLabel>
    </div>
  );
};

export default Shares;
