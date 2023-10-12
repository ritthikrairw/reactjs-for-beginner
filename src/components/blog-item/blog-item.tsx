import Image from "next/image";
import dateFormat from "@/utils/date-format";

type Author = {
  avatar: string;
  name: string;
};

export interface BlogItemProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  categoryName: string;
  title: string;
  author: Author;
  date: Date;
}

export function BlogItem({
  imageUrl,
  author,
  categoryName,
  date,
  title,
  ...props
}: BlogItemProps) {
  return (
    <article {...props}>
      <figure>
        <Image
          src={imageUrl}
          alt={title}
          width={472}
          height={265}
          className='rounded-xl object-cover w-full hover:scale-105 transition-transform duration-500 ease-in-out aspect-video'
        />
      </figure>
      <div className='mt-4'>
        <span className='text-blue-600 text-sm uppercase'>{categoryName}</span>
        <h4 className='text-black font-semibold'>{title}</h4>
        <div className='flex gap-1 text-gray-400 text-xs items-center mt-2'>
          <span className='flex gap-1 items-center'>
            <Image
              src={author?.avatar}
              alt={author?.name}
              width={24}
              height={24}
              className='rounded-full'
            />
            {author?.name}
          </span>
          <span>•</span>
          <span>{dateFormat(date)}</span>
        </div>
      </div>
    </article>
  );
}

export default BlogItem;
