import React from 'react'
import Logo from '/MSIB IL/Apalagi/src/assets/Logo/Logo Vertigrow Blok.png'
import Foto from '/MSIB IL/Apalagi/src/assets/Vertikultur.png'

export default function SectionLogin() {
  return (
    <section className='container flex py-20 justify-center items-center'>
        <div action="" className='flex items-center py-10'>

            {/* gambar */}
            <img src='https://picsum.photos/200/200' alt="" className='w-1/2 h-96 object-cover' />

            {/* form login */}
            <form className='flex flex-col items-center p-10 gap-5 w-96 h-96 border rounded'>

                {/* ;ogo vertigrow */}
                <img src='https://picsum.photos/200/200' alt="" className=' w-16 h-16 object-cover' />
                <p className='font-semibold text-xl text-green-500'>
                    selamat datang di vertigrow
                </p>

                {/* input username dan password */}
                <div className='flex flex-col gap-5'>
                    <input type="username" placeholder='username' className='p-2 border rounded' />

                    <input type="password" placeholder='password' className='p-2 border rounded' />
                </div>

                <button className='bg-green-500 p-2 rounded text-white'>
                    Login
                </button>
                
            </form>
        </div>
    </section>
  )
}
