import Image from "next/image"
import Link from "next/link"
import s from "@/app/styles/common.module.css"

export default function Home() {

  return (
    <section className="h-full -mx-[8px]">
           <div className={s.home_hero}>
              <div className="text-center leading-7 text-2xl font-black tracking-wider">
                <h1 className="text-2xl font-bold leading-5 md:text-[36px] lg:text-[40px] 2xl:text-[45px]">Простір здоров&apos;я</h1>
                <p className="text-xl font-semibold leading-5 mt-3 md:text-[26px] md:mt-5 lg:text-[38px] lg:mt-8 2xl:mt-12">Віднайди гармонію!</p>
              </div>
           </div>
      
 
      
    </section>
  )
}
