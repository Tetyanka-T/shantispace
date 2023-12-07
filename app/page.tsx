import Image from "next/image"
import s from "@/app/styles/common.module.css"
export default function Home() {

  return (
    <section className="h-full">
      <div className={s.home_hero}>
        <Image src="/hero.jpg" alt="" width={320} height={320}/>

      </div>
      
      <div>
        <h1>Shanti_Space</h1>
        <p>Простір здоров&apos;я</p>
        <p>Віднайди гармонію!</p>
      </div>
      
    </section>
  )
}
