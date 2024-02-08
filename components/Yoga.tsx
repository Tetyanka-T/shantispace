
import Image from "next/image"
import Link from "next/link"
import JoinInButton from "./JoinInButton"
import s from "@/app/styles/common.module.css"



const Yoga = () => {
  return (
    <section className="-mx-[8px]">
      <div className={s.yoga_hero}>
        <div className="text-center leading-7 text-2xl font-black tracking-wider">
          <h1 className="text-3xl md:text-[36px] lg:text-[48px]">Простір йоги</h1>
          <Link href="tel:+380977339045" className="block w-[150px] rounded-md border-2 p-1 text-center text-lg border-amber-950 mx-auto mt-[40px] lg:w-[200px] lg:text-xl" aria-label="посилання на запис на практику йоги">Записатись на практику</Link>
        </div>
      </div>
      <div className="flex items-center justify-center my-3">
        <Image src="/stand.png" alt="малюнок асани" width={70} height={60}/>
        <h2 className="text-lg lg:text-2xl"><span className="font-bold">Йога</span> допомагає формуванню душевної рівноваги та впливає на душевний стан людини.</h2>
      </div>
      <JoinInButton/>
      <div className={s.yoga_img_container}>
        <Image src="/darina.jpg" alt="Дарина Полозок в асані" width={320} height={300}/>
        <Image src="/darina2.jpg" alt="Дарина Полозок в асані" width={320} height={300}/>
        <Image src="/darina4.jpg" alt="Дарина Полозок в асані" width={320} height={300}/>
        <Image src="/darina3.jpg" alt="Дарина Полозок в асані" width={320} height={300}/>
      </div>
      
      <div className={s.container_text__yoga}>
        <h3 className="text-lg mb-4 lg:text-xl 2xl:text-2xl">Шляхом застосування різних йогічних практик, медитації, пранаям, цвяхостояння - людина:</h3>
        <ul className="text-lg lg:text-xl 2xl:text-2xl">
          <li className="flex items-center mt-2">
            <Image src="/onarm.png" alt="малюнок асани" width={50} height={50}/>
            <p className="ml-2">отримує знання про своє тіло та його стани,</p>
          </li>
          <li className="flex items-center mt-2">
            <Image src="/profile.png" alt="малюнок асани" width={50} height={50}/>
            <p className="ml-2">отримує знання про техніки та методики впливу на покращення свого фізичного здоров&apos;я,</p>
          </li>
          <li className="flex items-center mt-2">
            <Image src="/padakhasana.png" alt="малюнок асани" width={50} height={50}/>
            <p className="ml-2">здатна скорегувати свої психо-емоційні стани, подолати депресію,</p>
          </li>
          <li className="flex items-center mt-2">
            <Image src="/gode.png" alt="малюнок асани" width={50} height={50}/>
            <p className="ml-2">зняти напруження та блоки в тілі,</p>
          </li>
          <li className="flex items-center mt-2">
            <Image src="/me.png" alt="малюнок асани" width={50} height={50}/>
            <p className="ml-2">здобути гармонію та баланс стану збудження-розслаблення.</p>
          </li>
        </ul>
      </div>
      <div className="mx-auto md:grid md:grid-cols-2 md:gap-1 lg:gap-2">
        <Image src="/practica.jpg" alt="групова практика" width={320} height={300} className="w-full h-auto object-contain"/>
        <Image src="/practica2.jpg" alt="групова практика" width={320} height={300} className="w-full h-auto object-contain"/>
        <Image src="/practica3.jpg" alt="групова практика" width={320} height={300} className="w-full h-auto object-contain"/>
        <Image src="/practica4.jpg" alt="групова практика" width={320} height={300} className="w-full h-auto object-contain"/>
      </div>
      <div className={s.container_text__yoga}>
        <h2 className="text-lg mb-4 lg:text-xl 2xl:text-2xl">Shanti_Space - це місце де кожен отимає кваліфіковану допомогу:</h2>
        <ul className="text-lg  lg:text-xl 2xl:text-2xl">
          <li className="flex items-center mt-2">
            <Image src="/lying-twist.png" alt="малюнок асани" width={50} height={50}/>
            <p className="ml-2">у здобутті гармонії фізичної та душевної,</p>
          </li>
          <li className="flex items-center mt-2">
            <Image src="/mukha.png" alt="малюнок асани"width={50} height={50}/>
            <p className="ml-2">відновлення фізичного стану,</p>
          </li>
          <li className="flex items-center mt-2">
            <Image src="/gode.png" alt="малюнок асани" width={50} height={50}/>
            <p className="ml-2">отримати дієві інструменти та техніки для гармонійного фізичного розвитку,</p>
          </li>
          <li className="flex items-center mt-2">
            <Image src="/double3.png" alt="малюнок асани" width={50} height={50}/>
            <p className="ml-2">отримати емоційну підтримку,</p>
          </li>
          <li className="flex items-center mt-2">
            <Image src="/onarm.png" alt="малюнок асани" width={50} height={50}/>
            <p className="ml-2">корегування окремих обмежень (особливостей).</p>
          </li>
        </ul>
      </div>
     <div className="2xl:mx-[340px]">
     <div className="md:flex">
        <div>
          <Image src="/couch.jpeg" alt="Дарина Полозок - інструктор з йоги, йогатерапевт та фізтерапевт" width={320} height={300} className="w-full h-auto object-cover md:w-[490px]"/>
          <h3 className="text-md text-center my-2">Дарина Полозок - інструктор з йоги, йогатерапевт та фізтерапевт</h3>
          <Link className="text-lg lg:ml-10 cursor-pointer" href="/blog">Читати корисні статті <span className="border-b-2 border-amber-950">тут</span></Link>
        </div>
        <div className="mt-4 md:ml-8">
          <p className="text-center text-lg my-2 lg:text-xl lg:ml-4">Розклад йога-практик:</p>
          <ul className="mx-3 text-lg my-2 lg:text-xl lg:ml-4">
            <li className="mt-2">Вівторок, четвер - 8.30 та 18.30</li>
            <li className="mt-2">Субота - 11.30</li>
            <li className="mt-2">
              <p className="font-bold mb-2">Для початківців:</p>
              <p>Понеділок, середа, п`ятниця - 10.00</p>
            </li>
          </ul>
         <Link href="tel:+380977339045" className="block w-[200px] rounded-md border-2 p-1 text-center text-lg border-amber-950 mx-auto mt-3 md:mt-8 lg:text-xl" aria-label="посилання для запису на практику до Дарини Полозок">Записатись на практику</Link>
        </div>
      </div>
      <div className="mt-8 md:flex">
        <div>
          <Image src="/svitlana.jpg" width={320} height={300} alt="Світлана Погребняк - інструктор з йоги та оздоровчої фізкультури" className="w-full h-auto object-cover md:w-[490px]"/>
          <h3 className="text-md text-center my-2">Світлана Погребняк - інструктор з йоги та оздоровчої фізкультури</h3>
        </div>  
        <div className="md:ml-8 mt-4">
          <p className="text-center text-lg my-2 lg:text-xl lg:ml-4">Розклад йога-практик:</p>
          <p className="text-lg my-2 ml-4 lg:text-xl lg:ml-4">Понеділок, середа, п`ятниця - 17.00</p>
          <Link href="tel:+380971250101" className="block w-[200px] rounded-md border-2 p-1 text-center text-lg border-amber-950 mx-auto mt-3 md:mt-8 lg:text-xl" aria-label="посилання для запису на практику до Світлани Погребняк">Записатись на практику</Link>
        </div>
      </div>
     </div>
      
    </section>
  )
}

export default Yoga