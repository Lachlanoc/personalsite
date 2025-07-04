import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src', 'app', 'posts');

export async function getSortedPostsData() {
  const fileNames = await fs.readdir(postsDirectory, { withFileTypes: true });

  // Only include files (not directories) that end with .md
  const mdFileNames = fileNames
    .filter(dirent => dirent.isFile() && dirent.name.endsWith('.md'))
    .map(dirent => dirent.name);

  const allPostsData = await Promise.all(mdFileNames.map(async fileName => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    return {
      slug,
      ...(matterResult.data as { title: string; date: string })
    };
  }));

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getAllPostSlugs() {
  const fileNames = await fs.readdir(postsDirectory);
  return fileNames.map(fileName => ({
    params: {
      slug: fileName.replace(/\.md$/, '')
    }
  }));
}

export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = await fs.readFile(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  return {
    slug,
    ...(matterResult.data as { title: string; date: string }),
    content: matterResult.content
  };
}
