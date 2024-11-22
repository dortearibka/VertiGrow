import React from 'react'

export default function Navbar2() {
  return (
    <section className='container flex justify-between items-center py-3'>
        {/* Logo */}
        <div className='flex items-center gap-5'>
            <img src="https://picsum.photos/200/200" alt="logo vertigrow" className='w-14 h-14' />
            <h3 className='text-xl font-semibold text-teal-800'>
                VertiGrow
            </h3>
        </div>

        {/* Navbar halaman */}
        <ul className='flex items-center gap-10 text-lg font-semibold text-teal-800'>
            <li>
                Home
            </li>
            <li>
                About
            </li>
            <li>
                Services
            </li>
        </ul>

        {/* Navbar login */}
        <div className='flex items-center gap-10'>
            <button className='bg-teal-800 rounded-full w-24 p-2 text-white'>
                Sign Up
            </button>
            <button className='bg-teal-800 rounded-full w-24 p-2 text-white'>
                Sign In
            </button>
        </div>

    </section>
  )
}
