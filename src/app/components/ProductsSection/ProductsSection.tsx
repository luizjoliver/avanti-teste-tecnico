import Carousel from '../Carousel/Carousel'
import { CarouselItemType, SingleProductInfoType } from '@/model/types'
import SingleProduct from '../SingleProduct/SingleProduct'

export type CarouselItemsProps = {
    CarouselItems: CarouselItemType[]
    reverse?:boolean;
    SingleProductMock:SingleProductInfoType
}


export default function ProductsSection({ CarouselItems ,SingleProductMock,reverse }: CarouselItemsProps) {
    return (
        <section aria-label="Produtos em destaque" className={` flex flex-col ${reverse ? 'flex-col-reverse' : ''} items-center justify-center gap-20 py-12`}>

            <Carousel CarouselItems={CarouselItems} />

            <SingleProduct SingleProductMock={SingleProductMock} />
            
        </section>
    )
}
