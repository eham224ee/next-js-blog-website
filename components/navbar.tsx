import { navLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='w-full h-24'>
        <div>
            <h1 className='text-3xl font-bold'>Next<span className='text-blue-500'>Pro</span></h1>
        </div>
        <div>
            {navLinks.map((link) => {
                return (
                    <Link key={link.route} href={link.route}>
                        {link.label}
                    </Link>
                )
            })}
        </div>
        <div>
            <Link href='/sign-up'>
                Sign Up
            </Link>
            <Link href='/login'>
                Login
            </Link>
        </div>
    </nav>
  )
}

export default Navbar