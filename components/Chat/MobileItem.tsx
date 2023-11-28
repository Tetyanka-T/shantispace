"use client"

import Link from "next/link"
import clsx from "clsx"

interface MobileItemProps {
    lable: string,
    icon: any,
    href: string,
    active?: boolean
}


const MobileItem: React.FC<MobileItemProps> = ({lable, href, icon: Icon, active}) => {
  return (
    <li key={lable}>
        <Link href={href} className={clsx(`
        group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-100
        `, active && "bg-gray-100 text-black" )}>
            <Icon className="h-6 w-6"/>
            <span>{lable}</span>
        </Link>
    </li>
  )
}

export default MobileItem