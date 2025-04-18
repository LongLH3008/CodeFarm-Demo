// lessonContentConfig.tsx
import imgDefault from '@/assets/imgs/default.png';
import CodeBlock from '@/components/markdown/CodeBlock';
import Image from 'next/image';
import { Components } from 'react-markdown';

export const LMSMarkdownConfig: Components = {
  code: CodeBlock as any,

  iframe: ({ ...props }) => (
    <div style={{ margin: '1em 0' }} className="aspect-video w-full">
      <iframe {...props} className="w-full h-full rounded-md border" allowFullScreen />
    </div>
  ),

  h1: ({ ...props }) => (
    <h1
      {...props}
      style={{ fontSize: '1.8em', marginBottom: '0.75em' }}
      className="font-semibold leading-none text-(--lms-heading)"
    />
  ),
  h2: ({ ...props }) => (
    <h2
      {...props}
      style={{ fontSize: '1.6em', marginBottom: '0.75em' }}
      className="font-semibold leading-none text-(--lms-heading)"
    />
  ),
  h3: ({ ...props }) => (
    <h3
      {...props}
      style={{ fontSize: '1.4em', marginBottom: '0.75em' }}
      className="font-semibold leading-none text-(--lms-heading)"
    />
  ),
  h4: ({ ...props }) => (
    <h4
      {...props}
      style={{ fontSize: '1.2em', marginBottom: '0.5em' }}
      className="font-semibold leading-none text-(--lms-heading)"
    />
  ),
  h5: ({ ...props }) => (
    <h5
      {...props}
      style={{ fontSize: '1.1em', marginBottom: '0.5em' }}
      className="font-semibold leading-none text-(--lms-heading)"
    />
  ),
  h6: ({ ...props }) => (
    <h6
      {...props}
      style={{ fontSize: '1em', marginBottom: '0.5em' }}
      className="font-semibold leading-none text-(--lms-heading)"
    />
  ),

  p: ({ ...props }) => (
    <p
      {...props}
      style={{ fontSize: '1em', marginBottom: '1em' }}
      className="leading-relaxed text-(--lms-heading)"
    />
  ),

  strong: ({ ...props }) => <strong {...props} className="font-bold text-[var(--lms-text)]" />,

  hr: ({ ...props }) => (
    <hr {...props} style={{ margin: '2em 0' }} className="border-[var(--lms-border)]" />
  ),

  a: ({ href, ...props }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className="underline hover:text-blue-800 transition-colors"
    />
  ),

  // 8. Images
  img: ({ src, alt, ...props }) => (
    <figure
      {...props}
      style={{ margin: '1em 0' }}
      className="rounded-lg bg-[var(--lms-foreground)] mx-auto aspect-[16/9] w-full h-[30dvh] md:h-[40dvh] overflow-hidden flex items-center justify-center"
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

  table: ({ children, ...props }) => (
    <div {...props} className="overflow-x-auto my-6">
      <table className="w-full border border-[var(--lms-border)] text-left text-[0.75rem]">
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }) => (
    <thead {...props} className="bg-[var(--lms-foreground)] text-[var(--lms-text)] font-semibold">
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }) => <tbody {...props}>{children}</tbody>,
  tr: ({ children, ...props }) => (
    <tr {...props} className="border-b border-[var(--lms-border)] hover:bg-[var(--lms-foreground)]">
      {children}
    </tr>
  ),
  th: ({ children, ...props }) => (
    <th {...props} className="px-4 py-2 border border-[var(--lms-border)]">
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td {...props} className="px-4 py-2 border border-[var(--lms-border)] text-[var(--lms-text)]">
      {children}
    </td>
  ),

  ul: ({ children, ...props }) => (
    <ul {...props} style={{ margin: '0.75em 0 0.75em 1.25em' }} className="list-disc list-inside">
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      {...props}
      style={{ margin: '0.75em 0 0.75em 1.25em' }}
      className="list-decimal list-inside"
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li {...props} style={{ margin: '0.25em 0' }} className="text-[var(--lms-text)]">
      {children}
    </li>
  ),
};
