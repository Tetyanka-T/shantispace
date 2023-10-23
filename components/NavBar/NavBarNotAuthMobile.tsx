"use client"

import Link from "next/link"


const NavBarNotAuthMobile = ({ onClick }: {onClick: Function}) => {
  return (
    <nav className="absolute bg-slate-100 w-full top-0 left-0 text-lg font-normal tracking-wide leading-6 translate-x-50 translate-y-50">
      
    <ul className="px-8 py-20">
        <li className="mb-2 border-b-2 border-amber-600 py-3">
            <div className="flex items-center">
            <Link href="/blog" onClick={() => onClick()}>Блог</Link>
            </div>
        </li>
        <li className="mb-2 border-b-2 border-amber-600 py-3" onClick={() => onClick()}>
            <Link href="/yoga">Йога</Link>
        </li>
        <li className="mb-2 border-b-2 border-amber-600 py-3" onClick={() => onClick()}>
            <Link href="/LFK">ЛФК</Link>
        </li>
        <li className="border-b-2 border-amber-600 py-3" onClick={() => onClick()}>
            <Link href="/physical-therapy">Фізична терапія</Link>
        </li>
    </ul>
    
</nav>
  )
}

export default NavBarNotAuthMobile