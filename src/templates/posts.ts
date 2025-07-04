import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'src/app/posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDir)
}

export async function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(postsDir, `${realSlug}.mdx`)
  const fileContents = await fs.promises.readFile(filePath, 'utf-8')
  const { data, content } = matter(fileContents)

  return {
    slug: realSlug,
    frontMatter: data,
    content,
  }
}