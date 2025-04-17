import Image from 'next/image'
import productBanner from "../../../assets/productBanner.png"
import ProductInfo from './ProductInfo'
import { productInfosData } from '@/constants'

export default function ProductDescriptionSection() {
  return (
    <section className='bg-grayavanti-100 w-full py-12 lg:py-0 lg:h-[819px] flex items-center justify-center px-4'>
        <div className='w-full max-w-[1177px] lg:h-[728px] flex flex-col lg:flex-row-reverse'>

            <div className='lg:w-1/2 h-96 lg:h-full flex-shrink-0'>
                <Image 
                    src={productBanner} 
                    alt='Product banner'
                    className='w-full h-full object-contain'
                />
            </div>

          
            <div className='lg:w-1/2 p-8 lg:p-16 flex flex-col items-center justify-center gap-6 text-blackavanti'>
               <ProductInfo title='Lorem Ipsum' productInfos={productInfosData}/>
            </div>
        </div>
    </section>
  )
}