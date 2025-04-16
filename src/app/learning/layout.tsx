import { Metadata } from 'next';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Học tập',
};

const LMSLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default LMSLayout;
