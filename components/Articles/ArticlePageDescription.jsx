'use client'

import GoBackButton from '../GoBackButton'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
// import TimeArticle from './TimeArticle'

const ArticlePageDescription = ({ article }) => {
  const { title, dateCreate, coverImg, thema, content } = article.fields

  return (
    <>
      <GoBackButton />
      <div className='my-4 mx-auto'>
        <h2 className='text-right my-2'>Тема: {thema}</h2>
        {/* <TimeArticle>{dateCreate}</TimeArticle> */}
        <p className='text-center my-4 font-bold text-lg'>{title}</p>
        <ReactMarkdown className='markdown' remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </div>
    </>
  )
}

export default ArticlePageDescription
