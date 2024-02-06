import './globals.css'
import type { Metadata } from 'next'
import {AuthProvider} from "../context/Providers"
import { Inter } from 'next/font/google'
import NavBar from '../components/NavBar/NavBar'
import Footer from '@/components/Footer'
import ToasterContext from '../context/ToasterContext'
import ActiveStatus from '../components/Chat/ActiveStatus'

const inter = Inter({ subsets: ['latin'] })


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
