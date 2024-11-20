import React from 'react'

export default function SectionKeunggulan() {
  return (
    <section className='container bg-neutral-100 flex flex-col items-center py-16 gap-16'>
        {/* Teks keunggulan */}
        <p className='text-3xl font-semibold text-green-500'>
            Kenapa harus memilih kami?
        </p>

        {/* cardbox */}
        <div className='flex flex-col items-center'>
            {/* cardbox keunggulan baris 1 */}
            <div className='flex items-center gap-10'>
                {/* jumlah materi */}
                <div className='border-2 rounded-xl border-green-500 flex flex-col items-center justify-center p-5 gap-5 w-80 h-80'>
                    <img src="https://picsum.photos/100/100" alt="" />
                    <p className='text-xl text-center'>
                        500+ materi tanaman yang bisa diakses
                    </p>
                </div>

                {/* aksesibilitas yang mudah */}
                <div className='border-2 rounded-xl border-green-500 flex flex-col items-center justify-center p-5 gap-5 w-80 h-80'>
                    <img src="https://picsum.photos/100/100" alt="" />
                    <p className='text-xl text-center'>
                    aksesibilitas yang ramah user
                    </p>
                </div>

                {/* materi yang lengkap */}
                <div className='border-2 rounded-xl border-green-500 flex flex-col items-center justify-center p-5 gap-5 w-80 h-80'>
                    <img src="https://picsum.photos/100/100" alt="" />
                    <p className='text-xl text-center'>
                    materi yang lengkap dan terstruktur
                    </p>
                </div>

            
            </div>

            {/* cardbox keunggulan baris 2 */}
        </div>
        
    </section>
  )
}
