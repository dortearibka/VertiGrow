import React from 'react'
import Profil from '/MSIB IL/Apalagi/src/assets/Vertikultur.png'

export default function SectionProfil() {
  return (
    <section className='container flex py-16 gap-10'>
        <img src='https://picsum.photos/200/200' alt="" className='rounded-lg w-1/2'/>

        {/* teks profil */}
        <div className='flex flex-col gap-5'>
            <p className='text-3xl font-semibold text-green-500'>
                VertiGrow
            </p>
            <p className='text-xl text-justify'>
            Vertigrow merupakan platform pertama yang berfokus pada edukasi pertanian modern, khususnya teknik vertikultur. Tujuan kami adalah memberdayakan anak muda untuk mencapai keberlangsungan sektor agrikultur di Indonesia. 
            </p>
        </div>
    </section>
  )
}
