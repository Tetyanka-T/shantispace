'use client'

import { useRouter } from 'next/navigation'
import GoBackButton from '../GoBackButton'
import ReactMarkdown from 'react-markdown'

const ArticlePageDescription = ({ article }) => {
  const { title, dateCreatePost, coverImg, thema, contentPost } = article.fields
  // const router = useRouter()
  console.log(article)
  return (
    <>
      <GoBackButton />
      <div className='my-4 mx-auto'>
        <span className='text-right text-sm'>
          Опубліковано{' '}
          {new Date(dateCreatePost).toLocaleDateString('uk-Uk', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </span>
        <h2 className='text-right my-2'>{thema}</h2>
        <p className='text-center my-3'>{title}</p>
        <ReactMarkdown className='markdown'>{contentPost}</ReactMarkdown>
      </div>
    </>
  )
}

export default ArticlePageDescription
