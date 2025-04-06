import BlogItem from './(list)/components/BlogItem';

const BlogsWidget = () => {
  return (
    <div className="md:sticky top-20 flex flex-wrap gap-4 mt-5">
      <h3 className="text-xl font-[500]">Bài viết được xem nhiều</h3>
      <div className="grid sm:grid-cols-2 xl:grid-cols-1 gap-2 w-full">
        <BlogItem />
        <BlogItem />
      </div>
    </div>
  );
};

export default BlogsWidget;
