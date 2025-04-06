import Engagement from './Engagement';
import Shares from './Shares';

const Control = () => {
  return (
    <section className="max-md:hidden w-20 h-[60dvh] sticky top-20 flex flex-col items-end justify-between pr-2">
      <Engagement />
      <Shares />
    </section>
  );
};

export default Control;
