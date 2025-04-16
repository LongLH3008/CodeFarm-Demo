import 'highlight.js/styles/atom-one-dark.css';
import { Check, Clipboard } from 'lucide-react';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

type CodeProps = {
  children: any;
  className?: string;
};

export default function CodeBlock({ children, className = '' }: CodeProps) {
  const [copied, setCopied] = useState(false);

  const match = /language-(\w+)/.exec(className);
  const language = match?.[1] || 'text';

  const code = Array.isArray(children)
    ? children
        .map(child => (typeof child === 'string' ? child : (child?.props?.children ?? '')))
        .join('')
    : typeof children === 'string'
      ? children
      : (children?.props?.children ?? '');

  const handleCopy = () => {
    if (copied) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  if (!className.includes('language-')) {
    return <code className={className}>{code}</code>;
  }

  return (
    <div className="relative my-4 border rounded-md overflow-hidden">
      <div className="flex bg-[#efefef] border-b justify-between items-center p-2">
        <span className="text-[0.75em] text-cyan-700 font-[600] tracking-tight leading-none">
          {'• ' + language.split('')[0].toUpperCase() + language.slice(1)}
        </span>
        <button
          onClick={handleCopy}
          className="relative size-7 rounded-md border border-zinc-300 active:scale-[0.8] duration-300"
        >
          <Clipboard
            size={15}
            strokeWidth={1.5}
            style={{ opacity: !copied ? 1 : 0 }}
            className="absolute top-1/2 left-1/2 -translate-1/2"
          />
          <Check
            size={15}
            strokeWidth={1.5}
            style={{ opacity: copied ? 1 : 0 }}
            className="absolute top-1/2 left-1/2 -translate-1/2"
          />
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        // style={atomOneDark}
        PreTag="div"
        customStyle={{ margin: 0, borderRadius: 0 }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
