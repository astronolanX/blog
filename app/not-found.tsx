import { styles } from 'app/lib/styles'

export default function NotFound() {
  return (
    <section>
      <h1 className={styles.pageHeader}>
        404 - Page Not Found
      </h1>
      <p className={styles.marginBottom.sm}>The page you are looking for does not exist.</p>
    </section>
  )
}
