import React from 'react'
import Manajemen from '/MSIB IL/Apalagi/src/assets/Layanan/Manajemen.png'

export default function SectionLayananManajemen() {
  return (
    <section className='container flex py-20 gap-16 bg-green-500'>
      {/* layanan manajemen */}
      <div className='flex flex-col gap-10 text-white'>
        <p className='text-3xl'>
          Manajemen Limbah
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ducimus cum corrupti iure earum dolorem? Assumenda nam amet modi ratione? Molestias delectus alias necessitatibus, eveniet, rem nemo, repellat voluptates tempora minima dolorem repudiandae. Voluptatum hic provident expedita laudantium, possimus illum, ipsa, dolorum nulla corrupti molestiae voluptatem reiciendis odit quas. Error earum assumenda eligendi optio, esse tempora aspernatur harum unde id omnis dolores dolore non praesentium similique ducimus aliquam suscipit magnam quibusdam consequuntur maxime quas eaque culpa est. Porro, ipsa architecto?
        </p>
      </div>

      <img src='https://picsum.photos/200/200' alt="" className='w-1/2 h-80 object-cover' />
    </section>
  )
}
