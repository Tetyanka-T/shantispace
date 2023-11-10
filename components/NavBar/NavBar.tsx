"use client"

import {useSession, signOut} from "next-auth/react"

import Link from "next/link"
import Image from "next/image"
import {GrYoga} from 'react-icons/gr'
import {TbYoga} from 'react-icons/tb'
import s from "./NavBar.module.css"
import NavBarAdminMobile from "../Admin/NavBar/NavBarAdminMobile"
import { useState } from "react"
import {RiMenu3Fill} from "react-icons/ri"
import {AiOutlineClose} from "react-icons/ai"
import NavBarAdminDescktop from "../Admin/NavBar/NavBarAdminDescktop"
import NavBarUserMobile from "../User/NavBar/NavBarUserMobile"
import NavBarUserDesctop from "../User/NavBar/NavBarUserDesctop"
import NavBarNotAuthMobile from "./NavBarNotAuthMobile"


const NavBar = () => {
    const {data: session, status} = useSession()

const isAuth = status === "authenticated";
const isNotAuth = status === "unauthenticated";
const isUser = session?.user.role === "user";
const isAdmin = session?.user.role === "admin";

const [showMenu, setShowMenu] = useState(false)

const onShowMenu = () => {
    setShowMenu(true);
    toggleMenu();
  };
  const toggleMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };
  return (
    <header className="p-3 flex justify-center items-center border-b-2 relative lg:px-8 xl:px-10">
        <button onClick={() => onShowMenu()} className="mr-4 lg:hidden">
            <RiMenu3Fill size={28} />
        </button>
        <div className={s.logo}>
            <Link href="/">
                <Image src='/logo1.png' alt="logo" width={100} height={70} className={s.logo_img} />
            </Link>
        </div> 
           
   
               
            {showMenu &&  (
                <div className="block">
                    <button onClick={() => onShowMenu()} className="absolute top-3 right-2 z-20">
                        <AiOutlineClose size={24} className="fill-amber-950"/>
                    </button>
                   {isAdmin && <NavBarAdminMobile onClick={onShowMenu}/>}
                   {isUser && <NavBarUserMobile onClick={onShowMenu}/>}
                   {isNotAuth && <NavBarNotAuthMobile onClick={onShowMenu}/>}
                </div>
              )  
            }
            {isAdmin && 
            <div className={s.visible}>
                <NavBarAdminDescktop/>
            </div>
            }
              {isUser && 
            <div className={s.visible}>
                <NavBarUserDesctop/>
            </div>
            }
            {isNotAuth && 
            <nav className={s.visible}>
                <ul className="flex justify-center items-center text-lg font-normal tracking-wide leading-6">
                    <li className="mr-8">
                        <Link href="/">Головна</Link>
                    </li>
                    <li className="mr-8">
                        <Link href="/blog">Блог</Link>
                    </li>
                    <li className="mr-8">
                        <Link href="/yoga">Простір йоги</Link>
                    </li>
                    <li>
                        <Link href="/physical-therapy">Фізична реабілітація</Link>
                    </li>
                </ul>
            </nav>
               }
           
    
                <div className="ml-auto">
                    {isNotAuth && 
                    
                    <button>
                        <Link href="/login">
                            <GrYoga size={24} className="fill-amber-950"/>
                            <span className="text-xs">Увійти</span>
                        </Link>
                    </button> 
                    }
                  
                    {isAuth &&
                      <div className="flex justify-center">
                        <span className="mr-2 text-base font-medium">Привіт, {session?.user?.name}</span> 
                        <button 
                        onClick={() => signOut()}
                        >
                            <TbYoga size={24} className="fill-amber-950"/>
                            <span className="text-xs">Вихід</span>
                        </button>
                    </div>} 
                </div>
         
    </header>
)
}

export default NavBar