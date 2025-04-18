// lessonContentConfig.tsx
import imgDefault from '@/assets/imgs/default.png';
import CodeBlock from '@/components/markdown/CodeBlock';
import Image from 'next/image';
import { Components } from 'react-markdown';

export const BlogMarkdownConfig: Components = {
  code: CodeBlock as any,
  iframe: ({ ...props }) => (
    <div style={{ margin: '1em 0' }} className="aspect-video w-full">
      <iframe {...props} className="w-full h-full rounded-md border" allowFullScreen />
    </div>
  ),
  h1: ({ ...props }) => (
    <h1
      style={{ fontSize: '1.8em', marginBottom: '0.75em' }}
      className="font-semibold leading-none text-[#333]"
      {...props}
    />
  ),
  h2: ({ ...props }) => (
    <h2
      style={{ fontSize: '1.6em', marginBottom: '0.75em' }}
      className="font-semibold leading-none text-[#333]"
      {...props}
    />
  ),
  h3: ({ ...props }) => (
    <h3
      style={{ fontSize: '1.4em', marginBottom: '0.75em' }}
      className="font-semibold leading-none text-[#333]"
      {...props}
    />
  ),
  h4: ({ ...props }) => (
    <h4
      style={{ fontSize: '1.2em', marginBottom: '0.5em' }}
      className="font-semibold leading-none text-[#333]"
      {...props}
    />
  ),
  h5: ({ ...props }) => (
    <h5
      style={{ fontSize: '1.1em', marginBottom: '0.5em' }}
      className="font-semibold leading-none text-[#333]"
      {...props}
    />
  ),
  h6: ({ ...props }) => (
    <h6
      style={{ fontSize: '1em', marginBottom: '0.5em' }}
      className="font-semibold leading-none text-[#333]"
      {...props}
    />
  ),
  p: ({ ...props }) => (
    <p
      style={{ fontSize: '1em', marginBottom: '1em' }}
      className="text-[#333] leading-relaxed"
      {...props}
    />
  ),
  strong: ({ ...props }) => <strong className="font-bold text-zinc-900" {...props} />,
  hr: ({ ...props }) => <hr style={{ margin: '2em 0' }} className="border-zinc-300" {...props} />,
  a: ({ href, ...props }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline hover:text-blue-800 transition-colors"
      {...props}
    />
  ),
  img: ({ src, alt }) => (
    <figure
      style={{ margin: '1em 0' }}
      className="rounded-lg bg-zinc-100 mx-auto aspect-[16/9] w-full h-[30dvh] md:h-[40dvh] overflow-hidden flex items-center justify-center"
    >
      <Image
        src={src ?? imgDefault.src}
        alt={alt ?? ''}
        width={1}
        height={1}
        className="object-cover h-full w-auto"
      />
    </figure>
  ),
  table: ({ children }) => (
    <div style={{ margin: '1.5em 0' }} className="overflow-x-auto">
      <table className="w-full border border-zinc-300 text-left text-[0.75rem] text-[#333]">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-zinc-100 text-zinc-800 font-semibold">{children}</thead>
  ),
  tbody: ({ children }) => <tbody>{children}</tbody>,
  tr: ({ children }) => <tr className="border-b border-zinc-200 hover:bg-zinc-50">{children}</tr>,
  th: ({ children }) => <th className="px-4 py-2 border border-zinc-300">{children}</th>,
  td: ({ children }) => <td className="px-4 py-2 border border-zinc-300">{children}</td>,
  ul: ({ ...props }) => (
    <ul
      style={{ margin: '0.75em 0 0.75em 1.25em' }}
      className="list-disc list-inside text-[#333]"
      {...props}
    />
  ),
  ol: ({ ...props }) => (
    <ol
      style={{ margin: '0.75em 0 0.75em 1.25em' }}
      className="list-decimal list-inside text-[#333]"
      {...props}
    />
  ),
  li: ({ ...props }) => <li style={{ margin: '0.25em 0' }} {...props} />,
};
