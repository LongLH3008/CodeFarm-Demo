import AsideWidget from './AsideWidget';
import BlogsWidget from './BlogsWidget';

const Aside = () => {
  return (
    <aside className="w-full xl:w-[30%] flex flex-col h-full xl:min-h-[200dvh] gap-5 pl-2">
      <div className="grid sm:grid-cols-2 xl:grid-cols-1 gap-4">
        <AsideWidget />
        <AsideWidget />
      </div>
      <BlogsWidget />
    </aside>
  );
};

export default Aside;
