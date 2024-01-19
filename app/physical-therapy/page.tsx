import s from "@/app/styles/common.module.css"
import Link from "next/link"
import Image from "next/image"

const PhysicalPage = () => {
  return (
    <section className="h-full -mx-[8px]">
      <div className={s.physical_hero}>
        <div className="text-center leading-7 text-2xl font-black tracking-wider">
          <h1 className="text-3xl text-amber-950 md:text-[36px] lg:text-[48px]">Фізична реабілітація</h1>
          <Link href="tel:+380977339045" className="block w-[150px] rounded-md border-2 p-2 text-center text-lg border-amber-950 mx-auto mt-[20px] lg:w-[200px] lg:text-xl xl:mt-[40px]">Записатись</Link>
        </div>
      </div>
      <p className="text-lg mx-3 my-2 lg:text-xl 2xl:text-2xl">Фізична реабілітація – це комплекс заходів, спрямованих на відновлення повноцінної функціональності організму, особливо після серйозних травм та операцій.</p>
      <p className="text-lg mx-3 my-2 lg:text-xl 2xl:text-2xl">Основні завдання цього процесу полягають у відновленні працездатності організму та його адаптації до повноцінного виконання всіх функцій.</p>
      <p className="text-lg mx-3 my-2 lg:text-xl 2xl:text-2xl">Метою фізичної реабілітації є не лише відновлення фізичних можливостей, але й активація резервних сил та захисних функцій організму, профілактика ускладнень та рецидивів захворювань. 
        Цей процес також спрямований на розвиток нових можливостей організму та покращення функціональності.
      </p>
      <div className={s.therapy_img_container}></div>
     
      <p className="text-lg mx-3 my-2 lg:text-xl 2xl:text-2xl">У фізичній реабілітації використовуються різноманітні методи, такі як фізичні вправи, масаж, терапії, загартовування та сонячні ванни. 
        Застосування фізкультури вважається одним з найдавніших та найефективніших методів. 
      </p>
      <p className="text-lg mx-3 my-2 lg:text-xl 2xl:text-2xl">В нашому центрі використання цього методу засновано на групових та індивідуальних заняттях в групах різної направленості по нозології.</p>
      <p className="text-lg mx-3 my-2 lg:text-xl 2xl:text-2xl">Важливо враховувати індивідуальні особливості пацієнта та уникаючи зайвого навантаження, сприяти його швидкому відновленню.</p>
      <h3 className="text-lg text-center mx-3 my-4 lg:text-xl 2xl:text-2xl">Методи фізичної терапії:</h3>
        <ul className="mx-3 mb-3 text-lg lg:text-xl 2xl:text-2xl">
          <li className="flex items-center mt-2">
            <p>- ерготерапія, кінезіотерапія - спрямовані на лікування рухами тіла,</p>
          </li>
          <li className="flex items-center mt-2">
            <p>- фізіотерапія та мануальна терапія - забезпечують глибокий вплив на м&apos;язово-скелетну систему сприяючи поліпшенню кровообігу, заживленню тканин та позбавленню болю.</p>
          </li>
         </ul>
      <div className="mx-auto my-0 md:grid md:grid-cols-2 md:gap-2">
        <Image src="/therapy3.jpg" width={320} height={300} alt="Фізична реабілітація індивідуальне заняття" className="w-full h-auto object-cover md:h-[450px] lg:h-[750px]"/>
        <Image src="/therapy6.jpg" width={320} height={300} alt="Фізична реабілітація індивідуальне заняття" className="w-full h-auto object-cover md:h-[450px] lg:h-[750px]"/>
        <Image src="/therapy5.jpg" width={320} height={300} alt="Фізична реабілітація індивідуальне заняття" className="w-full h-auto object-cover md:h-[450px] lg:h-[750px]"/>
        <Image src="/therapy4.jpg" width={320} height={300} alt="Фізична реабілітація індивідуальне заняття" className="w-full h-auto object-cover md:h-[450px] lg:h-[750px]"/>
      </div>
    
        <h3 className="text-lg text-center mx-3 my-4 lg:text-xl 2xl:text-2xl">Переваги фізичної терапії:</h3>
        <ul className="mx-3 mb-3 text-lg lg:text-xl 2xl:text-2xl">
          <li className="flex items-center mt-2">
            <Image src="/me.png" alt="" width={40} height={50}/>
            <p className="ml-2">покращення стану організму,</p>
          </li>
          <li className="flex items-center mt-2">
            <Image src="/profile.png" alt="" width={50} height={50}/>
            <p className="ml-2">прискорення заживлення тканин,</p>
          </li>
          <li className="flex items-center mt-2">
            <Image src="/lying-twist.png" alt="" width={50} height={50}/>
            <p className="ml-2">зниження болю,</p>
          </li>
          <li className="flex items-center mt-2">
            <Image src="/twist.png" alt="" width={50} height={50}/>
            <p className="ml-2">повернення до повноцінної функціональності,</p>
          </li>
          <li className="flex items-center mt-2">
            <Image src="/padakhasana.png" alt="" width={50} height={50}/>
            <p className="ml-2">сприяє покращенню настрою та загального психічного стану.</p>
          </li>
         </ul>
         <p className="text-lg mx-6 my-2 md:mx-12 lg:text-xl 2xl:text-2xl">Індивідуальний підхід до кожного випадку, підбір оптимальних фізичних вправ та методів лікування, дозволяють досягти максимально ефективних результатів у відновленні.</p>
         <Link href="tel:+380977339045" className="block w-[200px] md:w-[250px] rounded-md border-2 p-1 text-center text-lg border-amber-950 mx-auto mt-3 mb-3 md:mt-8 lg:text-xl">Записатись на індивідуальне заняття</Link>

      <div className="mx-auto my-0 md:grid md:grid-cols-2 md:gap-2">
        <Image src="/LFK.jpg" width={320} height={300} alt="Фізична реабілітація індивідуальне заняття" className="w-full h-auto object-contain"/>
        <Image src="/LFK6.jpg" width={320} height={300} alt="Фізична реабілітація індивідуальне заняття" className="w-full h-auto object-contain"/>
        <Image src="/LFK5.jpg" width={320} height={300} alt="Фізична реабілітація індивідуальне заняття" className="w-full h-auto object-contain"/>
        <Image src="/LFK2.jpg" width={320} height={300} alt="Фізична реабілітація індивідуальне заняття" className="w-full h-auto object-contain"/>
      </div>
      <p className="text-lg mx-3 my-2 lg:text-xl 2xl:text-2xl">Лікувальна фізкультура – це система вправ, спрямованих на відновлення організму та його функцій через правильні, з фізіологічної точки зору, рухи.</p>
      <p className="text-lg mx-3 my-2 lg:text-xl 2xl:text-2xl">Організоване дозування фізичного навантаження, відповідно підібране для конкретного пацієнта, допомагає зміцнити тіло та повернути йому силу.</p>
      <p className="text-lg mx-3 my-2 lg:text-xl 2xl:text-2xl">Метод лікувальної фізкультури ефективний як для відновлення організму після захворювань, так і для їх профілактики.</p>
      <h3 className="text-lg text-center mx-3 my-4 lg:text-xl 2xl:text-2xl">Види лікувальної фізкультури:</h3>
      <ul className="mx-3 mb-3 text-lg lg:text-xl 2xl:text-2xl">
          <li className="flex items-center mt-2">
            <p>- ранкова гігієнічна гімнастика,</p>
          </li>
          <li className="flex items-center mt-2">
            <p>- групова чи індивідуальна гімнастика,</p>
          </li>
          <li className="flex items-center mt-2">
            <p>- вправи з використанням тренажерів.</p>
          </li>
      </ul>
      <p className="text-lg mx-3 my-2 lg:text-xl 2xl:text-2xl">Вибір конкретного типу вправ визначає фізичний терапевт чи інструктор з лікувальної фізкультури, враховуючи індивідуальні особливості пацієнта та його мету лікування чи профілактики.</p>
      <p className="text-lg mx-3 my-2 lg:text-xl 2xl:text-2xl">Також ми підбираємо вправи для самостійного виконання вдома після завершення лікування.</p>
      <p className="text-lg mx-3 font-bold my-2 lg:text-xl 2xl:text-2xl">Важливо! Незважаючи на те, що деяким людям вправи можуть здатися простими та легкими, вони повинні виконуватись під суворим контролем інструктора чи фізичного терапевта.</p>
      <h3 className="text-lg text-center mx-3 my-4 lg:text-xl 2xl:text-2xl">Інструктори фізичної терапії та оздоровчої фізкультури:</h3>
      <div className="md:grid md:grid-cols-2 md:gap-2 md:my-4">
        <div className="my-4 md:my-0">
          <Image src="/couch.jpeg" alt="" width={320} height={300} className="w-full mx-auto md:h-[500px] object-contain"/>
          <p className="text-md text-center my-2">Дарина Полозок - інструктор з йоги, йогатерапевт та фізтерапевт</p>
          <Link href="tel:+380977339045" className="block w-[200px] rounded-md border-2 p-1 text-center text-lg border-amber-950 mx-auto mt-3 md:mt-8 lg:text-xl">Записатись на заняття</Link>
        </div>
        <div className="mb-4 md:mb-0">
          <Image src="/svitlana.jpg" width={320} height={300} alt="Світлана Погребняк - тренер з йоги та оздоровчої фізкультури" className="w-full mx-auto object-contain md:h-[500px]"/>
          <p className="text-md text-center my-2">Світлана Погребняк - тренер з йоги та оздоровчої фізкультури</p>
          <Link href="tel:+380971250101" className="block w-[200px] rounded-md border-2 p-1 text-center text-lg border-amber-950 mx-auto mt-3 md:mt-8 lg:text-xl">Записатись на заняття</Link>
        </div>  
      </div>
    </section>
  )
}

export default PhysicalPage