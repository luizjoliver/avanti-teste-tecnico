'use client';

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import CarouselItem from './CarouselItem';
import { PiArrowLeftThin, PiArrowRightThin } from 'react-icons/pi';
import type { CarouselItemType } from '@/model/types';

type CarouselItemsProps = {
  CarouselItems: CarouselItemType[]
}

export default function Carousel({ CarouselItems }: CarouselItemsProps) {
  const navigationPrevRef = useRef<HTMLButtonElement>(null);
  const navigationNextRef = useRef<HTMLButtonElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="container mx-auto px-4 gap-2 flex flex-col">
      <div className='container mx-auto px-4 flex items-center justify-between text-blackavanti'>
        <h5 className='font-bold text-xl'>Lançamentos</h5>
        <button className='hover:underline hover:text-blueavanti'>Ver mais</button>
      </div>

      <div className="relative">

        <button
          ref={navigationPrevRef}
          aria-label="Slide anterior"
          className="hidden sm:flex group absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-whiteavanti transition-all hover:bg-blueavanti border border-blueavanti cursor-pointer h-8 w-8 md:h-10 md:w-10 items-center justify-center shadow-sm hover:shadow-md active:scale-95 -ml-4 md:-ml-8"
        >
          <PiArrowLeftThin className="h-4 w-4 md:h-6 md:w-6 text-blueavanti transition-colors group-hover:text-white" />
        </button>


        <button
          ref={navigationNextRef}
          aria-label="Próximo slide"
          className="hidden sm:flex group absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-whiteavanti transition-all hover:bg-blueavanti border border-blueavanti cursor-pointer h-8 w-8 md:h-10 md:w-10 items-center justify-center shadow-sm hover:shadow-md active:scale-95 -mr-4 md:-mr-8"
        >
          <PiArrowRightThin className="h-4 w-4 md:h-6 md:w-6 text-blueavanti transition-colors group-hover:text-white" />
        </button>

        {mounted && (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            slidesPerGroup={1}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              clickable: true,
              el: paginationRef.current,
            }}
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
              swiper.pagination.init();
              swiper.pagination.update();
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 24
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 24
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 24
              },
              1280: {
                slidesPerView: 5,
                slidesPerGroup: 5,
                spaceBetween: 24
              }
            }}
            className="!overflow-hidden px-8"
          >
            {CarouselItems.map((item) => (
              <SwiperSlide key={item.id} className="flex justify-center">
                <CarouselItem item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div ref={paginationRef} className="custom-pagination mt-8 flex justify-center gap-2" />
      </div>
    </div>
  );
}