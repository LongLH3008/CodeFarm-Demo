import { Metadata } from 'next';
import Control from './components/Control';
import ControlMobile from './components/ControlMobile';
import ListBlog from './components/ListBlog';
import Search from './components/Search';

export const metadata: Metadata = {
  title: 'Bài viết',
};

const Page = () => {
  return (
    <section className="w-full xl:w-[70%] h-full flex gap-4">
      <ControlMobile />
      <Control />
      <div className="w-full flex flex-col gap-4 md:border-l sm:pl-4 lg:px-4">
        <Search />
        <ListBlog />
      </div>
    </section>
  );
};

export default Page;
