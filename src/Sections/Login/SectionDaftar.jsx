import React from 'react'
import Logo from '/MSIB IL/Apalagi/src/assets/Logo/Logo Vertigrow Blok.png'

export default function SectionDaftar() {
  return (
    <section className='container py-20 flex justify-center items-center'>
        
        {/* form daftar */}
        <form className='flex flex-col items-center p-10 gap-5 border rounded border-green-500 w-1/2'>

                {/* ;ogo vertigrow */}
                <img src='https://picsum.photos/200/200' alt="" className=' w-24 h-24 object-cover' />
                <p className='font-semibold text-xl text-green-500'>
                    selamat datang di VertiGrow
                </p>

                {/* input username dan password */}
                <div className='flex flex-col gap-5'>
                    <input type="username" placeholder='username' className='p-2 border rounded' />

                    <input type="email" placeholder='email' className='p-2 border rounded' />

                    <input type="password" placeholder='password' className='p-2 border rounded' />
                </div>

                <button className='bg-green-500 p-2 rounded text-white'>
                    Daftar
                </button>
                
            </form>

    </section>
  )
}
