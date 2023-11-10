'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import ArticleI from '@/app/interface/interface'
import GoBackButton from '../GoBackButton'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Richtext from '@/components/Articles/Contentful/Richtext'

const ArticlePageDescription = ({ article }) => {
  const { title, dateCreatePost, coverImg, thema, content } = article.fields
  // const router = useRouter()

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
        {/* {article.imgSrc && (
        <Image
          alt='article photo'
          src={article.imgSrc}
          width={320}
          height={280}
          className='mx-auto'
        />
      )} */}

        <p className='text-center my-3'>{title}</p>

        <Richtext content={content} />
        {/* <div>{documentToReactComponents(content)}</div> */}
        {/* <p className='whitespace-pre-wrap'>{content}</p> */}
      </div>
    </>
  )
}

export default ArticlePageDescription
