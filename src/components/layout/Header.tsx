"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const AnnouncementBar = () => {
  return (
    <div className='w-full bg-black py-2'>
      <div className="text-center mx-auto flex items-center justify-center px-8">
        <span className="text-center text-sm font-medium tracking-wide text-white">
          FREE SHIPPING ON ORDERS OVER $15.00 · FREE SHIPPING
        </span>
      </div>
    </div>
  )
}

const Header = () => {

  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [prevScrollY, setPrevScrollY] = useState<number>(0);

  useEffect(() => {

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrolledUp = currentScrollY < prevScrollY;

      if (scrolledUp) {
        setIsOpen(true);
      } else if (currentScrollY > 100) {
        setIsOpen(false);
      }

      setPrevScrollY(currentScrollY);
    }

    setPrevScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollY])

  return (
    <header className='w-full sticky top-0 z-50'>
      <div
        className={`
          w-full 
          transform transition-transform duration-300 ease-in-out 
          ${isOpen ? `translate-y-0` : `-translate-y-full`}
        `}>

        <AnnouncementBar />

        <div
          className='
            w-full 
            flex justify-between items-center py-3 sm:py-4 
            bg-white/80 shadow-sm border-b border-gray-100 
            backdrop-blur-sm
          '>
          <div className='flex justify-between items-center container mx-auto px-8'>

            <div className='flex flex-1 justify-start items-center gap-4 sm:gap-6'>
              <button className='text-gray-700 hover:text-gray-900 md:hidden'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 sm:h-6 sm:w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                </svg>
              </button>

              <nav className='hidden md:flex gap-4 lg:gap-6 text-sm font-medium'>
                <Link href='#'>Shop</Link>
                <Link href='#'>New Arrivals</Link>
                <Link href='#'>Sale</Link>
              </nav>
            </div>

            <Link href='#'>link</Link>

            <div className='flex flex-1 justify-end items-center gap-2 sm:gap-4'>
              <button className='text-gray-700 hover:text-gray-900 hidden sm:block'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>

              <Link href='/auth/sign-in'>Sign In</Link>
              <Link href='/auth/sign-up'>Sign Up</Link>

              <button className='text-gray-700 hover:text-gray-900 relative'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <span className='absolute -top-1 -right-1 bg-black text-white text-[10px] sm:text-xs w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex justify-center items-center leading-none'>0</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header