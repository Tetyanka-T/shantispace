"use client"

import { useState } from "react"
import Link from "next/link"
import {BiDownArrowAlt} from "react-icons/bi"

const NavBarUserDesctop = () => {
    const [userMenu, setUserMenu] = useState(false)

    const onShowMenu = () => {
        setUserMenu(true);
        toggleMenu();
      };
      const toggleMenu = () => {
        userMenu ? setUserMenu(false) : setUserMenu(true);
      };
  return (
    <nav className="text-lg font-normal tracking-wide leading-6">

        <ul className="flex items-center justify-center">
            <li className="mr-9 font-semibold hover:text-amber-950 hover:border-b-2 hover:border-amber-950" >
                <Link href="/">Головна</Link>
            </li>
            <li className="relative mr-10 font-semibold hover:text-amber-950 hover:border-b-2 hover:border-amber-950">
                <div className="flex items-center">
                <Link href="/blog-user" onClick={() => setUserMenu(false)}>Блог</Link>
                <button onClick={() => onShowMenu()} className="ml-5"> 
                    <BiDownArrowAlt size={24} className="fill-amber-950"/>
                </button>
                </div>
                
                {userMenu && (
                    <ul className="absolute top-[57px] left-0 bg-slate-200 p-5 flex justify-center items-center w-max z-50 rounded-md">
                        <li className="mr-8 hover:text-amber-950 font-bold hover:border-b-2 hover:border-amber-950" onClick={() => setUserMenu(false)}>
                            <Link href="/chat">Чат</Link>
                        </li>
                        <li className="mr-8 hover:text-amber-950 font-bold hover:border-b-2 hover:border-amber-950" onClick={() => setUserMenu(false)}>
                            <Link href="/questions">Питання</Link>
                        </li>
                        <li className="hover:text-amber-950 font-bold hover:border-b-2 hover:border-amber-950" onClick={() => setUserMenu(false)}>
                            <Link href="/questions/addquestion">Задати питання</Link>
                        </li>
                    </ul>
                )}
            </li>
            <li className="mr-9 font-semibold hover:text-amber-950 hover:border-b-2 hover:border-amber-950" >
                <Link href="/yoga">Простір йоги</Link>
            </li>
    
            <li className="font-semibold hover:text-amber-950 hover:border-b-2 hover:border-amber-950">
                <Link href="/physical-therapy">Фізична реабілітація</Link>
            </li>
        </ul>
        
    </nav>
  )
}

export default NavBarUserDesctop