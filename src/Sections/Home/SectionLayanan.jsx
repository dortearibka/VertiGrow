import React from 'react'
import Edukasi from '/MSIB IL/Apalagi/src/assets/Layanan/Edukasi.png'
import Manajemen from '/MSIB IL/Apalagi/src/assets/Layanan/Manajemen.png'
import Chatbot from '/MSIB IL/Apalagi/src/assets/Layanan/Chatbot.jpg'

export default function SectionLayanan() {
  return (
    <section className='container flex flex-col items-center py-16 gap-16'>
        {/* Teks Layanan */}
        <p className='text-3xl text-green-500 font-semibold'>
            Apa yang bisa kamu dapatkan?
        </p>

        {/* Cardbox layanan */}
        <div className='flex justify-between items-center gap-16'>

            {/* Edukasi Vertikultur */}
            <div className='card bg-green-500 rounded-lg text-white'>
                <div className='card-body'>
                    {/* konten edukasi */}
                    <div className='flex flex-col items-center p-7 gap-5'>
                        <img src='https://picsum.photos/100/100' alt="edukasi vertikultur" className='rounded-lg h-40 w-40 object-cover' />
                        <p className='text-2xl font-semibold'>
                        Edukasi Vertikultur
                        </p>
                        <p className='text-center'>
                            Kami menyediakan materi lengkap seputar teknik pertanian vertikultur.
                        </p>
                    </div>
                    
                </div>

            </div>

            {/* Manajemen Limbah */}
            <div className='card bg-green-500 rounded-lg text-white'>
                <div className='card-body'>
                    {/* konten manajemen */}
                    <div className='flex flex-col items-center p-7 gap-5'>
                        <img src='https://picsum.photos/100/100' alt="edukasi vertikultur" className='rounded-lg h-40 w-40 object-cover' />
                        <p className='text-2xl font-semibold'>
                        Manajemen Limbah
                        </p>
                        <p className='text-center'>
                            Kami memberikan solusi atas permasalahan limbah pertanian yang dihasilkan.
                        </p>
                    </div>
                    
                </div>

            </div>

            {/* Chatbot AI */}
            <div className='card bg-green-500 rounded-lg text-white'>
                <div className='card-body'>
                    {/* konten chatbot */}
                    <div className='flex flex-col items-center p-7 gap-5'>
                        <img src='https://picsum.photos/100/100' alt="edukasi vertikultur" className='rounded-lg h-40 w-40 object-cover' />
                        <p className='text-2xl font-semibold'>
                        Chatbot AI
                        </p>
                        <p className='text-center'>
                            Layanan chatbot AI yang memungkinkan kamu tetap menyelesaikan masalah pertanian.
                        </p>
                    </div>
                    
                </div>

            </div>

        </div>
    </section>
  )
}
