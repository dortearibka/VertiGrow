import React from 'react'
import Logo from '../assets/Logo/Logo Vertigrow Blok Putih.png'

export default function Footer() {
  return (
    <section className='bg-green-500 text-white'>
      {/* container */}
      <div className='container flex justify-between py-10'>
        {/* logo dan alamat */}
        <div className='flex flex-col gap-5'>
          <div className='flex gap-5'>
            <img src={Logo} alt="" className=' w-16 h-16'/>
            <p className='text-2xl font-bold'>
              VertiGrow <br />
              slogan dan jargon
            </p>
          </div>
          <p className='text-lg'>
            alamat Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Eligendi, quos?
          </p>
        </div>

        {/* navbar */}
        <div className='flex flex-col text-lg gap-2'>
          <p className='text-xl font-semibold'>
            Tentang Kami
          </p>
          <p>
            Visi misi
          </p>
          <p>
            Tim Pengembang
          </p>
          <p>
            Layanan Kami
          </p>
        </div>

        {/* Kontak */}
        <div className='flex flex-col text-lg gap-2'>
          <p className='text-xl font-semibold'>
            Kontak 
          </p>
          <p>
            VertiGrow@gmail.com
          </p>
          <p>
            Instagram : VertiGrow
          </p>
          <p>
            Facebook : VertiGrow
          </p>
          <p>
            081234567890
          </p>
        </div>
      </div>

    </section>
  )
}

