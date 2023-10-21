"use client"

import {useSession, signOut} from "next-auth/react"
import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { HiUser } from "react-icons/hi"
import {ImExit} from "react-icons/im"
import s from "./NavBar.module.css"
import NavBarAdminMobile from "../Admin/NavBarAdmin"
import { useState } from "react"
import {RiMenu3Fill} from "react-icons/ri"
import {AiOutlineClose} from "react-icons/ai"


const NavBar = () => {
    // const {data: session, status} = useSession()

    // const isAuth = status === "authenticated";
    
const isAuth = true;

const isUser = false;
const isAdmin = true;
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
         <button onClick={() => onShowMenu()} className="mr-4 ">
                <RiMenu3Fill size={28} />
        </button>
        <div className={s.logo}>
            <Link href="/">
                <Image src='/logo1.png' alt="logo" width={100} height={70} className={s.logo_img}/>
            </Link>
            </div> 
           
                {!isAuth && 
                  <ul className="flex justify-center items-center font-medium pt-4">
                <li className="mr-8">
                    <Link href="/blog">Блог</Link>
                </li>
                <li className="mr-8">
                <Link href="/blog-user">Блог</Link>
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
            </ul>}
               
            {showMenu &&  (
                <div className="block">
                 <button onClick={() => onShowMenu()} className="absolute top-2 right-2  z-10">
                    <AiOutlineClose size={24} className="fill-amber-800"/>
                </button>
            {isAdmin && <NavBarAdminMobile onClick={onShowMenu}/>}
           
                </div>
               
             )
          
           
                
            }
           
            
          
        
                {/* {isUser &&  <li className="mr-8">
                    <Link href="/blog-user">Блог</Link>
                </li>}
                <li className="mr-8">
                    <Link href="/yoga">Йога</Link>
                </li>
                <li className="mr-8">
                    <Link href="/LFK">ЛФК</Link>
                </li>
                <li>
                    <Link href="/physical-therapy">Фізична терапія</Link>
                </li> */}
                <li className="ml-auto color-amber-800">
                    {/* {!isAuth &&  */}
                    
                    <button>
                        <Link href="/login">
                            <HiUser size={24} className="fill-amber-800"/>
                        </Link>
                    </button>
                    {/* } */}
                  
                    {isAuth &&
                      <div className="flex justify-center">
                        {/* <span>{session?.user.name}</span>  */}
                        {/* <span className="mr-2 text-base font-medium">Привіт, Дарина</span>  */}
                        <button 
                        // onClick={() => signOut()}
                        >
                            {/* <ImExit size={24} className="fill-amber-800"/> */}
                        </button>
                    </div>} 
                </li>
         
    </header>
)
}

export default NavBar