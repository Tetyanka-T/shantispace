import Link from 'next/link'
import Image from 'next/image'
// import { useState } from "react";
import { BlogQueryResult } from '@/types'
import ImageComponent from '@/components/Articles/Contentful/ImageComponent'
import ArticleI from '@/app/interface/interface'
import FilterArticles from './FilterArticles'
import s from '@/app/styles/common.module.css'

const ArticlesList = ({ articles }) => {
  // const [filter, setFilter] = useState(false)
  // const [filtredArticles, setFiltredArticles] = useState<any[]>([]);

  // const onFiltredArticles = (value: string) => {
  //   const themas = articles.filter(art => art.thema === value)
  //   setFiltredArticles(themas)
  //   setFilter(true)
  // }
  // const onShowAllArticles = () => {
  //   setFilter(false)
  // }
  return (
    <>
      {/* <FilterArticles articles={articles} onClickFilter={onFiltredArticles} onShowAll={onShowAllArticles}/> */}
      {/* {filter === true ? (
          <ul className="mx-auto mt-3 text-base font-normal sm:grid grid-cols-2 gap-3 w-280px lg:grid-cols-3 xl:grid-cols-4">
            {filtredArticles.map((article: ArticleI) => (
              <li key={article._id} className="border-2 border-solid p-3 rounded-lg min-[-320px]:mb-3 shadow-slate-50">
                <Link href={`/articles/${article._id}`}>
                  <p className="text-right text-sm">{article.createdAt.split("T")[0]}</p>
                  <h2 className="text-right">{article.thema}</h2>
                  <Image src={article.imgSrc} width={280} height={200} alt=""/>
                  <p className="text-center my-2">{article.title}</p>
                  <p className="truncate">{article.description}</p>
                  <p className="text-right my-3 text-sm">Читати далі</p>
                </Link>
              </li>
            ))}
          </ul>
        ): ( */}
      <ul className='mx-auto mt-3 text-base font-normal sm:grid grid-cols-2 gap-3 w-280px lg:grid-cols-3 xl:grid-cols-4'>
        {articles.items.map(article => {
          const { slug, title, dateCreatePost, coverImg, thema, description } =
            article.fields
          return (
            <li
              key={slug}
              className='border-2 border-solid p-3 rounded-lg min-[-320px]:mb-3 shadow-slate-50'
            >
              <Link href={`/articles/${slug}`}>
                <div className={s.img_container}>
                  <Image
                    src={'https:' + coverImg?.fields.file?.url}
                    // src={coverImg.fields.file.url}
                    width={320}
                    height={250}
                    alt={`Обкладинка для статті ${title}`}
                    className='mx-auto'
                  />
                </div>
                <span className='text-right text-sm'>
                  Опубліковано{' '}
                  {new Date(dateCreatePost).toLocaleDateString('uk-Uk', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <h2 className='text-right mb-2'>Тема: {thema}</h2>

                {/* <ImageComponent
                  src={coverImg.fields.file.url}
                  width={320}
                  height={250}
                  alt={`Обкладинка для статті ${title}`}
                  className='mx-auto mb-2'
                /> */}

                <h2 className='text-center my-2'>{title}</h2>

                <p className='truncate'>{description}</p>
                <p className='text-right my-3 text-sm bottom-0'>Читати далі</p>
              </Link>
            </li>
          )
        })}
        {/* {articles.items.map((article) => (
              <li key={article.slug} className="border-2 border-solid p-3 rounded-lg min-[-320px]:mb-3 shadow-slate-50">
                <Link href={`/articles/${article.id}`}>
                  <p className="text-right text-sm">{article.createdAt.split("T")[0]}</p>
                  <h2 className="text-right mb-2">{article.thema}</h2>
                  <Image src={article?.coverImg} width={290} height={200} alt="article photo" className="mx-auto"/>
                  <p className="text-center my-2">{article.title}</p>
                  <p className="truncate">{article.description}</p>
                  <p className="text-right my-3 text-sm bottom-0">Читати далі</p>
                </Link>
              </li>
            ))} */}
      </ul>
      {/* )} */}
    </>
  )
}

export default ArticlesList
