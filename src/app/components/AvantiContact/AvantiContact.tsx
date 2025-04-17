import React from 'react'
import Image, { StaticImageData } from 'next/image'

export default function AvantiContactSection({title,imgSrc} :{ title:string; imgSrc:StaticImageData}) {
  return (
    <section className='w-full min-h-[980px] py-10 md:py-0 flex flex-col items-center justify-center gap-10'>

      <div className='w-full h-[300px] md:h-[660px] relative'>
        <Image 
          src={imgSrc} 
          alt='avanti-banner' 
          className='size-full object-cover'
          priority
        />
        <span className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-blueavanti w-full h-[80px] md:h-[100px] lg:h-[132px] flex items-center justify-center text-center px-4 text-white text-sm md:text-lg lg:text-3xl font-light'>
          {title}
        </span>
      </div>

      <div className='w-full max-w-[1260px] px-4 h-full flex flex-col items-center justify-center gap-5'>
        <h3 className='text-blackavanti font-bold text-xl text-center'>
          Cadastre-se na nossa <span className='text-blueavanti'>newsletter</span>
        </h3>

        <form className='w-full h-full md:h-[178px] bg-grayavanti-100 rounded-md flex flex-col md:flex-row items-center justify-center gap-4 p-6'>
          <input 
            type="text" 
            placeholder='Digite o seu Nome' 
            className='w-full md:w-auto bg-whiteavanti py-3 px-6 rounded-md outline-none flex-1'
          />
          <input 
            type="email" 
            placeholder='Digite o seu Email'   
            className='w-full md:w-auto bg-whiteavanti py-3 px-6 rounded-md outline-none flex-1'
          />
          <div className='flex gap-2 flex-row-reverse items-center'>
            <label htmlFor="privacy" className='text-[#656565] font-bold text-xs md:text-sm'>
              Estou de acordo com a <span className='underline'>Política de privacidade</span>
            </label>
            <input 
              type="checkbox" 
              id="privacy"
              className='w-4 h-4'
            />
          </div>
          <button className='w-full md:w-auto bg-blueavanti text-white py-3 px-7 rounded-md'>
            Cadastrar
          </button>
        </form>
      </div>
    </section>
  )
}