import Link from 'next/link';
import { TimeLineItemProps } from '@components/types/TimeLineProps';

const TimeLineItem: React.FC<TimeLineItemProps> = ({
  title,
  description,
  fromTime,
  toTime,
  sourceLink,
  sourceText,
  icon,
  sourceLinkIcon,
  isLatest,
}) => {
  const descriptionItems =
    typeof description === 'string'
      ? description
          .split(' - ')
          .map((item) => item.trim())
          .filter(Boolean)
      : null;

  if (!sourceLinkIcon) {
    sourceLinkIcon = (
      <svg
        className='me-2.5 h-3.5 w-3.5'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='currentColor'
        viewBox='0 0 20 20'
      >
        <path d='M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z' />
        <path d='M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z' />
      </svg>
    );
  }
  return (
    <li
      className={`relative ms-4 border-s pb-8 ps-6 last:border-transparent sm:ms-6 sm:ps-8 ${
        isLatest
          ? 'border-emerald-300 dark:border-emerald-900'
          : 'border-zinc-200 dark:border-zinc-800'
      }`}
    >
      <span
        className={`absolute -start-[5px] top-1 h-2.5 w-2.5 rounded-full ring-4 ring-white dark:ring-[#111010] ${
          isLatest
            ? 'bg-emerald-600 dark:bg-emerald-400'
            : 'bg-zinc-300 dark:bg-zinc-700'
        }`}
        aria-hidden='true'
      />
      <div className='mb-2 flex flex-wrap items-center gap-x-3 gap-y-1'>
        <p className='text-xs font-medium text-zinc-500 dark:text-zinc-400'>
          <time>{fromTime}</time> – <time>{toTime}</time>
        </p>
        {!!isLatest && (
          <span className='rounded-sm bg-emerald-50 px-2 py-1 text-[10px] font-semibold uppercase text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'>
            Current
          </span>
        )}
      </div>
      <h2 className='text-base font-semibold leading-6 text-zinc-950 sm:text-lg dark:text-zinc-100'>
        {title}
      </h2>
      {descriptionItems && descriptionItems.length > 1 ? (
        <ul className='mt-3 space-y-1.5 text-sm leading-6 text-zinc-600 dark:text-zinc-400'>
          {descriptionItems.map((item, index) => (
            <li key={`${index}-${item}`} className='flex gap-2'>
              <span className='mt-[10px] h-1 w-1 shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400' />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className='mt-3 max-w-3xl text-sm leading-6 text-zinc-600 dark:text-zinc-400'>
          {descriptionItems?.[0] ?? description}
        </p>
      )}
      {!!sourceLink && (
        <Link
          href={sourceLink}
          target='_blank'
          rel='noreferrer'
          className='mt-4 inline-flex min-h-9 items-center gap-2 rounded-md border border-zinc-200 px-3 py-2 text-xs font-semibold text-zinc-700 transition-colors hover:border-emerald-400 hover:text-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-emerald-700 dark:hover:text-emerald-400'
        >
          <span className='mr-2'>{sourceLinkIcon}</span>
          {sourceText}
        </Link>
      )}
    </li>
  );
};

interface TimeLineProp {
  items: TimeLineItemProps[];
}

const TimeLine: React.FC<TimeLineProp> = ({ items }) => {
  return (
    <ol className='relative mt-2'>
      {!!items &&
        items.map((item, index) => <TimeLineItem key={index} {...item} />)}
    </ol>
  );
};

export default TimeLine;
