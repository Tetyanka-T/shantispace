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

    console.log(session)
    console.log(status)

const isAuth = status === "authenticated";
    


const isUser = status === "authenticated";
const isAdmin = false;
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
                <Image src='/logo1.png' alt="logo" width={100} height={70} className={s.logo_img}/>
            </Link>
        </div> 
           
   
               
            {showMenu &&  (
                <div className="block">
                    <button onClick={() => onShowMenu()} className="absolute top-3 right-2 z-20">
                        <AiOutlineClose size={24} className="fill-amber-900"/>
                    </button>
                   {isAdmin && <NavBarAdminMobile onClick={onShowMenu}/>}
                   {isUser && <NavBarUserMobile onClick={onShowMenu}/>}
                   {!isAuth && <NavBarNotAuthMobile onClick={onShowMenu}/>}
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
            {!isAuth && 
            <nav className={s.visible}>
                <ul className="flex justify-center items-center text-lg font-normal tracking-wide leading-6">
                    <li className="mr-8">
                        <Link href="/">Головна</Link>
                    </li>
                    <li className="mr-8">
                        <Link href="/blog">Блог</Link>
                    </li>
                    <li className="mr-8">
                        <Link href="/yoga">Йога</Link>
                    </li>
                    <li className="mr-8">
                        <Link href="/LFK">ЛФК</Link>
                    </li>
                    <li>
                        <Link href="/physical-therapy">Фізична терапія</Link>
                    </li>
                </ul>
            </nav>
               }
           
    
                <div className="ml-auto">
                    {!isAuth && 
                    
                    <button>
                        <Link href="/login">
                            <GrYoga size={24} className="fill-amber-900"/>
                            <span className="text-xs">Увійти</span>
                            {/* <HiUser size={24} className="fill-amber-800"/> */}
                        </Link>
                    </button> 
                    }
                  
                    {isAuth &&
                      <div className="flex justify-center">
                        <span className="mr-2 text-base font-medium">Привіт, {session?.user.name}</span> 
                        <button 
                        onClick={() => signOut()}
                        >
                            <TbYoga size={24} className="fill-amber-900"/>
                            <span className="text-xs">Вихід</span>
                        </button>
                    </div>} 
                </div>
         
    </header>
)
}

export default NavBar