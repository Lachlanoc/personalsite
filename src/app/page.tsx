import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Link href="/posts" className="text-black-600 underline">View All Posts</Link>
    </div>
  );
}