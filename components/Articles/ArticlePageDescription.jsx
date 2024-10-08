'use client'
import GoBackButton from '../GoBackButton'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const ArticlePageDescription = ({ article }) => {
  const { title, dateCreate, coverImg, thema, content } = article.fields
  const currentTime = new Date(dateCreate).toLocaleDateString('uk-Uk', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  return (
    <>
      <GoBackButton />
      <div className='my-4 mx-auto'>
        <span suppressHydrationWarning className='text-right text-sm'>
          Опубліковано {currentTime}
        </span>

        <h2 className='text-right my-2'>Тема: {thema}</h2>
        <p className='text-center my-4 font-bold text-lg'>{title}</p>
        <ReactMarkdown className='markdown' remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </>
  )
}

export default ArticlePageDescription
