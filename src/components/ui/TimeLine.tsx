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
  console.log('TimeLineItem');
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
    <li className='mb-10 ms-6'>
      {!!icon && (
        <span className='absolute -start-3 flex h-6 w-6 animate-pulse items-center justify-center rounded-full bg-gray-200 ring-8 ring-white dark:bg-gray-900 dark:ring-gray-900'>
          {icon}
        </span>
      )}
      <h3 className='mb-1 flex items-center text-lg font-semibold text-gray-900 dark:text-white'>
        {title}
        {!!isLatest && (
          <span className='me-2 ms-3 rounded bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800 dark:bg-gray-900 dark:text-gray-300'>
            Latest
          </span>
        )}
      </h3>
      <span className='mb-2 block text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
        <time>{fromTime}</time> - <time>{toTime}</time>
      </span>
      <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
        {description}
      </p>
      {!!sourceLink && (
        <Link
          href={sourceLink}
          target='_blank'
          className='inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:text-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'
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
    <ol className='relative border-s border-gray-200 dark:border-gray-700'>
      {!!items &&
        items.map((item, index) => <TimeLineItem key={index} {...item} />)}
    </ol>
  );
};

export default TimeLine;
