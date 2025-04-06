import { LogIn, StretchHorizontal } from 'lucide-react';
import Link from 'next/link';
import Logo from '../icons/Logo';
import { Sidebar } from './Sidebar';

const Header = () => {
  return (
    <>
      {/* <div className="h-3 w-full linear_bg layout_responsive flex items-center justify-end text-right text-white text-[9px] tracking-wider uppercase">
				codefarm technology and education jsc &copy; 2025
			</div> */}
      <header
        id="header"
        className="sticky top-0 left-0 z-10  bg-white shadow-xs border-b border-b-zinc-200"
      >
        <main className="h-16 layout_responsive w-full flex items-center justify-between text-[15px] font-medium">
          <Link href={'/'}>
            <Logo className="w-20 h-auto md:w-24" />
          </Link>
          <nav className="max-md:hidden flex items-center gap-10">
            <Link href={'/course'}>Khóa học</Link>
            <Link href={'/blog'}>Bài viết</Link>
            <Link href={'/about'}>Về chúng tôi</Link>
          </nav>
          <Link
            href={'/auth/login'}
            className="max-md:hidden px-4 py-2 button_primary_action flex items-center gap-2"
          >
            <LogIn size={15} /> Đăng nhập
          </Link>
          <Sidebar
            trigger={
              <StretchHorizontal
                size={20}
                strokeWidth={2}
                className="max-md:block hidden text-zinc-500"
              />
            }
          />
        </main>
      </header>
    </>
  );
};

export default Header;
