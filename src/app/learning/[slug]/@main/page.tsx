import 'highlight.js/styles/atom-one-dark.css';
import Lesson from './components/Lesson';

const Page = async () => {
  const markdown = await fetch(
    'http://103.176.24.231:9000/education2025/uploads/1744600317650-TYPE RECORD copy.md',
  ).then(res => res.text());

  console.log(markdown);

  return <Lesson markdown={markdown} />;
};

export default Page;
