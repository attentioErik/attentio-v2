import Image from 'next/image'
import type { GalleryImage } from '@/lib/content/data/gallery'
import styles from './GalleryGrid.module.css'

interface Props {
  images: GalleryImage[]
}

export default function GalleryGrid({ images }: Props) {
  return (
    <div className={styles.grid}>
      {images.map((img, i) => (
        <div key={i} className={styles.item}>
          <Image
            src={img.src}
            alt={img.alt}
            width={1600}
            height={1200}
            className={styles.image}
            sizes="(max-width: 32rem) 100vw, (max-width: 56rem) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  )
}
