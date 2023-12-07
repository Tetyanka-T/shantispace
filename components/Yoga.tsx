import Image from "next/image"
import s from "@/app/styles/common.module.css"
import JoinInButton from "./JoinInButton"

const Yoga = () => {
  return (
    <section className={s.yoga_hero}>
      <div className={s.yoga_hero_container}>
        <Image src="/hero.jpg" alt="" width={330} height={300}/>
      </div>
      <div className="absolute top-20 left-20 leading-7 text-2xl font-black tracking-wider min-[400px]:top-32 min-[400px]:left-44">
        <h1>Простір йоги</h1>
        <a href="tel:+380977339045" className="block w-[150px] rounded-md border-2 p-1 text-center text-lg border-amber-950 m-3">Записатись на практику</a>

      </div>
      <p className="text-lg my-3 mx-4">Йога допомагає формуванню душевної рівноваги та впливає на душевний стан людини.</p>
      <div className={s.yoga_img_container}>
        <Image src="/darina.jpg" alt="Дарина Полозок в асані" width={320} height={300}/>
      </div>
      <JoinInButton/>
      <p className="text-md my-3 mx-3">Шляхом застосування різних йогічних практик, медитації, пранаям, цвяхостояння - людина здатна скорегувати свої психо-емоційні стани, зняти напруження, подолати депресію, здобути гармонію та баланс стану збудження-розслаблення.</p>
      <Image src="/practica.jpg" alt="групова практика" width={320} height={300}/>
      <Image src="/practica2.jpg" alt="групова практика" width={320} height={300}/>
      <Image src="/practica3.jpg" alt="групова практика" width={320} height={300}/>
      
      
    </section>
  )
}

export default Yoga