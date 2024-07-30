'use client'

import Link from "next/link"
import { useSession, signOut } from 'next-auth/react'

const AddQuestionButton = () => {
  const { data: session, status } = useSession()

  const isAuth = status === 'authenticated'
  return (
    <section className="mx-auto text-center sm:text-right">
     
        <button className="shadow-xl shadow-neutral-500 bg-amber-950 text-white p-4 rounded-md">
        {isAuth && <Link href="/questions/addquestion">Задати питання Дарині</Link>}
        {!isAuth && <Link href="/register" target="_blank">Задати питання Дарині</Link>}
        </button>
    </section>
    
  )
}

export default AddQuestionButton