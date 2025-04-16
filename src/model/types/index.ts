import { StaticImageData } from "next/image"

export type NavigationItem = {
    id: number
    title: string
    iconImg?: StaticImageData // Importar tipo do Next se necessário
    subTitle?:{
      id:number;
      title?:string;
      items:string[]
    }[],
    isFirst:boolean;
  }

  export type CarouselItemType = {
    id:number ;
    title:string;
    price:number;
    discountPrice:number;
    newProduct:boolean;
    imgSrc:StaticImageData;
    discount:number;
  }