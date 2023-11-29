'use client'

import {useState} from "react"
import useRoutes from "@/hooks/useRoutes"
import DesctopItem from "./DesctopItem";
import { User } from "@prisma/client";
import Avatar from "./Avatar";
import SettingsModal from "./SettingsModal";

interface DesctopSidebarProps {
    currentUser: User

}

const DesctopSidebar: React.FC<DesctopSidebarProps> = ({currentUser}) => {
    const routes = useRoutes();
    const [isOpen, setIsOpen] = useState(false)



  return (
    <>
    <SettingsModal currentUser={currentUser} isOpen={isOpen} onClose={() => setIsOpen(false)}/>
     <div className="hidden lg:absolute lg:h-full lg:inset-y-0 lg:left-0 lg:top-[87px] lg:z-40 lg:w-20 xl:px-6 lg:bg-white lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between">
        <nav className="my-4 flex flex-col justify-between">
            <ul role="list" className="flex flex-col space-y-1">
                {routes.map((item) => (
                    <DesctopItem key={item.lable} href={item.href} lable={item.lable} icon={item.icon} active={item.active}/>
                ))

                }
            </ul>
        </nav>
        <nav className="mt-4 flex flex-col justify-between items-center">
            <div onClick={() => setIsOpen(true)} className="cursor-pointer hover:opacity-75 transition">
                <Avatar user={currentUser}/>
            </div>

        </nav>
    </div>
    </>
   
  )
}

export default DesctopSidebar