import Image from "next/image";
import { cn } from "@lib/utils";

interface TextTagProps {
  text: string;
  logo?: string;
  className?: string;
}

const TextTag = ({ text, logo, className }: TextTagProps) => {
  console.log("TextTag : ", text, logo);
  return (
    <span className={cn("border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline", className)}>
      <span className="text-neutral-900 dark:text-neutral-100">{text}</span>
      {logo && (
        <span className="ml-1">
          <Image
            src={logo}
            alt={text}
            width={16}
            height={16}
            className="inline-block"
          />
        </span>
      )}
    </span>
  );
};

export default TextTag;
