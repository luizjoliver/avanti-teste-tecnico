import { SingleProductInfoType } from '@/model/types';
import Image, { StaticImageData } from 'next/image';

export interface SingleProductInfoProps {
    ProductInfo : SingleProductInfoType
  }

export default function SingleProductInfo({ ProductInfo }: SingleProductInfoProps) {
  return (
    <>
      <div className='w-full lg:w-[652px] h-[400px] lg:h-full bg-grayavanti-600 flex items-center justify-center'>
        <Image
          src={ProductInfo.imgSrc}
          alt='product'
          className='object-contain h-full w-full md:p-4'
          priority
        />
      </div>
      <div className='w-full lg:w-[calc(100%-652px)] h-full flex flex-col gap-3 p-4 items-center justify-center'>
        <h4 className='uppercase text-blackavanti font-semibold text-xl lg:text-3xl self-start'>
          {ProductInfo.title}
        </h4>
        {ProductInfo.descriptions.map((description, index) => (
          <p key={index} className='text-sm lg:text-base'>
            {description}
          </p>
        ))}
      </div>
    </>
  )
}