import React from 'react'
import Nizam from '/MSIB IL/Apalagi/src/assets/Foto.png'
import Vertikultur from '/MSIB IL/Apalagi/src/assets/Tentang/Vertikultur.png'

export default function SectionVertikultur() {
  return (
    <section className='bg-green-500'>
        {/* container */}
        <div className='container flex py-16 gap-20 text-white'>
          <div className='flex flex-col gap-10'>
            <p className='text-3xl font-semibold'>
              Apa itu vertikultur?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas neque voluptatem eos voluptatibus. Itaque dolorem similique mollitia nulla nemo tenetur doloremque enim consequatur, ab et error? Quibusdam, nihil optio? Provident, doloremque velit. Tempore ipsam similique quod harum iure quisquam nulla perferendis? Cumque praesentium porro voluptatum voluptate vero recusandae deleniti rerum assumenda doloremque aspernatur! Quam consequuntur reprehenderit fuga ratione itaque, praesentium qui fugiat, dolorum neque enim nulla nostrum. Odit quasi fugit veritatis provident, distinctio fuga voluptatem excepturi eveniet! Qui laudantium veritatis quos enim nemo quasi quaerat cum ullam, aut maxime dolorum nesciunt voluptates similique quia porro officia explicabo possimus nihil culpa!
            </p>
          </div>
          
          <img src='https://picsum.photos/200/200' alt="" className='w-1/2 h-96 object-cover' />
        </div>
    </section>
  )
}
