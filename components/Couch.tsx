import Image from "next/image"
import Link from "next/link"

const Couch = () => {
  return (
    <div className="md:flex md:justify-center">
      <div>
          <Image src="/couch.jpeg" alt="" width={320} height={300} className="w-full h-auto mx-auto object-cover md:w-[500px]"/>
          <p className="text-md text-center my-2">Дарина Полозок - інструктор з йоги, йогатерапевт та фізтерапевт</p>
          <Link className="mx-3 text-lg lg:ml-10 cursor-pointer" href="/blog">Читати корисні статті <span className="border-b-2 border-amber-950">тут</span></Link>
      </div>
      <div className="mt-4 md:ml-8">
        <p className="text-center text-lg my-2 lg:text-xl lg:ml-4">Розклад йога-практик</p>
        <ul className="mx-3 text-lg my-2 lg:text-xl lg:ml-4">
          <li className="mt-2">Вівторок, четвер - 8.30 та 18.30</li>
          <li className="mt-2">Неділя - 10.00</li>
          <li className="mt-2">
            <p className="font-bold mb-2">Для початківців:</p>
            <p>Понеділок, середа, п`ятниця - 10.00</p>
          </li>
        </ul>
        <Link href="tel:+380977339045" className="block w-[200px] rounded-md border-2 p-1 text-center text-lg border-amber-950 mx-auto mt-3 md:mt-8 lg:text-xl">Записатись на практику</Link>
      </div>
    </div>
  
  )
}

export default Couch