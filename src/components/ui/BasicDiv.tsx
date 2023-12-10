import React, { ReactNode } from 'react';
import { cn } from "@lib/utils"

interface BasicDivProps {
  children: ReactNode;
}

const BasicDiv = ({ children }: BasicDivProps) => {
  return (
    <main className={cn("tracking-wide pt-8 flex flex-col self-center justify-center mx-6 md:mx-0 text-center md:text-left")}>
      {children}
    </main>
  );
};

export default BasicDiv;
