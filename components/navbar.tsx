'use client '

import { navLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'
import { Button, buttonVariants } from './ui/button'
import { ThemeToggle } from './themeToggle'

const Navbar = () => {
  return (
    <nav className='w-full h-24 flex items-center justify-between px-4'>
        <div>
            <Link href='/'>
            <p className='text-4xl font-bold'>Next<span className='text-blue-500'>Pro</span></p>
            </Link>
        </div>
        <div>
            {navLinks.map((link) => {
                return (
                    <Link className={buttonVariants({ variant: 'ghost',
                        className: 'mx-2 p-4 text-xl'
                    })}  key={link.route} href={link.route}>
                            {link.label}
                    </Link>
                )
            })}
        </div>
        <div className='flex items-center gap-2'>
           <Button className='hover:bg-olive-400'>
             <Link href='/sign-up'  className='text-[18px]'>
                Sign Up
            </Link>
           </Button>
            <Link className={buttonVariants({ variant: 'ghost', 
               className: 'p-4 text-[18px]'
            })} href='/login'>  
                Login
            </Link>
            <ThemeToggle />
        </div>
    </nav>
  )
}

export default Navbar