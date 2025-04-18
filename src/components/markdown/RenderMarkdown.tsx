import { BlogMarkdownConfig } from '@/components/markdown/BlogMarkdownConfig';
import { LMSMarkdownConfig } from '@/components/markdown/LMSMarkdownConfig';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

type Props = {
  markdown: string;
  config: 'lms' | 'blog';
};

const RenderMarkdown = ({ markdown, config }: Props) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeHighlight, rehypeRaw]}
      components={config == 'lms' ? LMSMarkdownConfig : BlogMarkdownConfig}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default RenderMarkdown;
