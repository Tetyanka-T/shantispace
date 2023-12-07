"use client"

import { User } from "@prisma/client"
import UserBox from "./UserBox"


interface UserListProps {
    items: User[]
}
const UserList: React.FC<UserListProps> = ({items}) => {
  return (
    <aside className="inset-y-0 lg:pb-0 lg:w-80 lg:block overflow-y-auto border-r border-gray-200 block w-full min-h-screen">
       <div className="px-5">
        <div className="flex-col">
            <div className="text-2xl font-bold text-neutral-800 py-4">
                Учасники Shanti_Space
            </div>
        </div>
        {items.map(item => (
            <UserBox key={item.id} data={item}/>
        ))}

       </div>
    </aside>
  )
}

export default UserList