import type { CarouselItemType } from '@/model/types';
import Image from 'next/image';

type CarouselItemProps = {
  item: CarouselItemType;
};

export default function CarouselItem({ item }: CarouselItemProps) {
  return (
    <article className="group relative flex h-full flex-col border border-gray-200 bg-white transition-shadow rounded-md hover:shadow-lg">
      {item.newProduct && (
        <span className="absolute left-2 top-2 z-10 bg-darkblueavanti px-2 py-1 text-xs  text-white rounded-md font-bold">
          NOVO
        </span>
      )}
      
      <figure className="relative flex h-56 items-center justify-center overflow-hidden p-4">
        <div className="relative h-full w-full">
          <Image
            src={item.imgSrc}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-4"
            style={{ objectFit: 'contain' }}
          />
        </div>
      </figure>

      <div className="flex flex-1 flex-col p-4">
        <h2 className="mb-2 text-lg font-medium text-[#303030]">{item.title}</h2>
        
        <div className="mt-auto space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <span className="block text-sm line-through">
                R$ {item.price.toFixed(2)}
              </span>
              <span className="block text-lg font-bold text-blackavanti">
                R$ {item.discountPrice.toFixed(2)}
              </span>
            </div>
            <span className="bg-greenavanti px-2 py-1 text-sm font-bold text-white">
              {item.discount}% OFF
            </span>
          </div>

          <p className="text-sm font-light">
            Ou em até <span className='font-bold'>10x R$ {(item.discountPrice / 10).toFixed(2)}</span>
          </p>

          <button 
            className="w-full bg-blue-600 py-3 text-white transition-colors hover:bg-blue-700 rounded-md cursor-pointer"
            aria-label={`Comprar ${item.title}`}
          >
            Comprar
          </button>
        </div>
      </div>
    </article>
  );
}