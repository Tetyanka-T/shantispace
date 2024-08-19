import { Metadata } from 'next'
import { client, previewClient } from '../../../libs/contentful/client'
import ArticlePageDescription from '../../../components/Articles/ArticlePageDescription'
import Navigation from '../../../components/Navigation'



export const metadata: Metadata = {
  title: 'ShantiSpace фізична реабілітація, ЛФК, корекція постави у дітей Кривий Ріг',
  description: "Простір здоров'я та душевної рівноваги, індивідуальні та групові заняття з йоги, фізичної реабілітації, оздоровчої гімнастики (ЛФК), група кореції постави у дітей, реабілітація військових Кривий Ріг",
  keywords: 'йогатерапія, вагітність, здоров`я, стопи, дихання, свідомість, усвідомлення',
}


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
