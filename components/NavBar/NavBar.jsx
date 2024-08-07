'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { RiMenu3Fill } from 'react-icons/ri'
import { AiOutlineClose } from 'react-icons/ai'
import { BiDownArrowAlt } from 'react-icons/bi'
import NavBarAdminMobile from '../Admin/NavBar/NavBarAdminMobile'
import NavBarAdminDescktop from '../Admin/NavBar/NavBarAdminDescktop'
import NavBarUserMobile from '../User/NavBar/NavBarUserMobile'
import NavBarUserDesctop from '../User/NavBar/NavBarUserDesctop'
import NavBarNotAuthMobile from './NavBarNotAuthMobile'
import s from './NavBar.module.css'

const NavBar = () => {
  const { data: session, status } = useSession()

  const isAuth = status === 'authenticated'
  const isNotAuth = status === 'unauthenticated'
  const isUser = session?.user?.role === 'USER'
  const isAdmin = session?.user?.role === 'ADMIN'
  // const isVipUser = session?.user.role === "VIPUSER"

  const [showMenu, setShowMenu] = useState(false)

  const onShowMenu = () => {
    setShowMenu(true)
    toggleMenu()
  }
  const toggleMenu = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true)
  }
  const [userMenu, setUserMenu] = useState(false)

  const onShowBlogMenu = () => {
    setUserMenu(true)
    toggleBlogMenu()
  }
  const toggleBlogMenu = () => {
    userMenu ? setUserMenu(false) : setUserMenu(true)
  }
  return (
    <header className='p-3 flex justify-center items-center border-b-2 relative lg:px-8 xl:px-10'>
      <button onClick={() => onShowMenu()} className='mr-4 my-2 lg:hidden'>
        <RiMenu3Fill size={28} className='fill-zinc-800' />
      </button>
      <div className={s.logo}>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='logo'
            width={120}
            height={80}
            className={s.logo_img}
          />
        </Link>
      </div>

      {showMenu && (
        <div className='block'>
          <button
            onClick={() => onShowMenu()}
            className='absolute top-3 right-2 z-50'
          >
            <AiOutlineClose size={24} className='fill-amber-950' />
          </button>
          {isAdmin && <NavBarAdminMobile onClick={onShowMenu} />}
          {isUser && <NavBarUserMobile onClick={onShowMenu} />}
          {isNotAuth && <NavBarNotAuthMobile onClick={onShowMenu} />}
        </div>
      )}
      {isAdmin && (
        <div className={s.visible}>
          <NavBarAdminDescktop />
        </div>
      )}
      {isUser && (
        <div className={s.visible}>
          <NavBarUserDesctop />
        </div>
      )}
      {isNotAuth && (
        <nav className={s.visible}>
          <ul className='flex justify-center text-amber-950 items-center text-lg font-normal tracking-wide leading-6 lg:text-xl'>
            <li className='mr-8 hover:text-amber-950 font-bold hover:border-b-2 hover:border-amber-950'>
              <Link href='/' aria-label='посилання на головну сторінку'>
                Головна
              </Link>
            </li>
            <li className='relative mr-10 font-semibold hover:text-amber-950 hover:border-b-2 hover:border-amber-950'>
              <div className='flex items-center'>
                <Link href='/blog' onClick={() => setUserMenu(false)}>
                  Блог
                </Link>
                <button onClick={() => onShowBlogMenu()} className='ml-5'>
                  <BiDownArrowAlt size={24} className='fill-amber-950' />
                </button>
              </div>

              {userMenu && (
                <ul className='absolute top-[57px] left-0 bg-slate-200 p-5 flex justify-center items-center w-max z-50 rounded-md'>
                  <li
                    className='mr-8 hover:text-amber-950 font-bold hover:border-b-2 hover:border-amber-950'
                    onClick={() => setUserMenu(false)}
                  >
                    <Link href='/questions'>Питання</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className='mr-8 hover:text-amber-950 font-bold hover:border-b-2 hover:border-amber-950'>
              <Link href='/yoga' aria-label='посилання на сторінку йоги'>
                Простір йоги
              </Link>
            </li>
            <li className='mr-8 hover:text-amber-950 font-bold hover:border-b-2 hover:border-amber-950'>
              <Link
                href='/physical-therapy'
                aria-label='посилання на сторінку фізичної реабілітації'
              >
                Фізична реабілітація
              </Link>
            </li>
            <li className=' hover:text-amber-950 font-bold hover:border-b-2 hover:border-amber-950'>
              <Link
                href='/contacts'
                aria-label='посилання на сторінку контактів'
              >
                Контакти
              </Link>
            </li>
          </ul>
        </nav>
      )}

      <div className='ml-auto'>
        {isNotAuth && (
          <button aria-label='Кнопка увійти в обліковий запис'>
            <Link href='/login'>
              <Image
                src='/scorpio.png'
                alt='Кнопка увійти в обліковий запис асана'
                width={70}
                height={70}
              />
              <span className='text-xs text-amber-950'>Увійти</span>
            </Link>
          </button>
        )}

        {isAuth && (
          <div className='flex justify-center items-center'>
            <span className='mr-2 text-base font-medium text-amber-950'>
              Привіт, {session?.user?.name}
            </span>
            <button
              onClick={() => signOut()}
              aria-label='Кнопка вийти з облікового запису'
            >
              <div>
                <Image src='/twist.png' alt='асана' width={70} height={60} />
                <span className='text-xs text-amber-950'>Вихід</span>
              </div>
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

export default NavBar
