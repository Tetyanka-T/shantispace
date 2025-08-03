'use client'

import Link from "next/link"
import { useSession, signOut } from 'next-auth/react'
import Image from "next/image"
import SliderCertificate from "./SliderCertificate"

const ProfileAdminBlog = () => {
  const { data: session, status } = useSession()

  const isAuth = status === 'authenticated'
  return (
    <div className="mx-auto pt-4">
      <div className="min-[1500px]:flex items-center">
        {/* <Image src="/profile-admin.jpg" alt="Дарина Полозок" width={320} height={200} className="mx-auto md:w-96 lg:w-[420px]"/> */}
         <Image src="/profile-admin2.jpg" alt="Дарина Полозок" width={320} height={200} className="mx-auto md:w-96 lg:w-[420px]"/>
        <div className="my-2 text-lg font-normal tracking-normal leading-6 md:ml-4">
          <p className="indent-4">
          Привіт! Мене звати Дарина, і я дипломований фізичний терапевт, ерготерапевт, інструктор з йоги та йогатерапевт, який вірить у магію йоги як засобу для відновлення та гармонії у нашому тілі та розумі.
          </p>
          <p className="mt-2">
            Мій власний досвід в йозі 10 років, 7 з яких я веду групові та індивідуальні практики з людьми різних вікових груп та особливостей стану здоров&apos;я.
            Маючи вищу медичну освіту та будучи магістром з фізичної терапії я <strong>вірю у силу руху та його важливість для нашого здоров&apos;я та благополуччя.</strong>
          </p>
          <p className="mt-2">Запрошую вас на подорож до відновлення тіла та покращення його функціональності. </p>
          <p className="mt-2"><strong>Моя місія</strong> – надихати вас на шляху до фізичного, емоційного та духовного благополуччя. </p>
          <p className="mt-2">Чи ви новачок в йозі чи давно їй віддані, я завжди тут, щоб поділитися знаннями та створити простір для вашого самовдосконалення.
            Я можу допомогти вам відчувати себе краще кожен день.
          </p>
          <p className="mt-2">Впевнена, що кожен з нас може знайти в собі справжній потенціал для внутрішнього росту та здоров&apos;я через єдине - <strong>свідоме об&apos;єднання руху, дихання та медитації.</strong>
          </p>
          <p className="mt-2">Я володію різними методиками та техніками фізичної терапії, спрямованими на поліпшення гнучкості, сили та роботи м&apos;язів у різних сферах. </p>
          <p className="mt-2">Працюю над відновленням <strong>військових</strong> на різних етапах реабілітації з індивідуальним підходом.
          </p>
          <p className="mt-2">Маю великий досвід роботи <strong>з жінками всіх вікових категорій</strong> та різноманітних особливостей здоровʼя.</p>
          <p className="mt-2">Працюю <strong>з дітьми від 5 років та підлітками</strong> в групі корекції постави або індивідуально! Заняття направлене на формування правильної постави через комплекси корекційних вправ для м&apos;язів спини, стопи, преса тощо.</p>
          <p className="mt-2">Але моя робота не лише про лікування, але і про попередження та створення здорового стилю життя.</p>
          <p className="mt-2">
           Завжди відкрита до нових викликів і готова поділитися своїми знаннями і досвідом. Якщо у вас є які-небудь питання або ви хочете розпочати свій шлях до фізичного відновлення, приєднуйтеся до простору <a href="/register" target="_blank" className="border-b-2 border-amber-950">ShantiSpace</a> та {isAuth ? (<a href="/questions/addquestion" target="_blank" className="border-b-2 border-amber-950"><strong>напишіть мені!</strong></a>) : (<a href="/register" target="_blank" className="border-b-2 border-amber-950"><strong>напишіть мені!</strong></a>)}
          </p>
          <p className="mt-2">Спільно ми зможемо досягти ваших цілей та стати активними та здоровими разом!</p>
          <p className="mt-2">Не соромтеся ставити питання, ділитися враженнями та починати цей захоплюючий шлях до самопізнання разом!</p>
        </div>
      </div>
      <SliderCertificate/>
    </div>
  )
}

export default ProfileAdminBlog