import Header from '@/components/Header'
import { getPostData, getAllPostSlugs } from '@/lib/posts'
import ReactMarkdown from 'react-markdown'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const paths = getAllPostSlugs()
  return (await paths).map(({ params }) => ({ slug: params.slug }))
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params
  const postData = await getPostData(awaitedParams.slug)

  if (!postData) return notFound()

  return (
    <>
      <Header />
      <main className="flex flex-col items-center min-h-screen bg-white">
        <article className="prose max-w-2xl w-full mt-8">
          <h1 className="text-5xl text-center font-bold mb-4">{postData.title}</h1>
          <div className="mb-4">{postData.date}</div>
          <ReactMarkdown>{postData.content}</ReactMarkdown>
        </article>
      </main>
    </>
  )
}