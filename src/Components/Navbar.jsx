import React from 'react'
import Logo from '../assets/Logo/Logo Vertigrow Blok Putih.png'

export default function Navbar() {
  return (
    <section className='bg-green-500'>
        {/* container */}
        <div className='container flex justify-between items-center py-3'>
            {/* logo */}
            <div className='flex items-center gap-5'>
                <img src={Logo} alt="logo vertigrow" className=' h-14 w-14' />
                <h3 className='text-xl text-white font-semibold'>
                    Vertigrow
                </h3>
            </div>

            {/* menu navigasi */}
            <ul className='flex flex-row justify-between items-center gap-10 text-white'>
                <li>
                    Beranda
                </li>
                <li>
                    Tentang Kami
                </li>
                <li>
                    Program Kami
                </li>
                <button className='bg-white rounded-full font-semibold text-green-800 w-20 p-2'>
                    Masuk
                </button>
                <button className='bg-white rounded-full font-semibold text-green-800 w-20 p-2'>
                    Daftar
                </button>
            </ul>
        </div>

    </section>
  )
}

