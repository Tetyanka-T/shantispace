import type { Metadata } from 'next'
import Link from "next/link"
import Image from "next/image"
import JoinIn from "@/components/JoinIn"
import s from "@/app/styles/common.module.css"

export const metadata: Metadata = {
  title: 'ShantiSpace фізична активність та оздоровчі рухові заняття Кривий Ріг',
  description: "Простір здоров'я та душевної рівноваги, індивідуальні та групові заняття з йоги, заняття з рухової активності, індивідуальні та групові рухові програми, фізична активність та підтримка функціональності, група формування правильної постави у дітей Кривий Ріг",
  keywords: 'оздоровчі рухові заняття, функціональний рух, заняття для підтримки тіла, робота з поставою, формування правильно постави у дітей, групові заняття, індивідуальні заняття, Кривий Ріг, індивідуальний підхід, сучасні методи фізичної активності, покращення самопочуття, розвиток рухових навичок',
}

const PhysicalPage = () => {
  return (
    <section className="h-full -mx-[8px]">
      <div className={s.physical_hero}>
        <div className="text-center leading-7 text-2xl font-black tracking-wider">
          <h1 className="animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out text-3xl text-amber-950 md:text-[36px] lg:text-[48px]">Рухова активність</h1>
          <a href="tel:+380977339045" className="animate-fade-left animate-once animate-duration-[2000ms] animate-ease-in-out block w-[150px] rounded-md border-2 p-2 text-center text-lg border-amber-950 mx-auto mt-[20px] lg:w-[200px] lg:text-xl xl:mt-[40px]" aria-label="посилання на телефон для запису на фізичну реабілітацію">Записатись на заняття</a>
        </div>
      </div>
      <p className="text-lg mx-3 my-2 lg:text-xl 2xl:text-2xl 2xl:mx-[60px]"><span className='font-bold'>Рухова активність</span> — це комплекс занять, спрямованих на покращення загального стану тіла, відновлення природної рухливості та підтримку функціональності організму, особливо після періодів зниженого навантаження або малорухливого способу життя.</p>
      <p className="text-lg mx-3 my-2 lg:text-xl 2xl:text-2xl 2xl:mx-[60px]">Основне завдання таких занять — допомогти тілу повернути баланс, силу та витривалість, а також адаптуватися до повсякденних навантажень і активного життя.</p>
      <p className="text-lg mx-3 my-2 lg:text-xl 2xl:text-2xl 2xl:mx-[60px]">Метою занять є не лише покращення фізичної форми, а й активація внутрішніх ресурсів організму, підтримка рухливості, профілактика перевантажень та дискомфорту. Регулярна робота з тілом сприяє розвитку нових рухових можливостей і підвищенню загального рівня функціональності.</p>
      <div className={s.therapy_img_container}></div>
     
      <p className="text-lg mx-3 my-2 lg:text-xl 2xl:text-2xl 2xl:mx-[60px]">У роботі використовуються різні підходи: спеціально підібрані фізичні вправи, м’які техніки роботи з тілом, рухові практики, елементи загартовування та активності на свіжому повітрі. Рух вважається одним із найприродніших та найефективніших способів підтримки здорового стану тіла.</p>
      <h2 className="text-lg mx-3 my-2 lg:text-xl 2xl:text-2xl 2xl:mx-[60px]">У нашому просторі заняття проводяться в груповому та індивідуальному форматі, з різною спрямованістю — залежно від запиту, рівня підготовки та цілей людини.</h2>
      <p className="text-lg mx-3 my-2 lg:text-xl 2xl:text-2xl 2xl:mx-[60px]">Особлива увага приділяється індивідуальним особливостям кожного учасника: рівню підготовки, фізичним можливостям і самопочуттю. Навантаження підбирається поступово, без перевтоми, з повагою до тіла.</p>
      <h3 className="text-lg text-center mx-3 my-4 lg:text-xl 2xl:text-2xl 2xl:mx-[60px]">Напрями рухової роботи:</h3>
      <ul className="mx-3 mb-3 text-lg lg:text-xl 2xl:text-2xl 2xl:mx-[60px]">
          <li className="flex items-center mt-2">
            <p>- заняття, спрямовані на покращення рухливості, координації та роботи з власним тілом;</p>
          </li>
          <li className="flex items-center mt-2">
            <p>- м’які ручні та рухові техніки, які допомагають зняти напруження, покращити кровообіг і загальне самопочуття.</p>
          </li>
       </ul>
      <div className="2xl:mx-60 my-0 md:grid md:grid-cols-2 md:gap-2">
        <Image src="/therapy3.jpg" width={320} height={300} alt="Фізична реабілітація індивідуальне заняття" className="w-full h-auto object-cover md:h-[450px] lg:h-[750px]"/>
        <Image src="/therapy6.jpg" width={320} height={300} alt="Фізична реабілітація індивідуальне заняття" className="w-full h-auto object-cover md:h-[450px] lg:h-[750px]"/>
        <Image src="/therapy5.jpg" width={320} height={300} alt="Фізична реабілітація індивідуальне заняття" className="w-full h-auto object-cover md:h-[450px] lg:h-[750px]"/>
        <Image src="/therapy4.jpg" width={320} height={300} alt="Фізична реабілітація індивідуальне заняття" className="w-full h-auto object-cover md:h-[450px] lg:h-[750px]"/>
      </div>
    
      <h3 className="text-lg text-center mx-3 my-4 lg:text-xl 2xl:text-2xl">Переваги регулярних занять:</h3>
      <ul className="mx-3 mb-3 text-lg lg:text-xl 2xl:text-2xl 2xl:mx-[300px]">
          <li className="flex items-center mt-2">
            <Image src="/me.png" alt="малюнок асани" width={40} height={50}/>
            <p className="ml-2">покращення загального стану тіла;</p>
          </li>
          <li className="flex items-center mt-2">
            <Image src="/profile.png" alt="малюнок асани" width={50} height={50}/>
            <p className="ml-2">підвищення рухливості та витривалості;</p>
          </li>
          <li className="flex items-center mt-2">
            <Image src="/lying-twist.png" alt="малюнок асани" width={50} height={50}/>
            <p className="ml-2">зменшення відчуття напруження та дискомфорту;</p>
          </li>
          <li className="flex items-center mt-2">
            <Image src="/twist.png" alt="малюнок асани" width={50} height={50}/>
            <p className="ml-2">повернення впевненості у власних рухах;</p>
          </li>
          <li className="flex items-center mt-2">
            <Image src="/padakhasana.png" alt="малюнок асани" width={50} height={50}/>
            <p className="ml-2">позитивний вплив на емоційний стан та настрій.</p>
          </li>
      </ul>
      <h3 className="text-lg mx-6 my-2 md:mx-12 lg:text-xl 2xl:text-2xl 2xl:mx-[60px]">Індивідуальний підхід та грамотний підбір вправ дозволяють досягати відчутних результатів у підвищенні комфорту руху та якості життя.</h3>
      <Link href="tel:+380977339045" className="block w-[200px] md:w-[250px] rounded-md border-2 p-1 text-center text-lg border-amber-950 mx-auto mt-3 mb-3 md:mt-8 lg:text-xl">Записатись на індивідуальне заняття</Link>

      <div className="my-0 md:grid md:grid-cols-2 md:gap-2 2xl:mx-60">
        <Image src="/LFK.jpg" width={320} height={300} alt="Фізична реабілітація індивідуальне заняття" className="w-full h-auto object-contain"/>
        <Image src="/LFK6.jpg" width={320} height={300} alt="Фізична реабілітація індивідуальне заняття" className="w-full h-auto object-contain"/>
        <Image src="/LFK5.jpg" width={320} height={300} alt="Фізична реабілітація індивідуальне заняття" className="w-full h-auto object-contain"/>
        <Image src="/LFK2.jpg" width={320} height={300} alt="Фізична реабілітація індивідуальне заняття" className="w-full h-auto object-contain"/>
      </div>
      <p className="text-lg mx-3 my-2 lg:text-xl 2xl:text-2xl 2xl:mx-[60px]">Оздоровчі рухові заняття — це система вправ, побудована на природних, фізіологічно правильних рухах, які допомагають тілу працювати ефективніше та без перевантажень.
Дозоване та усвідомлене фізичне навантаження, підібране відповідно до можливостей людини, сприяє зміцненню тіла, розвитку сили та витривалості.</p>
      <p className="text-lg mx-3 my-2 lg:text-xl 2xl:text-2xl 2xl:mx-[60px]">Такі заняття корисні як для підтримки активного способу життя, так і для профілактики перенапруження та зниження рухової активності.</p>
      <h3 className="text-lg text-center mx-3 my-4 lg:text-xl 2xl:text-2xl 2xl:mx-[60px]">Формати занять:</h3>
      <ul className="mx-3 mb-3 text-lg lg:text-xl 2xl:text-2xl 2xl:mx-[300px]">
        <li className="flex items-center mt-2">
           <p>- ранкові рухові комплекси;</p>
        </li>
        <li className="flex items-center mt-2">
          <p>- групові або індивідуальні заняття;</p>
        </li>
        <li className="flex items-center mt-2">
          <p>- вправи з використанням простого обладнання та тренажерів.</p>
        </li>
      </ul>
      <p className="text-lg mx-3 my-2 lg:text-xl 2xl:text-2xl 2xl:mx-[60px]">Вибір формату та комплексу вправ здійснюється інструктором з урахуванням цілей, рівня підготовки та індивідуальних особливостей учасника.</p>
      <p className="text-lg mx-3 my-2 lg:text-xl 2xl:text-2xl 2xl:mx-[60px]">Також підбираються комплекси вправ для самостійного виконання вдома після завершення занять.</p>
      <p className="text-lg mx-3 font-bold my-2 lg:text-xl 2xl:text-2xl 2xl:mx-[60px]">Важливо! Навіть якщо вправи здаються простими, правильна техніка виконання та контроль спеціаліста є ключовими для безпечного та ефективного результату.</p>
      <h3 className="text-lg text-center mx-3 my-4 lg:text-xl 2xl:text-2xl 2xl:mx-[60px]">Інструктори з оздоровчої рухової активності:</h3>
      <div className="2xl:mx-[340px]">
        <div className="md:flex">
        <div>
          <Image src="/couch-dar.jpeg" alt="Дарина Полозок - інструктор з йоги, йогатерапевт" width={320} height={300} className="w-full h-auto object-cover md:w-[490px]"/>
          <h2 className="text-md text-center my-2">Дарина Потапова - інструктор з йоги, йогатерапевт</h2>
        </div>
        <div className="mt-4 md:ml-8">
        <p className="text-center text-lg my-2 lg:text-xl lg:ml-4">Розклад оздоровчої активності:</p>
              <ul className="mx-3 text-lg my-2 lg:text-xl lg:ml-4">
                <li className="mt-2">Понеділок, середа, п`ятниця - 16.00</li>
              </ul>
          <a href="tel:+380977339045" className="block w-[200px] rounded-md border-2 p-1 text-center text-lg border-amber-950 mx-auto mt-3 md:mt-8 lg:text-xl" aria-label="посилання на запис на заняття до Дарини Полозок">Записатись на заняття</a>
        </div>
        </div>
        <div className="mt-8 md:flex">
        <div>
          <Image src="/svitlana.jpg" width={320} height={300} alt="Світлана Погребняк - інструктор з йоги та оздоровчої активності" className="w-full h-auto object-cover md:w-[490px]"/>
          <h2 className="text-md text-center my-2">Світлана Погребняк - інструктор з йоги та оздоровчої активності</h2>
        </div>
        <div className="mt-4 md:ml-8">
          <p className="text-center text-lg my-2 lg:text-xl lg:ml-4">Розклад:</p>
          <ul className="text-lg my-2 ml-4 lg:text-xl lg:ml-4">
            <li>Понеділок, середа, п`ятниця - 08.30</li>
            <li className="mt-2">Вівторок, четвер - 17.45</li>
          </ul>
          <a href="tel:+380971250101" className="block w-[200px] rounded-md border-2 p-1 text-center text-lg border-amber-950 mx-auto mt-3 md:mt-8 lg:text-xl" aria-label="посилання на запис на заняття до Світлани Погребняк">Записатись на заняття</a>
        </div>  
        </div>
     </div>
      <p className="text-lg mx-3 my-2 lg:text-xl 2xl:text-2xl 2xl:mx-[60px]">**Заняття не є медичною послугою та не замінюють консультацію лікаря.</p>
     <JoinIn/>
    </section>
  )
}

export default PhysicalPage