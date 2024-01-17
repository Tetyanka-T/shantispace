import Image from "next/image"
import Link from "next/link"
import s from "@/app/styles/common.module.css"
import JoinInButton from "@/components/JoinInButton"
import JoinIn from "@/components/JoinIn"

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
      <div className={s.home_img_container}>
      </div>
      <JoinIn/> 
      <h2 className="text-lg text-center mx-3 my-4 lg:text-xl 2xl:text-2xl">Напрями занять нашого простору:</h2>
      <ul>
        <li>
          <h3 className="mx-[20px] my-[20px] text-lg lg:text-xl 2xl:text-2xl">Йога-практики</h3>
          <div className={s.home_classes_container_img_yoga}>
            <Link href="/yoga" className="absolute bottom-4 right-3 border-b-2 border-amber-950 text-amber-950 text-md">Детальніше</Link>
          </div>
          <p className="mx-[20px] my-[20px] text-md lg:text-xl 2xl:text-xl">Йога як метод дуже добре впливає на емоційність, збудливість, порушення сну та  дисбаланси в станах збудження-розслаблення (депресивні стани).</p>
          <Link href="tel:+380977339045" className="block w-[200px] rounded-md border-2 p-1 text-center text-lg border-amber-950 mx-auto mt-3 mb-3 md:mt-8 lg:text-xl">Записатись на практику</Link>
        </li>
        <li>
          <h3 className="mx-[20px] my-[20px] text-lg lg:text-xl 2xl:text-2xl">Фізична реабілітація</h3>
          <div className={s.home_classes_container_img_therapy}>
            {/* <Image src="/therapy.jpg" width={320} height={300} alt="Фізична реабілітація" className="w-full h-auto"/> */}
            <Link href="/physical-therapy" className="absolute top-5 left-4 border-b-2 border-amber-950 text-amber-950 text-md">Детальніше</Link>
          </div>
          <p className="mx-[20px] my-[20px] text-md lg:text-xl 2xl:text-xl">Фізична реабілітація – це комплекс заходів, спрямованих на відновлення повноцінної функціональності організму, особливо після серйозних травм та операцій.</p>
          <p className="mx-[20px] my-[20px] text-md lg:text-xl 2xl:text-xl">В нашому просторі реабілітація проходить в групових та індивідуальних заняттях в групах різної направленості по нозології.</p>
          <Link href="tel:+380977339045" className="block w-[200px] rounded-md border-2 p-1 text-center text-lg border-amber-950 mx-auto mt-3 mb-3 md:mt-8 lg:text-xl">Записатись</Link>
        </li>
        <li>
          <h3 className="mx-[20px] my-[20px] text-lg lg:text-xl 2xl:text-2xl">Практика стояння на цвяхах</h3>
          <div className={s.home_classes_container_img_nails}>
            <Image src="/nails.jpg" width={320} height={300} alt="Дошка Садху"/>
            <Image src="/nails2.jpg" width={320} height={300} alt="Дарина в бакасані"/>
          </div>
          <p className="mx-[20px] my-[20px] text-md lg:text-xl 2xl:text-xl">Практика стояння на цвяхах (дошка Садху) — шлях до внутрішнього звільнення та гармонізації через енергетичні канали та нейронні зв&apos;язки.</p>
          <p className="mx-[20px] my-[20px] text-md lg:text-xl 2xl:text-xl">Стоячи на цвяхах, варто віддати себе моменту і відчути внутрішню силу, яка притаманна кожному з нас. Розслаблення тіла та розуму дозволяє відпустити напругу і відкрити для себе нові рівні усвідомлення.
            Пам&apos;ятай, що в цьому процесі важливо не боротися з собою, а дозволяти собі просто бути. Висловлюй емоції, слухай власне тіло, відчувай пульс своєї енергії. Ця практика — це можливість зануритися в себе і відкрити те, що може залишатися прихованим у повсякденному житті. 🌌💫
          </p>
          <Link href="tel:+380977339045" className="block w-[200px] rounded-md border-2 p-1 text-center text-lg border-amber-950 mx-auto mt-3 mb-3 md:mt-8 lg:text-xl">Записатись</Link>
        </li>
      </ul>
      <p className="text-lg text-center mx-3 my-4 lg:text-xl 2xl:text-2xl">Дарина та Світлана - засновниці та тренери Shanti_space </p>
      <Image src="/couches_main.jpg" width={320} height={300} alt="Дарина та Світлана - тренери та засновниці Shanti_space" className="w-full h-auto mx-auto object-cover md:w-[500px] lg:w-[650px]"/>
      <p className="mx-[20px] my-[20px] text-md lg:text-xl 2xl:text-xl">Людям потрібен простір для емоційних зустрічей. Колективні заняття стають тією емоційною пітримкою, яку людина прагне отримати від тренера та друзів по заняттю.</p>
      <p className="mx-[20px] my-[20px] text-md lg:text-xl 2xl:text-xl">Індивідуальний підхід - це можливість врахувати індивідуальні потреби та особливості організму кожного практикуючого.</p>
      <p className="mx-[20px] my-[20px] text-md lg:text-xl 2xl:text-xl">Стратегія для занять йогою та фізичною реабілітацією адаптована до поточного стану здоров’я, фізичних можливостей та особистих цілей практикуючих.
         Ви матимете можливість більш глибоко зануритись в пізнання себе та бути для себе відкриттям!
      </p>
      <p className="text-lg text-center mx-3 my-4 lg:text-xl 2xl:text-2xl">До зустрічі у просторі Shanti!</p>
    </section>
  )
}
