import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import JoinIn from "@/components/JoinIn"
import s from "@/app/styles/common.module.css"



export const metadata: Metadata = {
  title: 'ShantiSpace йога Кривий Ріг',
  description: "Простір здоров'я та душевної рівноваги, індивідуальні та групові заняття з йоги, фізичної реабілітації, оздоровчої гімнастики (ЛФК) Кривий Ріг, оренда приміщення, погодинна оренда",
  keywords: 'оренда приміщення, погодинна оренда для заходів, трансформаційні ігри',
 
}
const RentPage = () => {
  return (
  <section className="h-full -mx-[8px]">
    <div className={s.rent_hero}>
      <div className="text-center leading-7 text-2xl font-black tracking-wider">
        <h1 className="animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out text-3xl text-amber-950 md:text-[36px] lg:text-[48px]">Погодинна оренда залу</h1>
        <Link href="tel:+380971250101" className="animate-fade-left animate-once animate-duration-[2000ms] animate-ease-in-out block w-[250px] rounded-md border-2 p-4 text-center text-xl border-amber-950 mx-auto mt-[40px] lg:w-[200px] lg:text-xl xl:mt-[40px] bg-stone-300/50" aria-label="посилання на телефон для запису на фізичну реабілітацію">Забронювати зал</Link>
      </div>
    </div>
    <div className="flex items-center justify-center my-10">
      <Image src="/stand.png" alt="малюнок асани" width={70} height={60}/>
      <h2 className="text-lg lg:text-2xl"><span className="font-bold">Shanti Space</span> — це місце, де шум міста залишається за дверима, а на перший план виходить головне: ваша справа та ваш комфорт. Ми створили камерний простір, де ви можете повністю зосередитися на своїй меті, не відволікаючись на дрібниці.</h2>
    </div>
    <h3 className="text-center text-lg lg:text-2xl">Ми пропонуємо</h3>
    <ul className="text-lg  lg:text-xl 2xl:text-2xl">
      <li className="flex items-center mt-2">
        <Image src="/double2.png" alt="малюнок асани" width={50} height={50}/>
        <p className="ml-2">безпечне покриття для тілесних практик, не ковзає та добре амортизує;</p>
      </li>
      <li className="flex items-center mt-2">
        <Image src="/mukha.png" alt="малюнок асани"width={50} height={50}/>
        <p className="ml-2">вільний простір без зайвих меблів;</p>
      </li>
      <li className="flex items-center mt-2">
        <Image src="/double.png" alt="малюнок асани" width={50} height={50}/>
        <p className="ml-2">комфортне розміщення до 12 людей.</p>
      </li>
    </ul>
    <div className="my-8 2xl:mx-60 md:grid md:grid-cols-2 md:gap-1 lg:gap-2">
      <Image src="/rent.jpg" alt="фото залу" width={320} height={300} className="w-full h-auto object-contain"/>
      <Image src="/rent2.jpg" alt="фото залу" width={320} height={300} className="w-full h-auto object-contain"/>
      <Image src="/rent3.jpg" alt="фото залу" width={320} height={300} className="w-full h-auto object-contain"/>
      <Image src="/rent4.jpg" alt="фото залу" width={320} height={300} className="w-full h-auto object-contain"/>
    </div>
    <h3 className="text-lg text-center mx-3 my-4 lg:text-xl 2xl:text-2xl">Функціональний простір для різних форматів:</h3>
    <ul className="text-lg  lg:text-xl 2xl:text-2xl">
      <li className="flex items-center mt-2">
          <Image src="/double.png" alt="малюнок асани" width={50} height={50}/>
          <p className="ml-2">Йога, пілатес, стретчинг, функціональні та ігрові тренування, дитячі заняття</p>
      </li>
      <li className="flex items-center mt-2">
          <Image src="/mukha.png" alt="малюнок асани"width={50} height={50}/>
          <p className="ml-2">Міні-лекції, майстер-класи, репетиції.</p>
      </li>
      <li className="flex items-center mt-2">
          <Image src="/gode.png" alt="малюнок асани" width={50} height={50}/>
          <p className="ml-2">Трансформаційні ігри, психологічні групи.</p>
      </li>
    </ul>
    <h3 className="text-lg text-center mx-3 my-4 lg:text-xl 2xl:text-2xl">Переваги оренди залу в Shanti Space:</h3>
      <ul className="mx-3 mb-3 text-lg lg:text-xl 2xl:text-2xl 2xl:mx-[300px]">
         <li className="flex items-center mt-2">
           <Image src="/onarm.png" alt="малюнок асани" width={40} height={50}/>
           <p className="ml-3"><span className='font-bold'>Гнучкий формат:</span> одна локація для різних цілей — від тренування до гри.</p>
        </li>
        <li className="flex items-center mt-2">
          <Image src="/me.png" alt="малюнок асани" width={40} height={50}/>
          <p className="ml-3"><span className='font-bold'>Чистота та безпека:</span> м’яка підлога, регулярне прибирання покриття.</p>
        </li>
        <li className="flex items-center mt-2">
          <Image src="/lying-twist.png" alt="малюнок асани" width={50} height={50}/>
          <p className="ml-2"><span className='font-bold'>Камерність:</span> немає натовпу та випадкових відвідувачів.</p>
        </li>
        <li className="flex items-center mt-2">
          <Image src="/profile.png" alt="малюнок асани" width={50} height={50}/>
          <p className="ml-2"><span className='font-bold'>Простий процес бронювання:</span> домовленість у кілька повідомлень.</p>
        </li>
        <li className="flex items-center mt-2">
          <Image src="/padakhasana.png" alt="малюнок асани" width={50} height={50}/>
          <p className="ml-2"><span className='font-bold'>Чай-кава-зона:</span> місце для перерв і невимушеного спілкування.</p>
        </li>
        <li className="flex items-center mt-2">
          <Image src="/twist.png" alt="малюнок асани" width={50} height={50}/>
          <p className="ml-2"><span className='font-bold'>Зручна локація:</span> легко дістатися громадським транспортом.</p>
        </li>
      </ul>
      <div className="my-6 2xl:mx-60 md:grid md:grid-cols-2 md:gap-1 lg:gap-2">
        <Image src="/hero_rent.jpg" alt="фото залу" width={320} height={300} className="w-full h-auto object-contain"/>
        <Image src="/rent5.jpg" alt="фото залу" width={320} height={300} className="w-full h-auto object-contain"/>
        <Image src="/rent6.jpg" alt="фото залу" width={320} height={300} className="w-full h-auto object-contain"/>
        <Image src="/rent7.jpg" alt="фото залу" width={320} height={300} className="w-full h-auto object-contain"/>
    </div>
      <h3 className="text-lg text-center mx-3 my-4 lg:text-xl 2xl:text-2xl 2xl:mx-[60px]">Правила простору:</h3>
      <ul className="mx-3 mb-3 text-lg lg:text-xl 2xl:text-2xl 2xl:mx-[60px]">
        <li className="flex items-center mt-2">
          <p>- взуття залишаємо при вході;</p>
        </li>
        <li className="flex items-center mt-2">
          <p>- на матах працюємо босоніж або у чистих шкарпетках;</p>
        </li>
        <li className="flex items-center mt-2">
          <p>- бережно ставимося до покриття та меблів;</p>
        </li>
        <li className="flex items-center mt-2">
          <p>- прийом їжі - лише у чай-кава-зоні;</p>
        </li>
        <li className="flex items-center mt-2">
          <p>- без алкоголю та гучних вечірок;</p>
        </li>
        <li className="flex items-center mt-2">
          <p>- поважаємо сусідів: після 21:00 — режим тиші;</p>
        </li>
        <li className="flex items-center mt-2">
          <p>- самостійно прибираємо сміття; </p>
        </li>
        <li className="flex items-center mt-2">
          <p>- домашні тварини - за попередньою домовленістю.</p>
        </li>
      </ul>
      <p className="text-lg mx-3 my-4 lg:text-xl 2xl:text-2xl mt-6">Shanti Space — це компактний та зручний простір, який підлаштовується під ваш формат: заняття, ігри, навчання чи зустрічі.
         Тут є все необхідне для комфортної роботи групи 10–15 осіб.
      </p>
      <p className="font-bold text-xl text-centr mx-3 my-8 lg:text-xl 2xl:text-2xl">Забронюйте час і використайте простір максимально ефективно.</p>
      <Link href="tel:+380971250101" className="font-bold mb-6 block w-[200px] rounded-md border-2 p-2 text-center text-lg border-amber-950 mx-auto mt-[20px] lg:w-[200px] lg:text-xl xl:mt-[40px] bg-stone-300/50" aria-label="посилання на телефон для запису на фізичну реабілітацію">Забронювати зал</Link>
    </section>
    
  )
}

export default RentPage