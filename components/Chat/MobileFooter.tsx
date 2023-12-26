"use client"

import useConversation from "../../hooks/useConversation";
import useRoutes from "../../hooks/useRoutes"
import MobileItem from "./MobileItem";

const MobileFooter = () => {
    const routes = useRoutes();
    const {isOpen} = useConversation();
    if (isOpen) {
        return null
    }


  return (
    <div className="absolute justify-between w-full -ml-[18px] -bottom-[109px] z-40 min-[400px]:-bottom-[128px] flex items-center bg-white border-t-[1px] lg:hidden">
        {routes.map((route) => (
            <MobileItem key={route.href} href={route.href} active={route.active} icon={route.icon} lable={route.lable}/>
        ))}
    </div>
  )
}

export default MobileFooter