import { client, previewClient } from '../../../libs/contentful/client'
import ArticlePageDescription from '../../../components/Articles/ArticlePageDescription'
import Navigation from '../../../components/Navigation'

type Params = {
  params: {
    slug: string
  }
}
const fetchBlogPost = async (slug: string) => {
  const queryOptions = {
    content_type: 'post',
    'fields.slug[match]': slug
  }
  const queryResult = await client.getEntries(queryOptions)
  return queryResult.items[0]
}

const Article = async ({ params }: Params) => {
 
  const article = await fetchBlogPost(params.slug)


  return (
    <>
      <Navigation section={article.fields.title} />
      <ArticlePageDescription article={article} />
    </>
  )
}

export default Article
