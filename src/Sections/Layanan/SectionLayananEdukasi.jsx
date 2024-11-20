import React from 'react'
import Edukasi from '/MSIB IL/Apalagi/src/assets/Layanan/Edukasi.png'

export default function SectionLayananEdukasi() {
  return (
    <section className='container flex py-20 gap-16'>
        {/* Layanan Edukasi */}
        <img src='https://picsum.photos/200/200' alt="" className='w-1/2 h-80 object-cover' />

        {/* kalimat */}
        <div className='flex flex-col gap-10'>
            <p className='text-3xl font-semibold text-green-500'>
                Edukasi Vertikultur
            </p>
            <p className=''>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, harum nesciunt! Libero eius exercitationem sint soluta quia eaque quidem veniam deleniti distinctio magni iste rem totam eos cumque possimus nobis animi nisi quod, non, aspernatur et ratione eveniet amet neque! Quod, vel? Placeat alias laboriosam hic quas obcaecati, dolores, et dolorum voluptates cum quia id in, facilis quam repudiandae eius amet? Totam rerum animi fugiat, quibusdam at autem illum modi temporibus nisi iste reprehenderit culpa sit velit expedita vero error?
            </p>
        </div>

    </section>
  )
}
