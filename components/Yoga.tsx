import Image from "next/image"
import s from "@/app/styles/common.module.css"
import JoinInButton from "./JoinInButton"
import Couch from "./Couch"
import Link from "next/link"

const Yoga = () => {
  return (
    <section className="-mx-[10px]">
      <div className={s.yoga_hero}>
          <div className="text-center leading-7 text-2xl font-black tracking-wider">
            <h1 className="text-3xl md:text-[36px] lg:text-[48px]">Простір йоги</h1>
            <Link href="tel:+380977339045" className="block w-[150px] rounded-md border-2 p-1 text-center text-lg border-amber-950 mx-auto mt-[40px] lg:w-[200px] lg:text-xl">Записатись на практику</Link>
          </div>
      </div>
      <p className="text-lg my-4 mx-3 md:mx-6 lg:text-xl lg:ml-10">Шляхом застосування різних йогічних практик, медитації, пранаям, цвяхостояння - людина:</p>
      <ul className="text-lg my-4 mx-3 md:mx-6 lg:text-xl lg:ml-10">
        <li className="flex items-center mt-2">
          <Image src="/onarm.png" alt="" width={50} height={50}/>
          <p className="ml-2">отримує знання про своє тіло та його стани</p>
        </li>
        <li className="flex items-center mt-2">
          <Image src="/profile.png" alt="" width={50} height={50}/>
          <p className="ml-2">отримує знання про техніки та методики впливу на покращення свого фізичного здоров&apos;я</p>
        </li>
        <li className="flex items-center mt-2">
          <Image src="/padakhasana.png" alt="" width={50} height={50}/>
          <p className="ml-2">здатна скорегувати свої психо-емоційні стани, подолати депресію</p>
        </li>
        <li className="flex items-center mt-2">
          <Image src="/gode.png" alt="" width={50} height={50}/>
          <p className="ml-2">зняти напруження та блоки в тілі</p>
        </li>
        <li className="flex items-center mt-2">
          <Image src="/me.png" alt="" width={50} height={50}/>
          <p className="ml-2">здобути гармонію та баланс стану збудження-розслаблення</p>
        </li>
      </ul>
      <div className={s.yoga_img_container}>
        <Image src="/darina.jpg" alt="Дарина Полозок в асані" width={320} height={300}/>
        <Image src="/darina2.jpg" alt="Дарина Полозок в асані" width={320} height={300}/>
        <Image src="/darina3.jpg" alt="Дарина Полозок в асані" width={320} height={300}/>
        <Image src="/darina4.jpg" alt="Дарина Полозок в асані" width={320} height={300}/>
      </div>
      
      <div className="flex items-center justify-center my-3">
        <Image src="/stand.png" alt="" width={70} height={60}/>
        <p className="text-lg lg:text-2xl">Йога допомагає формуванню душевної рівноваги та впливає на душевний стан людини.</p>
      </div>
      <JoinInButton/>
      <div className="mx-auto md:grid md:grid-cols-2 md:gap-1">
        <Image src="/practica.jpg" alt="групова практика" width={320} height={300} className="w-full"/>
        <Image src="/practica2.jpg" alt="групова практика" width={320} height={300} className="w-full"/>
        <Image src="/practica3.jpg" alt="групова практика" width={320} height={300} className="w-full"/>
        <Image src="/practica4.jpg" alt="групова практика" width={320} height={300} className="w-full"/>
      </div>
      <p className="text-lg my-4 mx-3 md:mx-6 lg:text-xl lg:ml-10">Shanti_Space - це місце де кожен отимає кваліфіковану допомогу</p>
      <ul className="text-lg my-4 mx-3 md:mx-6 lg:text-xl lg:ml-10">
        <li className="flex items-center mt-2">
          <Image src="/lying-twist.png" alt="" width={50} height={50}/>
          <p className="ml-2">у здобутті гармонії фізичної та душевної</p>
        </li>
        <li className="flex items-center mt-2">
          <Image src="/mukha.png" alt="" width={50} height={50}/>
          <p className="ml-2">відновлення фізичного стану</p>
        </li>
        <li className="flex items-center mt-2">
          <Image src="/gode.png" alt="" width={50} height={50}/>
          <p className="ml-2">отримати дієві інструменти та техніки для гармонійного фізичного розвитку</p>
        </li>
        <li className="flex items-center mt-2">
          <Image src="/double3.png" alt="" width={50} height={50}/>
          <p className="ml-2">отримати емоційну підтримку</p>
        </li>
        <li className="flex items-center mt-2">
          <Image src="/onarm.png" alt="" width={50} height={50}/>
          <p className="ml-2">корегування окремих обмежень (особливостей)</p>
        </li>
      </ul>
      <Couch/>
     
     
      
      
    </section>
  )
}

export default Yoga