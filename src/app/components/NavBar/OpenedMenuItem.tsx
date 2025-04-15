import Image from 'next/image'
import React, { ReactNode } from 'react'
import offer from "../../../assets/navbar/offer.png"

export default function OpenedMenuItem({children}:{children:ReactNode}) {
  return (
    <div className='flex size-full items-center'>
   {children}
    <div className='h-[298px] rounded-lg relative ml-auto mr-4 '>
        <Image className='w-full h-full object-cover rounded-lg' src={offer} alt='' />
        <div className='absolute inset-0 flex flex-col items-center justify-center gap-5 text-white bg-black/40 rounded-lg '>
            <p className='text-xl mb-2'>Confira os Produtos <br /> <span className='font-bold'>Que <br /> acabaram<br /> De chegar </span></p>
            <button className='bg-transparent border border-whiteavanti px-4 py-2 rounded-md hover:bg-blue-600 transition uppercase cursor-pointer'>
                ver todos
            </button>
        </div>
    </div>
</div>
  )
}
