import ListByGenres from '../../(list)/components/ListByGenres';

const RelatedCourse = () => {
  return (
    <ListByGenres
      titleGenres={
        <h3 className="text-2xl sm:text-3xl font-[500] leading-none tracking-tight md:max-w-1/3">
          Khóa học liên quan
        </h3>
      }
    />
  );
};

export default RelatedCourse;
