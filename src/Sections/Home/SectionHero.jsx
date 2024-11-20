import React from 'react'
import Hero from '/MSIB IL/Apalagi/src/assets/Vertikultur.png'

export default function SectionHero() {
  return (
    <section className='container flex py-20 gap-10 '>
      
      {/* Kalimat Hero */}
      <div className='flex flex-col gap-10'>
        <h3 className='text-5xl font-sans font-bold text-green-500'>
          Selamat Datang di Vertigrow
        </h3>
        <p className='text-2xl font-semibold text-neutral-600'>
          Ayo bergabung bersama kami dalam mewujudkan masa depan pertanian Indonesia yang lebih produktif dan berkelanjutan.
        </p>
        <button className='bg-green-500 rounded-md w-52 px-2 py-2 text-white text-xl'>
          Ayo bergabung!
        </button>
      </div>
      
      {/* Gambar */}
      <img src='https://picsum.photos/200/200' alt="gambar vertigrow" className='w-1/2 rounded-xl'/>
    </section>
  )
}
