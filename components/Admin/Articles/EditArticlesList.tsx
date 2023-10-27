"use client"

import Link from "next/link";
import { useState } from "react";
import ArticleI from "@/app/interface/interface";
import FilterArticles from "@/components/Articles/FilterArticles";
import { HiPencilAlt } from "react-icons/hi";
import DeleteButton from "@/components/Articles/DeleteButton";

const EditArticlesList = ({articles}: ({articles: ArticleI[]})) => {
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
              <li key={article._id} className="p-4 border border-slate-300 my-3 h-100">
               <div className="flex items-center justify-end ">
                    <DeleteButton id={article._id} />
                    <Link href={`/articles/editarticle/${article._id}`}>
                      <HiPencilAlt size={24} className="fill-amber-900 ml-3"/>
                    </Link>
                  </div>
                
                    <h2 className="my-2">{article.thema}</h2>
                    <p className="text-center mb-2">{article.title}</p>
                    <p className="truncate">{article.description}</p>
               
              </li>
            ))}
          </ul>
        ): (
            <ul className="mx-auto mt-3 text-base font-normal sm:grid grid-cols-2 gap-3 w-280px lg:grid-cols-3 xl:grid-cols-4">
            {articles.map((article: ArticleI) => (
              <li key={article._id} className="p-4 border border-slate-300 my-3 h-100">
                  <div className="flex items-center justify-end ">
                    <DeleteButton id={article._id} />
                    <Link href={`/articles/editarticle/${article._id}`}>
                      <HiPencilAlt size={24} className="fill-amber-900 ml-3"/>
                    </Link>
                  </div>
                
                    <h2 className="my-2">{article.thema}</h2>
                    <p className="text-center mb-2">{article.title}</p>
                    <p className="truncate">{article.description}</p>
               
              </li>
            ))}
          </ul>
        )}
      


    
    

     
    </>
  )
}

export default EditArticlesList