import React from 'react'

export default function SectionHero2() {
  return (
    <section className='container flex py-20 gap-10 '>
      
      {/* Kalimat Hero */}
      <div className='flex flex-col gap-10'>
        <h3 className='text-5xl font-sans font-bold text-teal-800'>
        Bertani Praktis di Lahan Sempit untuk Masa Depan Hijau dan Berkelanjutan
        </h3>
        <p className='text-xl font-semibold'>
        Temukan cara mudah berkebun di area urban dengan teknik vertikultur. Wujudkan impian memiliki kebun sendiri yang ramah lingkungan dan berkelanjutan, tanpa memerlukan lahan luas.
        </p>
        <button className='bg-teal-800 rounded-full w-52 px-2 py-2 text-white text-xl'>
          Gabung Sekarang
        </button>
      </div>
      
      {/* Gambar */}
      <img src='https://picsum.photos/200/200' alt="gambar vertigrow" className='w-1/2 h-1/2 object-cover'/>
    </section>
  )
}
