import { MediaGrid } from 'app/components/media-grid'
import { archiveData } from './data'
import { styles } from 'app/lib/styles'

export const metadata = {
  title: 'Archive',
  description: 'A collection of past work and visual snippets',
}

export default function Archive() {
  return (
    <section>
      <h1 className={styles.pageHeader}>
        Archive
      </h1>
      <p className={styles.description}>
        A visual archive of creative explorations, experiments, and behind-the-scenes glimpses into the creative process.
      </p>
      <MediaGrid items={archiveData} />
    </section>
  )
}