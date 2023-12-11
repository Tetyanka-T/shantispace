import Image from "next/image"
import Link from "next/link"
import s from "@/app/styles/common.module.css"
const Couch = () => {
  return (
    <div className="mx-3 md:grid md:grid-cols-2">
      <div>
        <div className={s.couch_container_img}>
          <Image src="/couch.jpeg" alt="" width={320} height={300}/>
        </div>
        <p className="text-md my-2 lg:text-lg lg:ml-10">Дарина Полозок - інструктор з йоги, йогатерапевт та фізтерапевт</p>
      </div>
      <div className="md:ml-8">
      <p className="text-center text-lg my-2 lg:text-xl lg:ml-10">Розклад йога-практик</p>
      <ul className="text-lg my-2 lg:text-xl lg:ml-10">
        <li className="mt-2">Вівторок, четвер - 8.30 та 18.30</li>
        <li className="mt-2">Неділя - 10.00</li>
        <li className="mt-2">
            <p className="font-bold mb-2">Для початківців:</p>
            <p>Середа, п`ятниця - 10.00</p>
        </li>
      </ul>
      <Link href="tel:+380977339045" className="block w-[200px] rounded-md border-2 p-1 text-center text-lg border-amber-950 mx-auto mt-3 md:mt-8 lg:text-xl">Записатись на практику</Link>

      </div>
    
    </div>
  
  )
}

export default Couch