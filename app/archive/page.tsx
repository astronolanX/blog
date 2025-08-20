import { MediaGrid } from 'app/components/media-grid'
import { archiveData } from './data'

export const metadata = {
  title: 'Archive',
  description: 'A collection of past work and visual snippets',
}

export default function Archive() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Archive
      </h1>
      <p className="mb-8 text-neutral-600 dark:text-neutral-300">
        A visual archive of creative explorations, experiments, and behind-the-scenes glimpses into the creative process.
      </p>
      <MediaGrid items={archiveData} />
    </section>
  )
}