import s from "@/app/styles/common.module.css"
import Link from "next/link"

const PhysicalPage = () => {
  return (
    <section className="h-full -mx-[8px]">
    <div className={s.physical_hero}>
    <div className="text-center leading-7 text-2xl font-black tracking-wider">
            <h1 className="text-3xl text-amber-950 md:text-[36px] lg:text-[48px]">Фізична реабілітація</h1>
            <Link href="tel:+380977339045" className="block w-[150px] rounded-md border-2 p-2 text-center text-lg border-amber-950 mx-auto mt-[20px] lg:w-[200px] lg:text-xl xl:mt-[40px]">Записатись</Link>
          </div>
    </div>



</section>
  )
}

export default PhysicalPage