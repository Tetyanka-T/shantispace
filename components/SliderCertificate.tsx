"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import s from "../app/styles/common.module.css"

// import required modules
import { Scrollbar } from 'swiper/modules';


const SliderCertificate = () => {
  return (
    <>
    <div className="mx-auto my-4 md:my-6 md:hidden">
       <Swiper
        scrollbar={{
          hide: true,
        }}
        slidesPerView={2}
        spaceBetween={10}
        modules={[Scrollbar]}
      >
        <SwiperSlide>
            <Image src="/1.jpg" alt="" width={200} height={200}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/2.jpg" alt="" width={200} height={200}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/3.jpg" alt="" width={200} height={200}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/4.jpg" alt="" width={200} height={200}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/5.jpg" alt="" width={200} height={200}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/6.jpg" alt="" width={200} height={200}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/7.jpg" alt="" width={200} height={200}/>
        </SwiperSlide>
      </Swiper>
    </div>
    <div className={s.slider_desktop}>
       <Swiper
        scrollbar={{
          hide: true,
        }}
        slidesPerView={4}
        spaceBetween={10}
        modules={[Scrollbar]}
      >
        <SwiperSlide>
            <Image src="/1.jpg" alt="" width={200} height={200}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/2.jpg" alt="" width={200} height={200}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/3.jpg" alt="" width={200} height={200}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/4.jpg" alt="" width={200} height={200}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src="/5.jpg" alt="" width={200} height={200}/>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
    
  );
}

export default SliderCertificate