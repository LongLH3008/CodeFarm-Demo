import Paginate from './Paginate';
import Tags from './Tags';

const Control = () => {
  return (
    <nav className="max-md:hidden w-[15%] h-[60dvh] sticky top-[20dvh] flex flex-col justify-between pr-4">
      <Tags />
      <Paginate />
    </nav>
  );
};

export default Control;
