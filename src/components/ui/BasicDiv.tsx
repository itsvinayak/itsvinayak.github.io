import React, { ReactNode } from 'react';
import { cn } from '@lib/utils';

interface BasicDivProps {
  children: ReactNode;
  className?: string;
}

const BasicDiv = ({ children, className }: BasicDivProps) => {
  return (
    <section
      className={cn(
        'mx-2 flex flex-col justify-center self-center text-left tracking-wide sm:text-sm md:mx-0 md:pt-8 md:text-lg',
        className
      )}
    >
      {children}
    </section>
  );
};

export default BasicDiv;
