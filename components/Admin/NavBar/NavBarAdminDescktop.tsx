"use client"

import { useState } from "react"
import Link from "next/link"
import {BiDownArrowAlt} from "react-icons/bi"


const NavBarAdminDescktop = () => {
    const [adminMenu, setAdminMenu] = useState(false)

    const onShowMenu = () => {
        setAdminMenu(true);
        toggleMenu();
      };
      const toggleMenu = () => {
        adminMenu ? setAdminMenu(false) : setAdminMenu(true);
      };

  return (
    <nav className="text-lg font-normal tracking-wide leading-6 ">

        <ul className="flex items-center justify-center">
            <li className="relative mr-10">
                <div className="flex items-center">
                <Link href="/blog-admin">Блог</Link>
                <button onClick={() => onShowMenu()} className="ml-5"> 
                    <BiDownArrowAlt size={24} className="fill-amber-950"/>
                </button>
                </div>
                
                {adminMenu && (
                    <ul className="text-gray-700 absolute top-[55px] left-0 bg-slate-200 p-5 flex justify-center items-center w-max z-50 rounded-md">
                        <li className="mr-8 hover:text-amber-950 font-bold hover:border-b-2 hover:border-amber-950" onClick={() => setAdminMenu(false)}>
                            <Link href="/chat">Чат</Link>
                        </li>
                        <li className="mr-8 hover:text-amber-950 font-bold hover:border-b-2 hover:border-amber-950" onClick={() => setAdminMenu(false)}>
                            <Link href="/questions">Питання</Link>
                        </li>
                        <li className="mr-8 hover:text-amber-950 font-bold hover:border-b-2 hover:border-amber-950" onClick={() => setAdminMenu(false)}>
                            <Link href="/questions/newquestion">Нове питання</Link>
                        </li>
                        <li onClick={() => setAdminMenu(false)} className="my-2 hover:text-amber-950 font-bold hover:border-b-2 hover:border-amber-950">
                            <Link href="/questions/allquestions">Відредагувати відповідь</Link>
                        </li>
                    </ul>
                )}
            </li>
            <li className="mr-9" >
                <Link href="/yoga">Простір йоги</Link>
            </li>
            {/* <li className="mr-9" >
                <Link href="/LFK">ЛФК</Link>
            </li> */}
            <li className="">
                <Link href="/physical-therapy">Фізична реабілітація</Link>
            </li>
        </ul>
        
    </nav>
  
  )
}

export default NavBarAdminDescktop