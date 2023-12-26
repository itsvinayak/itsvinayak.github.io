import React, { ReactNode } from 'react';
import { cn } from '@lib/utils';

interface BasicDivProps {
  children: ReactNode;
}

const BasicDiv = ({ children }: BasicDivProps) => {
  return (
    <section
      className={cn(
        'mx-2 flex flex-col justify-center self-center text-left tracking-wide sm:text-sm md:mx-0 md:pt-8 md:text-lg'
      )}
    >
      {children}
    </section>
  );
};

export default BasicDiv;
