import Link from 'next/link';
import Header from '../components/Header';
import React from 'react';

export default function Home() {
  return (
    <div className='flex flex-col items-center min-h-screen bg-white'>
        <Header />
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Link href="/posts" className="text-black-600 underline">View All Posts</Link>
    </div>
  );
}