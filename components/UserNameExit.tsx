"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import {ImExit} from "react-icons/im"

const UserNameExit = () => {
 

  return (
    <div>
        <p>{session?.user.name}</p>
        <button>Exit
            <ImExit/>
        </button>
    </div>
  )
}

export default UserNameExit