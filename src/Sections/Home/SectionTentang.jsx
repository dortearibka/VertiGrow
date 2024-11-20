import React from 'react'
import Logo from '/MSIB IL/Apalagi/src/assets/Logo/Logo Vertigrow Blok.png'

export default function SectionTentang() {
  return (
    <section className='bg-neutral-100 container'>
        <div className='flex flex-col items-center py-16 gap-10'>
            <h3 className='text-3xl font-semibold text-green-500'>
                Apa itu Vertigrow?
            </h3>
            <p className='text-xl text-center'>
                Vertigrow merupakan platform pertama yang berfokus pada edukasi pertanian modern, khususnya teknik vertikultur. Tujuan kami adalah memberdayakan anak muda untuk mencapai keberlangsungan sektor agrikultur di Indonesia. 
            </p>
            <button className='bg-green-500 rounded-md w-52 px-2 py-2 text-white text-lg'>
                Pelajari selengkapnya
            </button>
        </div>
       
    </section>
  )
}
