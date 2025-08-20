import { BlogPosts } from 'app/components/posts'
import { styles } from 'app/lib/styles'

export default function Page() {
  return (
    <section>
      <h1 className={styles.pageHeader}>
        My Portfolio
      </h1>
      <p className={styles.marginBottom.sm}>
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <div className="my-8">
        <h2 className={styles.sectionHeader}>Projects I've Owned</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
