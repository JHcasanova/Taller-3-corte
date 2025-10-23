"use client";

import React, { useState } from "react";
import { Swiper as SwiperObject } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./slideshow.css";

import Image from "next/image";

interface Props {
  images: string[];
  title: string;
  className?: string;
}

export const SlideShowProduct = ({ images, title, className }: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  return (
    <div className={className}>
      <Swiper
       
    

        navigation={true}
        autoplay={{delay:2500}}
        modules={[FreeMode, Navigation ,Autoplay, Navigation]}
        className="mySwiper2"
      >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <Image width={600}
            height={500}
            src={`/products/${image}`}
            alt={title}
            className="object-fill" />
          </SwiperSlide>
        ))}
      </Swiper>
       
    </div>

  );

  };
