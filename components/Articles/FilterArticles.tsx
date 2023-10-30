"use client"
import Link from "next/link";
import Article from '@/app/interface/interface'
import { useState } from 'react'
import {GoMultiSelect} from "react-icons/go"


const FilterArticles = ({articles, onClickFilter, onShowAll} : ({articles: Article[], onClickFilter : Function, onShowAll: Function})) => {
   
  const [showFilter, setShowFilter] = useState(false);

 
 
  const allTopics = articles.map(art => art.thema);
  const uniqueTopics = Array.from(new Set(allTopics))


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
            <GoMultiSelect size={20} className="ml-2 fill-amber-950"/>
        </button>
        {showFilter && (
             <ul className="p-4 bg-slate-50 w-52 absolute top-7">
              <li className="mt-2" onClick={() => handleShowAllArticless()}>Читати всі статті</li>
             {uniqueTopics.map((article) => (
                 <li key={uniqueTopics.indexOf(article)} className="mt-2" onClick={() => handleChangeThema(article)}>{article}</li>
             ))}
         </ul>
        )}
      
      
    </div>
  )
}

export default FilterArticles