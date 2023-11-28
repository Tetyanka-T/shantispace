"use client"
import { useRouter } from "next/navigation"

import {IoMdArrowRoundBack} from "react-icons/io"

const GoBackButton = () => {
    const router = useRouter()
  return (
  
    <button onClick={() => router.back()} className="p-2 shadow-md shadow-neutral-200 rounded-md ml-4 md:ml-6">
        <IoMdArrowRoundBack size={24} className="fill-amber-950 "/>
    </button>
 
    
  )
}

export default GoBackButton