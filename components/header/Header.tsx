'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import useHoodieStore from '@/lib/hoodieStore'; // استدعاء Zustand store
import HoodiViewer from './HoodiViewer';
import NameNag from './NameNag';
import Social from './Social';
import Discription from './Discription';

export default function Header() {
  const {
    color,
    currentHoodie,
    isAtStart,
    isAtEnd,
    hoodieList,
    setCurrentHoodie,
  } = useHoodieStore();

  const handleSlideChange = (swiper: any) => {
    setCurrentHoodie(swiper.activeIndex);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center relative">
      <button
        className={`absolute left-5 bottom-[50px] z-10 text-white px-4 py-2 rounded transition-opacity duration-300 ${
          isAtStart ? 'opacity-50' : 'opacity-100'
        }`}
        id="prev-button"
        disabled={isAtStart}
      >
        <FaArrowLeftLong />
      </button>
      <button
        className={`absolute right-5 bottom-[50px] z-10 text-white px-4 py-2 rounded transition-opacity duration-300 ${
          isAtEnd ? 'opacity-50' : 'opacity-100'
        }`}
        id="next-button"
        disabled={isAtEnd}
      >
        <FaArrowRightLong />
      </button>
      <NameNag />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="w-[100%]"
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Pagination, Navigation]}
        allowTouchMove={false}
        navigation={{
          prevEl: '#prev-button',
          nextEl: '#next-button',
        }}
        onSlideChange={handleSlideChange}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': 'red',
          '--swiper-pagination-bottom': '50px',
          '--swiper-pagination-bullet-inactive-color': 'red',
          '--swiper-pagination-bullet-opacity': '0.6',
        } as React.CSSProperties}
      >
        {hoodieList.map((_, index) => (
          <SwiperSlide key={index}>
            <HoodiViewer color={color} image={hoodieList[currentHoodie].image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Discription/>
      <Social />
    </div>
  );
}
