"use client"

import { useState } from "react"
import Link from "next/link"
import {BiDownArrowAlt} from "react-icons/bi"




const NavBarAdminMobile = ({ onClick }: {onClick: Function}) => {
    const [adminMenu, setAdminMenu] = useState(false)

    const onShowMenu = () => {
        setAdminMenu(true);
        toggleMenu();
      };
      const toggleMenu = () => {
        adminMenu ? setAdminMenu(false) : setAdminMenu(true);
      };
  return (
    <nav className="absolute z-10 bg-slate-100 w-full top-0 h-screen left-0 text-lg font-normal tracking-wide leading-6 translate-x-50 translate-y-50">
      
        <ul className="px-8 py-20">
            <li className="mb-2 border-b-2 border-amber-950 py-3">
                <div className="flex items-center">
                <Link href="/blog-admin" onClick={() => onClick()}>Блог</Link>
                <button onClick={() => onShowMenu()} className="ml-auto"> 
                    <BiDownArrowAlt size={24} className="fill-amber-950 animate-bounce"/>
                </button>
                </div>
                
                {adminMenu && (
                    <ul className="px-3">
                        <li className="my-2" onClick={() => onClick()}>
                            <Link href='/blog'>Корисні статті</Link>
                        </li>
                        <li onClick={() => onClick()} className="my-2">
                            <Link href="/chat">Чат</Link>
                        </li>
                        <li onClick={() => onClick()} className="my-2">
                            <Link href="/questions">Питання</Link>
                        </li>
                        <li onClick={() => onClick()} className="my-2">
                            <Link href="/questions/newquestion">Нове питання</Link>
                        </li>
                        <li onClick={() => onClick()} className="my-2">
                            <Link href="/questions/allquestions">Відредагувати відповідь</Link>
                        </li>
                    </ul>
                )}
            </li>
            <li className="mb-2 border-b-2 border-amber-950 py-3" onClick={() => onClick()}>
                <Link href="/yoga">Простір йоги</Link>
            </li>
            <li className=" mb-2 border-b-2 border-amber-950 py-3" onClick={() => onClick()}>
                <Link href="/physical-therapy">Рухова активність</Link>
            </li>
             <li className="border-b-2 border-amber-950 py-3" onClick={() => onClick()}>
                <Link href="/rent">Оренда залу</Link>
            </li>
        </ul>
        
    </nav>
  )
}

export default NavBarAdminMobile