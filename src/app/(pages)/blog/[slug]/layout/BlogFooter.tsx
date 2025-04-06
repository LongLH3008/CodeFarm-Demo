import CommentList from '../components/CommentList';
import Thanks from '../components/Thanks';

const BlogFooter = () => {
  return (
    <footer id="comments" className="pt-5 flex flex-col gap-5 relative">
      <Thanks />
      <hr />
      <div className="contents max-md:hidden">
        <CommentList />
      </div>
    </footer>
  );
};

export default BlogFooter;
