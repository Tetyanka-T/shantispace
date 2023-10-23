"use client"

import {useSession, signOut} from "next-auth/react"
import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { HiUser } from "react-icons/hi"
import {GrYoga} from 'react-icons/gr'
import {TbYoga} from 'react-icons/tb'
import {ImExit} from "react-icons/im"
import s from "./NavBar.module.css"
import NavBarAdminMobile from "../Admin/NavBarAdminMobile"
import { useState } from "react"
import {RiMenu3Fill} from "react-icons/ri"
import {AiOutlineClose} from "react-icons/ai"
import NavBarAdminDescktop from "../Admin/NavBarAdminDescktop"
import NavBarUserMobile from "../User/NavBarUserMobile"
import NavBarUserDesctop from "../User/NavBarUserDesctop"
import NavBarNotAuthMobile from "./NavBarNotAuthMobile"


const NavBar = () => {
    // const {data: session, status} = useSession()

    // const isAuth = status === "authenticated";
    
const isAuth = true;

const isUser = true;
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
    <header className="p-2 flex justify-center items-center border-b-2 relative">
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
                    <button onClick={() => onShowMenu()} className="absolute top-3 right-2 z-10">
                        <AiOutlineClose size={24} className="fill-amber-800"/>
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
           
    
                <li className="ml-auto">
                    {!isAuth && 
                    
                    <button>
                        <Link href="/login">
                            <GrYoga size={24} className="fill-amber-800"/>
                            {/* <HiUser size={24} className="fill-amber-800"/> */}
                        </Link>
                    </button> 
                    }
                  
                    {isAuth &&
                      <div className="flex justify-center">
                        {/* <span>{session?.user.name}</span>  */}
                        <span className="mr-2 text-base font-medium">Привіт, Дарина</span> 
                        <button 
                        // onClick={() => signOut()}
                        >
                            <TbYoga size={24}/>
                            <span className="text-xs">Вихід</span>
                        </button>
                    </div>} 
                </li>
         
    </header>
)
}

export default NavBar