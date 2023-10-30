"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ArticleI from "@/app/interface/interface";
import FilterArticles from "./FilterArticles";

const ArticlesList = ({articles}: ({articles: ArticleI[]})) => {
  const [filter, setFilter] = useState(false)
  const [filtredArticles, setFiltredArticles] = useState<any[]>([]);

  const onFiltredArticles = (value: string) => {
    const themas = articles.filter(art => art.thema === value)
    setFiltredArticles(themas)
    setFilter(true)
  }
  const onShowAllArticles = () => {
    setFilter(false)
  }
  return (
    <>
      <FilterArticles articles={articles} onClickFilter={onFiltredArticles} onShowAll={onShowAllArticles}/>
        {filter === true ? (
          <ul className="mx-auto mt-3 text-base font-normal sm:grid grid-cols-2 gap-3 w-280px lg:grid-cols-3 xl:grid-cols-4">
            {filtredArticles.map((article: ArticleI) => (
              <li key={article._id} className="border-2 border-solid p-3 rounded-lg min-[-320px]:mb-3 shadow-slate-50">
                <Link href={`/articles/${article._id}`}>
                  <h2 className="text-right">{article.thema}</h2>
                  <Image src={article.imgSrc} width={280} height={200} alt=""/>
                  <p className="text-center my-2">{article.title}</p>
                  <p className="truncate">{article.description}</p>
                  <p className="text-right my-3 text-sm">Читати далі</p>
                </Link>
              </li>
            ))}
          </ul>
        ): (
          <ul className="mx-auto mt-3 text-base font-normal sm:grid grid-cols-2 gap-3 w-280px lg:grid-cols-3 xl:grid-cols-4">
            {articles.map((article: ArticleI) => (
              <li key={article._id} className="border-2 border-solid p-3 rounded-lg min-[-320px]:mb-3 shadow-slate-50">
                <Link href={`/articles/${article._id}`}>
                  <h2 className="text-right mb-2">{article.thema}</h2>
                  <Image src={article?.coverImg} width={290} height={200} alt="article photo" className="mx-auto"/>
                  <p className="text-center my-2">{article.title}</p>
                  <p className="truncate">{article.description}</p>
                  <p className="text-right my-3 text-sm bottom-0">Читати далі</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      


    
    

     
    </>

  )
}

export default ArticlesList