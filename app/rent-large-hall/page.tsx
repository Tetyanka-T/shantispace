import type { Metadata } from 'next'
import Image from "next/image"
import s from "@/app/styles/common.module.css"



export const metadata: Metadata = {
    title: 'Погодинна оренда залу в ShantiSpace Кривий Ріг',
    description: "Погодинна оренда залу на м'яких карематах з чай-кава зоною Кривий Ріг, для йоги, майстер-класів, трансформаційних ігор, простір для заходів в оренду",
    keywords: 'оренда приміщення, погодинна оренда залу для заходів, оренда залу для трансформаційних ігор, для майстеркласів, для психологічних практик, для медитацій, простір для тренінгів, зал на карематах, зручна локація',

}
const RentPageLarge = () => {
    return (
        <section className="h-full -mx-[8px]">
            <div className={s.rentlarge_hero}>
                <div className="text-center leading-7 text-2xl font-black tracking-wider">
                    <h1 className="animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out text-3xl text-amber-950 md:text-[36px] lg:text-[48px]">Оренда Великий зал</h1>
                    <a href="tel:+380977339045" className="animate-fade-left animate-once animate-duration-[2000ms] animate-ease-in-out block w-[250px] rounded-md border-2 p-4 text-center text-xl border-amber-950 mx-auto mt-[40px] lg:w-[200px] lg:text-xl xl:mt-[40px] bg-stone-300/50" aria-label="посилання на телефон для запису на фізичну реабілітацію">Забронювати зал</a>
                </div>
            </div>
            <div className="flex items-center justify-center my-10 mx-3 2xl:mx-[300px]">
                <Image src="/stand.png" alt="малюнок асани" width={70} height={60} />
                <h2 className="text-lg font-bold lg:text-xl 2xl:text-2xl">Шукаєте локацію, у яку клієнти захочуть повертатися знову й знову? Ми створили простір, де є все для професійної роботи та глибокого занурення в практику. Відкриті до співпраці з тренерами й проводниками, які ставлять на перше місце комфорт та високий рівень сервісу.</h2>
            </div>
            <h3 className="font-bold mb-6 text-center text-xl 2xl:text-2xl">Ми відкриті до співпраці із майстрами, які проводять:</h3>
            <ul className="mx-3 mb-3 text-lg lg:text-xl 2xl:text-2xl 2xl:mx-[300px]">
                <li className="flex items-center mt-2">
                    <Image src="/double2.png" alt="малюнок асани" width={50} height={50} />
                    <p className="ml-2">йогу (усі напрямки);</p>
                </li>
                <li className="flex items-center mt-2">
                    <Image src="/mukha.png" alt="малюнок асани" width={50} height={50} />
                    <p className="ml-2">пілатес та стретчинг;</p>
                </li>
                <li className="flex items-center mt-2">
                    <Image src="/double.png" alt="малюнок асани" width={50} height={50} />
                    <p className="ml-2">медитації та дихальні практики;</p>
                </li>
                <li className="flex items-center mt-2">
                    <Image src="/gode.png" alt="малюнок асани" width={50} height={50} />
                    <p className="ml-2">тілесно-орієнтовану терапію;</p>
                </li>
                <li className="flex items-center mt-2">
                    <Image src="/me.png" alt="малюнок асани" width={50} height={50} />
                    <p className="ml-2">жіночі практики та кола;</p>
                </li>
                <li className="flex items-center mt-2">
                    <Image src="/onarm.png" alt="малюнок асани" width={50} height={50} />
                    <p className="ml-2">майстер-класи, семінари, курси, інтенсиви та інші оздоровчі заходи.</p>
                </li>
            </ul>
            <h3 className="font-bold text-center mx-3 my-8 text-xl 2xl:text-2xl">Ми пропонуємо:</h3>
            <ul className="mx-3 mb-3 text-lg lg:text-xl 2xl:text-2xl 2xl:mx-[300px]">
                <li className="flex items-center mt-2">
                    <Image src="/double.png" alt="малюнок асани" width={50} height={50} />
                    <p className="ml-2">Просторий світлий зал площею 90 м² з чудовим освітленням.</p>
                </li>
                <li className="flex items-center mt-2">
                    <Image src="/mukha.png" alt="малюнок асани" width={50} height={50} />
                    <p className="ml-2">Комфортне розміщення як для індивідуальних практик, так і для великих групових занять.</p>
                </li>
                <li className="flex items-center mt-2">
                    <Image src="/gode.png" alt="малюнок асани" width={50} height={50} />
                    <p className="ml-2">Спокійна атмосфера, що сприяє глибокій практиці, зануренню та відновленню.</p>
                </li>
            </ul>
            <div className="my-8 2xl:mx-60 md:grid md:grid-cols-2 md:gap-1 lg:gap-2">
                <Image src="/rentlarge.jpg" alt="фото залу" width={320} height={300} className="w-full object-contain" />
                <Image src="/rentlarge2.jpg" alt="фото залу" width={320} height={300} className="w-full object-contain" />
            </div>
            <h3 className="font-bold text-center mx-3 my-8 text-xl 2xl:text-2xl">Для вашої зручності та якісної роботи в залі вже є все необхідне:</h3>
            <ul className="mx-3 mb-3 text-lg lg:text-xl 2xl:text-2xl 2xl:mx-[300px]">
                <li className="flex items-center mt-2">
                    <Image src="/onarm.png" alt="малюнок асани" width={40} height={50} />
                    <p className="ml-3">килимки для йоги;</p>
                </li>
                <li className="flex items-center mt-2">
                    <Image src="/me.png" alt="малюнок асани" width={40} height={50} />
                    <p className="ml-3">йога-блоки, ремені та болстери;</p>
                </li>
                <li className="flex items-center mt-2">
                    <Image src="/lying-twist.png" alt="малюнок асани" width={50} height={50} />
                    <p className="ml-2">пледи та подушки для медитації;</p>
                </li>
                <li className="flex items-center mt-2">
                    <Image src="/profile.png" alt="малюнок асани" width={50} height={50} />
                    <p className="ml-2">допоміжний інвентар для занять.</p>
                </li>
            </ul>
            <p className="mx-3 my-8 text-xl 2xl:mx-[250px]"><span className='font-bold'>Зверніть увагу:</span> Усе обладнання вже <span className='font-bold'>входить у вартість користування залом</span> — вам не потрібно нічого довозити.</p>
            <div className="my-8 2xl:mx-60">
                <Image src="/rentlarge3.jpg" alt="фото залу" width={320} height={300} className="w-full h-auto object-contain" />
                <Image src="/rentlarge4.jpg" alt="фото залу" width={320} height={300} className="w-full h-auto object-contain" />
            </div>
            <h3 className="font-bold text-center mx-3 my-8 text-xl 2xl:text-2xl">Ми подбали про кожну деталь, щоб ви та ваші клієнти почувалися як дома:</h3>
            <ul className="mx-3 mb-3 text-lg lg:text-xl 2xl:text-2xl 2xl:mx-[300px]">
                <li className="flex items-center mt-2">
                    <p className='mr-3 text-start'>-</p>
                    <p>зручна роздягальня та чистий санвузол;</p>
                </li>
                <li className="flex items-center mt-2">
                    <p className='mr-3 '>-</p>
                    <p>затишна зона очікування;</p>
                </li>
                <li className="flex items-center mt-2">
                    <p className='mr-3'>-</p>
                    <p>сучасна система кондиціонування та вентиляції для комфортної температури в будь-яку пору року;</p>
                </li>
                <li className="flex items-center mt-2">
                    <p className='mr-3'>-</p>
                    <p>свіжа питна вода.</p>
                </li>
            </ul>
            <h3 className="font-bold text-center mx-3 my-8 text-xl 2xl:text-2xl">Формати співпраці</h3>
            <ul className="mx-3 mb-3 text-lg lg:text-xl 2xl:text-2xl 2xl:mx-[300px]">
                <li className="flex items-center mt-2">
                    <Image src="/double.png" alt="малюнок асани" width={50} height={50} />
                    <p className="ml-2"><span className='font-bold text-xl'>Погодинна оренда</span> — ідеальне рішення для регулярних груп, разових занять, майстер-класів, курсів та інтенсивів.</p>
                </li>
                <li className="flex items-center mt-2">
                    <Image src="/double2.png" alt="малюнок асани" width={50} height={50} />
                    <p className="ml-2"><span className='font-bold text-xl'>Довгострокове партнерство</span> — якщо ви плануєте проводити заняття на постійній основі. Ми запропонуємо <span className='font-bold text-xl'>вигідні умови партнерства,</span> допоможемо сформувати стабільний розклад та стати частиною спільноти нашого простору.</p>
                </li>
            </ul>
            <p className="mx-3 mt-5 text-lg lg:text-xl 2xl:text-2xl 2xl:mx-[250px]">Ми запрошуємо викладачів та майстрів, які створюють цінність, поділяють ідеї <span className='font-bold'>здорового способу життя, професійного розвитку та дбайливого ставлення до людей.</span></p>
            <p className="mx-3 mt-5 text-lg lg:text-xl 2xl:text-2xl 2xl:mx-[250px]">Тих, хто працює з тілом, здоров'ям, усвідомленістю та гармонійним розвитком. Якщо ви шукаєте місце, яке підсилить вашу експертність і залишить приємне враження у кожного гостя — будемо раді знайомству!</p>

            <h3 className="font-bold text-xl text-centr mx-3 my-8 lg:text-xl 2xl:text-3xl xl:mx-[400px]">Запишіться на перегляд залу, щоб відчути його атмосферу та обрати зручні години для своїх занять.</h3>
            <p className="mx-3 mt-5 text-lg lg:text-xl 2xl:text-2xl 2xl:mx-[250px]">Можливо, саме тут розпочнеться новий етап розвитку вашої практики!</p>
            <a href="tel:+380977339045" className="font-bold mb-6 block w-[250px] rounded-md border-2 p-2 text-center text-lg border-amber-950 mx-auto mt-[20px] lg:w-[200px] lg:text-xl xl:mt-[40px] bg-stone-300/50" aria-label="посилання на телефон для запису на оренду залу">097 733 90 45</a>
        </section>

    )
}

export default RentPageLarge