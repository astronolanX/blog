import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-300">
        Thoughts on development, technology, and the tools that shape how we build software.
      </p>
      <BlogPosts />
    </section>
  )
}
