import './globals.css'
import common from './styles/common.module.css'
import type { Metadata } from 'next'
import {AuthProvider} from "../Providers"
import NavBarAdmin from '@/components/Admin/NavBarAdmin'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ShantiSpace',
  description: 'Generated by create next app',
  keywords: 'йога, реабілітація'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ua">
      <body className={inter.className}>
        {/* <AuthProvider> */}
        <NavBar/>
          <div className='container mx-auto px-2'>
      
            {children}
          </div>
        {/* </AuthProvider> */}
      </body>
    </html>
  )
}
