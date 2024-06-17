import { formatDate } from '@lib/utils';
import TextTag from '@ui/TextTag';
import AuthorsCard from '@ui/AuthorsCard';
import { BlogTitleProps } from '@components/types/BlogTitleProps';

const BlogTitle: React.FC<BlogTitleProps> = ({
  title,
  date,
  authors,
  authorsImage,
  tags,
}) => {
  return (
    <div className='p-4'>
      <h1 className='mx-0 text-center text-2xl font-bold md:m-5 md:text-4xl'>
        {title}
      </h1>
      <div className='flex flex-row items-center text-xs font-bold text-gray-500 dark:text-gray-400'>
        <p> Published on </p>
        <time dateTime={date} className='px-1'>
          {formatDate(date)}
        </time>
        <div>
          {authors &&
            authorsImage &&
            authors.map((author: any, index: any) => (
              <AuthorsCard
                key={index}
                author={{
                  name: author,
                  image: authorsImage[index],
                }}
              />
            ))}
        </div>
        <div className='flex flex-row'>
          {tags &&
            tags.map((tag, index) => (
              <TextTag
                key={index}
                className='m-1 mt-[-1px] text-xs text-slate-200'
                text={tag}
                logo={''}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default BlogTitle;
