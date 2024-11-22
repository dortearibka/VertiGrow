import React from 'react'

export default function Footer2() {
  return (
    <section className='bg-teal-800 flex justify-between items-center py-10 text-white'>
        {/* logo dan alamat */}
        <div className='container flex flex-col gap-5'>
            {/* logo */}
            <div className='flex items-center gap-5'>
                <img src="https://picsum.photos/200/200" alt="" className='w-14 h-14' />
                <h3 className='text-xl font-semibold'>
                    VertiGrow
                </h3>
            </div>

            {/* jargon dan alamat */}
            <p>
                Lorem ipsum dolor sit amet.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quo?
            </p>
        </div>

        {/* layanan */}
        <ul className='container flex flex-col gap-5'>
            <li className='text-xl font-semibold'>
                Layanan
            </li>
            <li>
                Edukasi Vertikultur
            </li>
            <li>
                Manajemen Limbah
            </li>
            <li>
                Chatbot AI
            </li>
        </ul>

        {/* kontak */}
        <ul className='container flex flex-col gap-5'>
            <li className='text-xl font-semibold'>
                Kontak
            </li>
            <li className='flex items-center gap-2'>
                <img src="https://picsum.photos/200/200" alt="" className='w-5 h-5' />
                <p>
                    081234567890
                </p>
            </li>
            <li className='flex items-center gap-2'>
                <img src="https://picsum.photos/200/200" alt="" className='w-5 h-5' />
                <p>
                    vertigrow@gmail.com
                </p>
            </li>
            <li className='flex items-center gap-2'>
                <img src="https://picsum.photos/200/200" alt="" className='w-5 h-5' />
                <p>
                    081234567890
                </p>
            </li>
        </ul>

    </section>
  )
}
