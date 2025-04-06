import AuthBg from '@/assets/imgs/auth_background.jpg';
import Logo from '@/components/icons/Logo';
import TechTree from '@/components/icons/TechTree';
import { Facebook, Mail, MapPin, MessageCircleMore, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <main className="h-screen grid lg:grid-cols-2">
      <section className="max-lg:hidden relative h-full p-8 overflow-hidden flex flex-col justify-between">
        <div className="h-full w-full absolute top-0 left-0 flex justify-center items-center">
          <Image
            src={AuthBg}
            className="object-cover h-full"
            alt="CodeFarm Studying"
            quality={100}
            priority
          />
        </div>
        <div className="absolute opacity-70 -top-[50%] duration-1000 ease-in -left-[50%] w-[150%] h-[150%] bg-gradient-to-b from-blue-300 to-green-300"></div>
        <Logo className="h-auto w-28 relative bg-white rounded-md px-3 py-1 shadow-sm" />
        <div className="w-full font-bold relative text-white">
          <h2 className="text-6xl uppercase drop-shadow-[0px_0px_1px_rgba(0,0,0,0.5)]">
            code farm
          </h2>
          <span className="text-[17px] normal-case leading-1 drop-shadow-[0px_0px_1px_rgba(0,0,0,0.5)]">
            CodeFarm Technology and Education JSC
          </span>
        </div>
        <div className="relative border-t flex justify-between pt-5">
          <div className="flex items-center gap-5">
            <TechTree className="size-8 rounded-full p-1 bg-white" />
            <span className="text-[12px] text-white font-semibold">CodeFarm JSC &copy; 2025</span>
          </div>
          <div className="flex items-center justify-end max-sm:gap-8 gap-4 text-white">
            <Link className="p-2 rounded-md hover:bg-[rgba(0,0,0,0.3)] duration-200" href={'/'}>
              <Facebook className="max-sm:size-6 size-4" />
            </Link>
            <Link className="p-2 rounded-md hover:bg-[rgba(0,0,0,0.3)] duration-200" href={'/'}>
              <MessageCircleMore className="max-sm:size-6 size-4" />
            </Link>
            <Link className="p-2 rounded-md hover:bg-[rgba(0,0,0,0.3)] duration-200" href={'/'}>
              <Phone className="max-sm:size-6 size-4" />
            </Link>
            <Link className="p-2 rounded-md hover:bg-[rgba(0,0,0,0.3)] duration-200" href={'/'}>
              <Mail className="max-sm:size-6 size-4" />
            </Link>
            <Link className="p-2 rounded-md hover:bg-[rgba(0,0,0,0.3)] duration-200" href={'/'}>
              <MapPin className="max-sm:size-6 size-4" />
            </Link>
          </div>
        </div>
      </section>
      {children}
    </main>
  );
};

export default AuthLayout;
