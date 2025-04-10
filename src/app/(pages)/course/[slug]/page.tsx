import CourseBody from './layout/CourseBody';
import CourseFooter from './layout/CourseFooter';
import CourseHeader from './layout/CourseHeader';

const CourseDetail = () => {
  return (
    <article>
      <CourseHeader />
      <div className="relative">
        <CourseBody />
        <CourseFooter />
      </div>
    </article>
  );
};

export default CourseDetail;
