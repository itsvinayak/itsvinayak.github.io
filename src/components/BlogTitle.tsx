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
      <div className='flex flex-row text-xs font-light'>
        <p> Published on </p>
        <time dateTime={date} className='px-1'>
          {formatDate(date)}
        </time>
      </div>
      <h1 className='m-5 text-center text-4xl font-bold'>{title}</h1>
      <div className='flex flex-row items-center justify-between'>
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
        <div>
          {tags &&
            tags.map((tag, index) => (
              <TextTag
                key={index}
                className='m-1 text-xs text-slate-200'
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
