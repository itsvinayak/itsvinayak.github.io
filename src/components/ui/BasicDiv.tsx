import React, { ReactNode } from 'react';
import { cn } from '@lib/utils';

interface BasicDivProps {
  children: ReactNode;
}

const BasicDiv = ({ children }: BasicDivProps) => {
  return (
    <section
      className={cn(
        'mx-2 flex flex-col justify-center self-center md:pt-8 tracking-wide md:mx-0 text-left sm:text-sm md:text-lg',
      )}
    >
      {children}
    </section>
  );
};

export default BasicDiv;
