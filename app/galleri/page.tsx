import type { Metadata } from 'next'
import GalleryGrid from '@/components/GalleryGrid'
import { galleryImages } from '@/lib/content/data/gallery'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Galleri | attentio',
  description:
    'Se bilder fra attentio – kreativt innhold, foto, dronebilder og prosjekter fra Bergen.',
  openGraph: {
    title: 'Galleri | attentio',
    description: 'Se bilder fra attentio – kreativt innhold, foto, dronebilder og prosjekter fra Bergen.',
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galleri | attentio',
    description: 'Se bilder fra attentio – kreativt innhold, foto, dronebilder og prosjekter fra Bergen.',
  },
  alternates: { canonical: '/galleri' },
}

export default function GalleriPage() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={`${styles.heroInner} reveal`}>
            <div className="tag">Galleri</div>
            <h1 className={styles.h1}>Bilder fra attentio</h1>
            <p className={styles.sub}>
              Foto, dronebilder og øyeblikk fra prosjekter og hverdagen vår.
            </p>
          </div>
        </div>
      </section>

      <GalleryGrid images={galleryImages} />
    </>
  )
}
