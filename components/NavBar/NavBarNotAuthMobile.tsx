"use client"

import Link from "next/link"


const NavBarNotAuthMobile = ({ onClick }: {onClick: Function}) => {
  return (
    <nav className="absolute bg-slate-100 w-full h-screen top-0 left-0 text-lg tracking-wide leading-6 z-40 ease-in-out duration-300">
      
    <ul className="px-8 py-20">
        <li className="mb-2 border-b-2 border-amber-950 py-3">
            <Link href="/" onClick={() => onClick()}>Головна</Link>
        </li>
        <li className="mb-2 border-b-2 border-amber-950 py-3">
            <Link href="/blog" onClick={() => onClick()}>Блог</Link>
        </li>
        <li className="mb-2 border-b-2 border-amber-950 py-3" onClick={() => onClick()}>
            <Link href="/yoga">Простір йоги</Link>
        </li>
      
        <li className="border-b-2 border-amber-950 py-3" onClick={() => onClick()}>
            <Link href="/physical-therapy">Фізична реабілітація</Link>
        </li>
        <li className="mb-2 border-b-2 border-amber-950 py-3" onClick={() => onClick()}>
            <Link href="/contacts">Контакти</Link>
        </li>
    </ul>
    
</nav>
  )
}

export default NavBarNotAuthMobile