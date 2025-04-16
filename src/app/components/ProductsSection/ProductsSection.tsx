import React from 'react'
import Carousel from '../Carousel/Carousel'
import { CarouselItemType } from '@/model/types'
import Image from 'next/image'
import productMock from "../../../assets/productMock.png"
export type CarouselItemsProps = {
    CarouselItems: CarouselItemType[]
}

export default function ProductsSection({ CarouselItems }: CarouselItemsProps) {
    return (
        <section aria-label="Produtos em destaque" className=" flex flex-col items-center justify-center gap-20 py-12 ">
            <div className='container mx-auto px-4 flex items-center justify-between text-blackavanti'>
                <h5 className='font-bold text-xl'>Lançamentos</h5>
                <button className='hover:underline hover:text-blueavanti'>Ver mais</button>
            </div>
            <Carousel CarouselItems={CarouselItems} />
        </section>
    )
}
