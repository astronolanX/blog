import { BlogPosts } from 'app/components/posts'
import { styles } from 'app/lib/styles'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className={styles.pageHeader}>My Blog</h1>
      <p className={styles.description}>
        Thoughts on development, technology, and the tools that shape how we build software.
      </p>
      <BlogPosts />
    </section>
  )
}
