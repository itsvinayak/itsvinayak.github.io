import React, { ReactNode } from 'react';
import { cn } from '@lib/utils';

interface BasicDivProps {
  children: ReactNode;
}

const BasicDiv = ({ children }: BasicDivProps) => {
  return (
    <main
      className={cn(
        'mx-6 flex flex-col justify-center self-center pt-8 text-center tracking-wide md:mx-0 md:text-left'
      )}
    >
      {children}
    </main>
  );
};

export default BasicDiv;
