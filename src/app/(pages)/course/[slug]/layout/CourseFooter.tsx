import Container from '@/components/layout/Container';
import RelatedCourse from '../components/RelatedCourse';
import SecondaryCTA from '../components/SecondaryCTA';
import Testimonial from '../components/Testimonial';

const CourseFooter = () => {
  return (
    <>
      <footer>
        <Container as="section" className="!min-h-fit flex flex-col gap-10 md:gap-16">
          <Testimonial />
          <RelatedCourse />
        </Container>
      </footer>
      <SecondaryCTA />
    </>
  );
};

export default CourseFooter;
