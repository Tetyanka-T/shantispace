"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import './styles.css';

// import required modules
import { Scrollbar } from 'swiper/modules';

const SliderCertificate = () => {
  return (
    <div className="mt-4 md:mt-6">
       <Swiper
        scrollbar={{
          hide: true,
        }}
        slidesPerView={2}
        spaceBetween={10}
        modules={[Scrollbar]}
        className="mySwiper"
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
  );
}

export default SliderCertificate