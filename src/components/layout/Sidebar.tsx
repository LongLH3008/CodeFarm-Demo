'use client';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import {
  BookText,
  Facebook,
  House,
  Info,
  LogIn,
  Mail,
  MapPin,
  MessageCircleMore,
  Newspaper,
  PanelRightClose,
  Phone,
} from 'lucide-react';
import Link from 'next/link';
import { ReactNode, useState } from 'react';
import TechTree from '../icons/TechTree';

type Props = {
  trigger: ReactNode;
};

export function Sidebar({ trigger }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={(value: boolean) => setOpen(value)}>
      <SheetTrigger asChild>{trigger}</SheetTrigger>
      <SheetContent
        close={false}
        className="px-2 rounded-l-2xl bg-transparent !shadow-none !ring-none !outline-none !border-none !border-transparent"
      >
        <SheetHeader>
          <SheetTitle />
        </SheetHeader>
        <div className="flex flex-col h-full gap-3 relative">
          <span onClick={close} className="p-2 bg-white rounded-md absolute -left-12 top-3">
            <PanelRightClose size={20} strokeWidth={1.5} className="text-zinc-500" />
          </span>
          <div className="flex bg-white rounded-lg p-2 flex-wrap items-center justify-between">
            <TechTree className="size-8" />
            <div className="flex items-center gap-2">
              <Link className="p-2 bg-zinc-100 rounded-md" href={'/'}>
                <Facebook className="size-[18px] text-zinc-500" strokeWidth={1.5} />
              </Link>
              <Link className="p-2 bg-zinc-100 rounded-md" href={'/'}>
                <MessageCircleMore className="size-[18px] text-zinc-500" strokeWidth={1.5} />
              </Link>
              <Link className="p-2 bg-zinc-100 rounded-md" href={'/'}>
                <Phone className="size-[18px] text-zinc-500" strokeWidth={1.5} />
              </Link>
              <Link className="p-2 bg-zinc-100 rounded-md" href={'/'}>
                <Mail className="size-[18px] text-zinc-500" strokeWidth={1.5} />
              </Link>
              <Link className="p-2 bg-zinc-100 rounded-md" href={'/'}>
                <MapPin className="size-[18px] text-zinc-500" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
          <nav className="flex-col bg-white flex text-zinc-600 font-[500] *:py-4 *:flex *:items-center *:gap-4 p-4 rounded-lg">
            <Link onClick={close} href={'/'}>
              <House size={18} />
              Trang chủ
            </Link>
            <Link onClick={close} href={'/course'}>
              <BookText size={18} />
              Khóa học
            </Link>
            <Link onClick={close} href={'/blog'}>
              <Newspaper size={18} />
              Bài viết
            </Link>
            <Link onClick={close} href={'/about'}>
              <Info size={18} />
              Về chúng tôi
            </Link>
          </nav>
          <div className="flex bg-white rounded-lg p-3 items-center">
            <Link
              href={'/auth/login'}
              className="justify-center w-full rounded-full bg-zinc-800 font-[500] text-white py-2 flex items-center gap-2"
            >
              <LogIn size={15} /> Đăng nhập
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
