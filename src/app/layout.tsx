import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: {
    template: 'CodeFarm - %s',
    default: 'CodeFarm',
  },
  description: 'CodeFarm Technology and Education JSC',
  icons: {
    icon: './favicon.svg',
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased relative`}>{children}</body>
    </html>
  );
}
