import FooterLogo from '@/assets/imgs/footer-logo.svg';
import { Facebook, Mail, MapPin, MessageCircleMore, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import TechTree from '../icons/TechTree';

const Footer = () => {
  return (
    <footer className="layout_responsive border-t py-8 pb-5  flex flex-col gap-5 items-center justify-center">
      <Image src={FooterLogo} className="h-8 w-auto" alt="CodeFarm" />
      <span className="italic text-[12px] text-center lg:w-2/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis provident, facilis
        nesciunt nam minus ipsa molestiae
      </span>
      <section className="w-full text-sm flex justify-between items-center max-lg:flex-col max-lg:justify-center max-lg:gap-y-3 lg:grid lg:grid-cols-4">
        <TechTree className="h-12 w-auto" />
        <nav className="max-md:hidden col-span-2 flex items-center justify-center max-sm:flex-wrap max-sm:text-[16px] text-sm gap-x-10 gap-y-3 *:hover:underline">
          <Link href={'/'}>Trang chủ</Link>
          <Link href={'/course'}>Khóa học</Link>
          <Link href={'/blog'}>Bài viết</Link>
          <Link href={'/about'}>Về chúng tôi</Link>
        </nav>
        <div className="max-md:hidden flex items-center justify-end max-sm:gap-8 gap-4">
          <Link className="p-2 rounded-md hover:bg-zinc-100 duration-200" href={'/'}>
            <Facebook className="max-sm:size-6 size-4" strokeWidth={1.5} />
          </Link>
          <Link className="p-2 rounded-md hover:bg-zinc-100 duration-200" href={'/'}>
            <MessageCircleMore className="max-sm:size-6 size-4" strokeWidth={1.5} />
          </Link>
          <Link className="p-2 rounded-md hover:bg-zinc-100 duration-200" href={'/'}>
            <Phone className="max-sm:size-6 size-4" strokeWidth={1.5} />
          </Link>
          <Link className="p-2 rounded-md hover:bg-zinc-100 duration-200" href={'/'}>
            <Mail className="max-sm:size-6 size-4" strokeWidth={1.5} />
          </Link>
          <Link className="p-2 rounded-md hover:bg-zinc-100 duration-200" href={'/'}>
            <MapPin className="max-sm:size-6 size-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
