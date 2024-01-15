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
           <div className={s.container_text__yoga}>
            <p className="text-lg mb-4 lg:text-xl 2xl:text-2xl">Shanti_space це місце де кожен може отримати:</p>
            <ul className="text-lg lg:text-xl 2xl:text-2xl">
              <li className="flex items-center mt-2">
                <Image src="/onarm.png" alt="" width={50} height={50}/>
                <p>кваліфіковану допомогу у здобутті фізичної та душевної гармонії,</p>
              </li>
              <li className="flex items-center mt-2">
                <Image src="/gode.png" alt="" width={50} height={50}/>
                <p>емоційну підтримку,</p>
              </li>
              <li className="flex items-center mt-2">
                <Image src="/profile.png" alt="" width={50} height={50}/>
                <p>дієві інструменти та техніки для гармонійного фізичного розвитку,</p></li>
              <li className="flex items-center mt-2">
                <Image src="/padakhasana.png" alt="" width={50} height={50}/>
                <p>відновлення  фізичного стану, корегування окремих обмежень (особливостей).</p>
              </li>
            </ul>
           </div>
           <div className={s.yoga_img_container}>
              <Image src="/support.jpg" height={300} width={320} alt={""}/>
            </div>
           
      
 
      
    </section>
  )
}
