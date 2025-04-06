import Control from './components/Control';
import ControlMobile from './components/ControlMobile';
import BlogBody from './layout/BlogBody';
import BlogFooter from './layout/BlogFooter';
import BlogHeader from './layout/BlogHeader';

const Page = () => {
  return (
    <section className="w-full xl:w-[70%] h-full flex gap-4">
      <Control />
      <ControlMobile />
      <article className="w-full xl:border-x xl:px-4 xl:mx-2 flex flex-col gap-5 pb-5">
        <BlogHeader />
        <BlogBody />
        <BlogFooter />
      </article>
    </section>
  );
};

export default Page;
