import BlogItem from './BlogItem';

const ListBlog = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {Array.from({ length: 12 }).map((_, index: number) => (
        <BlogItem key={index} />
      ))}
    </div>
  );
};

export default ListBlog;
