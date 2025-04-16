'use client';

import { carouselItems } from '@/constants';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import CarouselItem from './CarouselItem';
import { PiArrowLeftThin, PiArrowRightThin } from 'react-icons/pi';
import { CarouselItemsProps } from '../ProductsSection/ProductsSection';

export default function Carousel({CarouselItems}:CarouselItemsProps) {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);

  return (
   
      <div className="container mx-auto px-4 ">
        <div className="relative overflow-visible">
        
          <button
            ref={navigationPrevRef}
            aria-label="Slide anterior"
            className="group absolute -left-6 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-whiteavanti transition-colors hover:bg-blueavanti border border-blueavanti cursor-pointer"
           
          >
            <PiArrowLeftThin className="h-8 w-8 text-blueavanti transition-colors group-hover:text-white" />
          </button>

          <button
            ref={navigationNextRef}
            aria-label="Próximo slide"
            className="group absolute -right-6 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-whiteavanti transition-colors hover:bg-blueavanti border border-blueavanti"
            
          >
            <PiArrowRightThin className="h-8 w-8 text-blueavanti transition-colors group-hover:text-white cursor-pointer" />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={5}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            onInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 5,
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 5,
              },
              1280: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
            }}
            className="mx-8" // Adiciona margem para os botões
          >
            {CarouselItems.map((item) => (
              <SwiperSlide key={item.id}>
                <CarouselItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Paginação */}
          <div className="custom-pagination mt-8 flex justify-center gap-2 " />
        </div>
      </div>
    
  );
}