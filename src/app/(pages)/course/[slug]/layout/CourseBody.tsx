import Container from '@/components/layout/Container';
import { Chapter } from '../components/Chapter';
import YouWillEarn from '../components/YouWillEarn';

const CourseBody = () => {
  return (
    <Container as="div" className="!min-h-fit relative flex flex-col gap-10 md:gap-16">
      <Chapter />
      <YouWillEarn />
    </Container>
  );
};

export default CourseBody;
