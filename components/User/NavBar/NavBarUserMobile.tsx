"use client"

import { useState } from "react"
import Link from "next/link"
import {BiDownArrowAlt} from "react-icons/bi"


const NavBarUserMobile = ({ onClick }: {onClick: Function}) => {
    const [userMenu, setUserMenu] = useState(false)

    const onShowMenu = () => {
        setUserMenu(true);
        toggleMenu();
      };
      const toggleMenu = () => {
        userMenu ? setUserMenu(false) : setUserMenu(true);
      };
  return (
    <nav className="absolute bg-slate-100 w-full top-0 left-0 text-lg font-normal tracking-wide leading-6 translate-x-50 translate-y-50 z-10">
      
    <ul className="px-8 py-20">
        <li className="mb-2 border-b-2 border-amber-950 py-3" onClick={() => onClick()}>
            <Link href="/">Головна</Link>
        </li>
        <li className="mb-2 border-b-2 border-amber-950 py-3">
            <div className="flex items-center">
                <Link href="/blog-user" onClick={() => onClick()}>Блог</Link>
                <button onClick={() => onShowMenu()} className="ml-auto">
                    <BiDownArrowAlt size={24} className="fill-amber-950"/>
                </button>
            </div>
            
            {userMenu && (
                <ul className="px-3">
                    <li onClick={() => onClick()} className="my-2">
                        <Link href="/chat">Чат</Link>
                    </li>
                    <li onClick={() => onClick()} className="my-2">
                        <Link href="/questions">Питання</Link>
                    </li>
                    <li onClick={() => onClick()} className="my-2">
                        <Link href="/questions/addquestion">Задати питання</Link>
                    </li>
                </ul>
            )}
        </li>
        <li className="mb-2 border-b-2 border-amber-950 py-3" onClick={() => onClick()}>
            <Link href="/yoga">Простір йоги</Link>
        </li>
        {/* <li className="mb-2 border-b-2 border-amber-600 py-3" onClick={() => onClick()}>
            <Link href="/LFK">ЛФК</Link>
        </li> */}
        <li className="border-b-2 border-amber-950 py-3" onClick={() => onClick()}>
            <Link href="/physical-therapy">Фізична реабілітація</Link>
        </li>
    </ul>
    
</nav>
  )
}

export default NavBarUserMobile