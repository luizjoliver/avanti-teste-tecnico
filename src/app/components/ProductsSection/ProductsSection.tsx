import { ReactNode } from 'react'

export type CarouselItemsProps = {
    children:ReactNode
    reverse?:boolean;
   
}


export default function ProductsSection({ children ,reverse }: CarouselItemsProps) {
    return (
        <section aria-label="Produtos em destaque" className={` flex flex-col ${reverse ? 'flex-col-reverse' : ''} items-center justify-center gap-20 py-12`}>

            {children}
            
        </section>
    )
}
