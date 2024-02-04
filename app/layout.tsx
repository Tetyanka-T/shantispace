import './globals.css'
import type { Metadata } from 'next'
import {AuthProvider} from "../context/Providers"
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar/NavBar'
import Footer from '@/components/Footer'
import ToasterContext from '../context/ToasterContext'
import ActiveStatus from '../components/Chat/ActiveStatus'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shanti_Space',
  description: "Простір здоров'я та душевної рівноваги, індивідуальні та групові заняття з йоги, фізичної реабілітації, оздоровчої гімнастики (ЛФК) Кривий Ріг",
  keywords: 'йога, реабілітація, фізична реабілітація, йогатерапія, цвяхостояння, лікувальна фізкультура, оздоровча гімнастика, ЛФК, групові заняття, індивідуальні заняття, простір для відновлення, почувай себе як вдома, Кривий Ріг, жіноче коло, практика асан, індивідуальний підхід, вихід з негативу, чистий розум',
 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uk">
      <head>
      <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>
        <AuthProvider>
        <NavBar/>
        <main className='text-slate-700 mx-auto min-[-320px]:px-2 sm:px-4 md:px-8 lg:px-10 xl:px-20 min-[1500px]:mx-[120px]'>
          <ToasterContext/>
          <ActiveStatus/>
          {children}
        </main>
        <Footer/>
        </AuthProvider>
      </body>
    </html>
  )
}
