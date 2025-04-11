import Container from '@/components/layout/Container';
import RelatedCourse from '../components/RelatedCourse';
import SecondaryCTA from '../components/SecondaryCTA';

const CourseFooter = () => {
  return (
    <>
      <footer>
        <Container
          as="section"
          className="!min-h-fit flex flex-col gap-24 md:gap-20 overflow-hidden"
        >
          <RelatedCourse />
        </Container>
      </footer>
      <SecondaryCTA />
    </>
  );
};

export default CourseFooter;
