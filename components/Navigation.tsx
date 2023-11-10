"use client"

import Link from "next/link"
import {AiOutlineHome} from "react-icons/ai"
import {GrFormNext} from "react-icons/gr"


const Navigation = ({section}: {section: string | any}) => {
    
  return (
    <ul className="flex items-center p-4">
       <li className="mr-2">
        <Link href="/">
          <AiOutlineHome size={20} className="fill-amber-950 "/> 
        </Link>
          
       </li>
        <li className="mr-2">
            <GrFormNext size={16} className="fill-amber-950 "/>
        </li>
        <li>{section}</li>
    </ul>
  )
}

export default Navigation