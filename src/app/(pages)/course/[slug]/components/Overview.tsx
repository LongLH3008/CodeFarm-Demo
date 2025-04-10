const Overview = () => {
  return (
    <section className="rounded-md p-4 w-full border grid max-md:p-2 sm:grid-cols-2 lg:grid-cols-4 bg-white z-10">
      <div className="flex flex-col py-2 px-5 border-r max-lg:border-b max-sm:border-r-0">
        <h3 className="font-[600] text-lg">8 chương kiến thức</h3>
        <span className="md:text-sm">Mỗi chương khoảng 5 - 7 bài giảng</span>
      </div>
      <div className="flex flex-col py-2 px-5 border-r max-lg:border-b max-sm:border-r-0">
        <h3 className="font-[600] text-lg">Độ khó kiến thức</h3>
        <span className="md:text-sm">Lượng kiến thức đáp ứng ở mức dễ</span>
      </div>
      <div className="flex flex-col py-2 px-5 border-r max-sm:border-r-0 max-sm:border-b">
        <h3 className="font-[600] text-lg">Thời gian học 3 tháng</h3>
        <span className="md:text-sm">Mỗi tuần 2 - 3 buổi / 2 tiếng</span>
      </div>
      <div className="flex flex-col py-2 px-5">
        <h3 className="font-[600] text-lg">Lịch trình</h3>
        <span className="md:text-sm">8h - 18h các ngày trong tuần</span>
      </div>
    </section>
  );
};

export default Overview;
