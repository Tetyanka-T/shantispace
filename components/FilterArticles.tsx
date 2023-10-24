"use client"

import Article from '@/app/interface/interface'
import { useState } from 'react'
import {GoMultiSelect} from "react-icons/go"


const FilterArticles = ({articles} : ({articles: Article[]})) => {
    const [filtredArticles, setFiltredArticles] = useState<any[]>([])
    const [showFilter, setShowFilter] = useState(false);
    const [selectThema, setSelectThema] = useState('')
    const onShowMenu = () => {
        setShowFilter(true);
        toggleMenu();
      };
      const toggleMenu = () => {
        showFilter ? setShowFilter(false) : setShowFilter(true);
      };

      const onFilteredArticles = () => {
        const themaArticle= articles.filter((art: Article) => art.thema === selectThema);
        setFiltredArticles(themaArticle);
      };

  return (
    <div className='relative ml-3 my-4'>
        <button onClick={() => onShowMenu()} className='flex items-center'>
            <span>Читати по темі</span>
            <GoMultiSelect size={20} className="ml-2 fill-amber-900"/>
        </button>
        {showFilter && (
             <ul className="p-4 bg-slate-50 w-52 absolute top-7">
             {articles.map((article: Article) => (
                 <li key={article._id} className="mt-2">{article.thema}</li>
             ))}
         </ul>

        )}
       
    </div>
  )
}

export default FilterArticles