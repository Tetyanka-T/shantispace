import ArticlesList from './ArticlesList'
import { client } from '../../libs/contentful/client'

const getArticles = async () => {
  const res = await client.getEntries({ content_type: 'post' })
  return res
}

const ArticlesPage = async () => {
  const blogEntries = await getArticles()

  return (
    <section className='my-4'>
      <ArticlesList articles={blogEntries} />
    </section>
  )
}

export default ArticlesPage
