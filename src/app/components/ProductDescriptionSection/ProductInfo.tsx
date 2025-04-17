
import type { ProductInfoType } from '@/model/types';
import Image from 'next/image'
import React from 'react'

type ProductInfoProps =  {
    title:string;
    productInfos : ProductInfoType []
    
}

export default function ProductInfo({productInfos, title} :ProductInfoProps) {
    return (
        <>
            <h3 className='text-2xl lg:text-3xl font-bold mb-4'>{title}</h3>

            <div className='space-y-8 w-full'>
                {productInfos.map((product) => (
                    <div key={product.productId} className='flex gap-4 lg:gap-6'>
                        <div className='bg-blueavanti rounded-full min-w-[55px] h-[55px]  flex items-center justify-center flex-shrink-0'>
                            <Image
                                src={product.imgSrc}
                                alt='Icon'
                                width={24}
                                height={24}
                                className='w-7 h-7 '
                            />
                        </div>
                        <p className='text-sm lg:text-base'>
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                            pretium quis, sem.
                        </p>
                    </div>
                ))}
            </div>

        </>
    )
}
