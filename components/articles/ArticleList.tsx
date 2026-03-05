import type { Article } from '@/lib/content/types'
import ArticleCard from './ArticleCard'
import styles from './ArticleList.module.css'

interface Props {
  articles: Article[]
}

export default function ArticleList({ articles }: Props) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <div className="tag">Blogg</div>
          <h1>
            Innsikt og <em>kunnskap</em>
          </h1>
          <p className={styles.headerSub}>
            Vi deler det vi kan om digital markedsføring, teknologi og AI.
            Her finner du artikler som hjelper bedriften din å vokse på nett.
          </p>
        </div>

        <div className={styles.grid}>
          {articles.map((article, i) => (
            <ArticleCard key={article.slug} article={article} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
