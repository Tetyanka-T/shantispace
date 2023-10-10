import Link from "next/link"
import { HiUser } from "react-icons/hi"


const NavBar = () => {
  return (
    <nav className="">
        <ul className="flex flex-row justify-center">
            <li className="mr-10">
                <Link href="/">Logo</Link>
            </li>
            <li className="mr-5">
                <Link href="/blog-admin">Блог</Link>
            </li>
            <li className="mr-5">
                <Link href="/yoga">Йога</Link>
            </li>
            <li className="mr-5">
                <Link href="/LFK">ЛФК</Link>
            </li>
            <li>
                <Link href="/physical-therapy">Фізична терапія</Link>
            </li>
            <li className="ml-auto color-amber-800">
                <button >
                    <HiUser size={24} className="fill-amber-800"/>
                </button>
            
            </li>


        </ul>
    </nav>
  )
}

export default NavBar