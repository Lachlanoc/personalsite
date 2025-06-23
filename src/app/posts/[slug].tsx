import { GetStaticPaths, GetStaticProps } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { getPostSlugs, getPostBySlug } from '../../templates/posts'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { components } from '../../components/CustomMDXComponents'
import { MDXComponents } from 'mdx/types'



type Props = {
  source: MDXRemoteSerializeResult
  frontMatter: {
    title: string
    date: string
    [key: string]: any
  }
}

export default function PostPage({ source, frontMatter }: Props) {
  return (
    <article>
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...source} />
    </article>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params!.slug as string)
  const mdxSource = await serialize(post.content)

  return {
    props: {
      source: mdxSource,
      frontMatter: post.frontMatter,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getPostSlugs()
  return {
    paths: slugs.map(slug => ({ params: { slug: slug.replace(/\.mdx$/, '') } })),
    fallback: false,
  }
}


