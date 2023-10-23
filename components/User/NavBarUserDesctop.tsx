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
            <li className="relative mr-10">
                <div className="flex items-center">
                <Link href="/blog-user">Блог</Link>
                <button onClick={() => onShowMenu()} className="ml-5"> 
                    <BiDownArrowAlt size={24} className="fill-amber-800"/>
                </button>
                </div>
                
                {userMenu && (
                    <ul className="absolute top-10 left-0 bg-slate-100 p-5 flex justify-center items-center w-max">
                        <li className="mr-8" onClick={() => setUserMenu(false)}>
                            <Link href="/chat">Чат</Link>
                        </li>
                        <li className="" onClick={() => setUserMenu(false)}>
                            <Link href="/questions">Питання</Link>
                        </li>
                    </ul>
                )}
            </li>
            <li className="mr-9" >
                <Link href="/yoga">Йога</Link>
            </li>
            <li className="mr-9" >
                <Link href="/LFK">ЛФК</Link>
            </li>
            <li className="">
                <Link href="/physical-therapy">Фізична терапія</Link>
            </li>
        </ul>
        
    </nav>
  )
}

export default NavBarUserDesctop