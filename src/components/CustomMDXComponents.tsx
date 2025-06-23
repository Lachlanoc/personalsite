import { MDXComponents } from 'mdx/types'

export const components: MDXComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 style={{ color: 'tomato' }} {...props} />
  ),
}

  