"use client"

import clsx from "clsx";

import Link from "next/link";

interface DesktopItemProps {
  lable: string,
  icon: any,
  href: string,
  active?: boolean
}

const DesctopItem: React.FC<DesktopItemProps> = ({lable, icon: Icon, href, active}) => {
  return (
    <li>
      <Link href={href} className={clsx(`w-[55px]
      group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-500 hover:text-black hover:bg-gray-100
      `, active && "bg-gray-100 text-black" )}>
        <Icon className="h-6 shrink-0" />
        <span className="sr-only">{lable}</span>
      </Link>
    </li>
  )
}

export default DesctopItem