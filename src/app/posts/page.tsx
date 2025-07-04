import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default async function PostsPage() {
  const allPostsData = getSortedPostsData();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">All Posts</h1>
      <ul>
        {(await allPostsData).map(({ slug, title, date }) => (
          <li key={slug} className="mb-2">
            <Link href={`/posts/${slug}`} className="underline">{title}</Link>{' '}
            <span className="text-sm">({date})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
