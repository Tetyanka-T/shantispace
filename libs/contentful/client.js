import { createClient } from 'contentful'

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export const previewClient = createClient({
  host: 'preview.contentful.com',
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
})

export async function generateStaticParams() {
  const queryOptions = {
    content_type: 'post',
    select: 'fields.slug'
  }
  const articles = await client.getEntries(queryOptions)
  return articles.items.map(article => ({
    slug: article.fields.slug
  }))
}
