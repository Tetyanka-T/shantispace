"use client"

import Link from "next/link"


const NavBarNotAuthMobile = ({ onClick }: {onClick: Function}) => {
  return (
    <nav className="absolute bg-slate-100 w-full top-0 left-0 text-lg font-normal tracking-wide leading-6 translate-x-50 translate-y-50 z-40">
      
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
    </ul>
    
</nav>
  )
}

export default NavBarNotAuthMobile