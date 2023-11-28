'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import FilterArticles from './FilterArticles'
import s from '@/app/styles/common.module.css'

const ArticlesList = ({ articles }) => {
  const [filter, setFilter] = useState(false)
  const [filtredArticles, setFiltredArticles] = useState([])
  const { items } = articles
  const onFiltredArticles = value => {
    const themas = items.filter(art => art.fields.thema === value)
    setFiltredArticles(themas)
    setFilter(true)
  }
  const onShowAllArticles = () => {
    setFilter(false)
  }
  return (
    <>
      <FilterArticles
        articles={articles}
        onClickFilter={onFiltredArticles}
        onShowAll={onShowAllArticles}
      />
      {filter === true ? (
        <ul className='mx-auto mt-3 text-base font-normal sm:grid grid-cols-2 gap-3 w-280px lg:grid-cols-3 xl:grid-cols-4'>
          {filtredArticles.map(article => (
            <li
              key={article.fields.slug}
              className='border-2 border-solid p-3 rounded-lg min-[-320px]:mb-3 shadow-slate-50'
            >
              <Link href={`/articles/${article.fields.slug}`}>
                <p className='text-right text-sm my-2'>
                  Опубліковано{' '}
                  {new Date(article.fields.dateCreate).toLocaleDateString(
                    'uk-Uk',
                    {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }
                  )}
                </p>
                <div className={s.img_container}>
                  <Image
                    src={'https:' + article.fields.coverImg?.fields.file?.url}
                    width={320}
                    height={250}
                    alt={`Обкладинка для статті ${article.title}`}
                    className='mx-auto'
                  />
                </div>

                <h2 className='text-right mb-2'>
                  Тема: {article.fields.thema}
                </h2>
                <h2 className='text-center my-2'>{article.fields.title}</h2>

                <p className='truncate'>{article.fields.description}</p>
                <p className='text-right my-3 text-sm bottom-0'>Читати далі</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className='mx-auto mt-3 text-base font-normal sm:grid grid-cols-2 gap-3 w-280px lg:grid-cols-3 '>
          {articles.items.map(article => {
            const { slug, title, dateCreate, coverImg, thema, description } =
              article.fields
            return (
              <li
                key={slug}
                className='border-2 border-solid p-3 rounded-lg min-[-320px]:mb-3 shadow-slate-50'
              >
                <Link href={`/articles/${slug}`}>
                  <h2 className='text-right mb-2 fonb'>{thema}</h2>
                  <p className='text-right text-sm my-2'>
                    Опубліковано{' '}
                    {new Date(dateCreate).toLocaleDateString('uk-Uk', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  <div className={s.img_container}>
                    <Image
                      src={'https:' + coverImg?.fields.file?.url}
                      width={320}
                      height={250}
                      alt={`Обкладинка для статті ${title}`}
                      className='mx-auto'
                    />
                  </div>

                  <h2 className='text-center my-2'>{title}</h2>

                  <p className='truncate'>{description}</p>
                  <p className='text-right my-3 text-sm bottom-0'>
                    Читати далі
                  </p>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}

export default ArticlesList
