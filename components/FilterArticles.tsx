"use client"
import Link from "next/link";
import Article from '@/app/interface/interface'
import { useState } from 'react'
import {GoMultiSelect} from "react-icons/go"


const FilterArticles = ({articles, onClickFilter, onShowAll} : ({articles: Article[], onClickFilter : Function, onShowAll: Function})) => {
   
  const [showFilter, setShowFilter] = useState(false);

  const onShowMenu = () => {
    setShowFilter(true);
    toggleMenu();
  };
  const toggleMenu = () => {
    showFilter ? setShowFilter(false) : setShowFilter(true);
  };

 const handleChangeThema = (value: string) => {
  onClickFilter(value)
  setShowFilter(false)
 }

 const handleShowAllArticless = () => {
  onShowAll();
  setShowFilter(false)
 }

  return (
    <div className='relative ml-3 my-4'>
        <button onClick={() => onShowMenu()} className='flex items-center'>
            <span>Читати по темі</span>
            <GoMultiSelect size={20} className="ml-2 fill-amber-900"/>
        </button>
        {showFilter && (
             <ul className="p-4 bg-slate-50 w-52 absolute top-7">
              <li className="mt-2" onClick={() => handleShowAllArticless()}>Читати всі статті</li>
             {articles.map((article: Article) => (
                 <li key={article._id} className="mt-2" onClick={() => handleChangeThema(article.thema)}>{article.thema}</li>
             ))}
         </ul>
        )}
      
      
    </div>
  )
}

export default FilterArticles