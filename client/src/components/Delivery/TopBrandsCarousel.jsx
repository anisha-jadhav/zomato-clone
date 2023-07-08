import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import DeliveryCategoryCard from "./DeliveryCategoryCard";

const TopBrandsCarousel = () => {
  const categories = [
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625164827.png",
      title: "McDonald's",
      time: "24 min",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188211.png",
      title: "Burger King",
      time: "27 min",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617874818.png",
      title: "KFC",
      time: "31 min",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png",
      title: "Pizza Hut",
      time: "30 min",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/3c2a7f7e5fc15add88437a4891a7c229_1675833518.png",
      title: "The Belgian Waffle Co.",
      time: "28 min",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/e56d0581cc1caa2c010a8eb6f9b2321b_1643013207.png",
      title: "Jumboking Indian Burger",
      time: "17 min",
    },
    {
      image:
        "https://b.zmtcdn.com/data/brand_creatives/logos/11f0a050068db77b5b959dd97cc11965_1644900886.png",
      title: "Natural Ice cream",
      time: "20 min",
    },
    
  ];

  const slideConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    modules: [Navigation],
    className: "mySwiper",
    navigation: true,
  };

  return (
    <>
      <h1 className="text-xl mt-4 md:mt-8 md:text-3xl md:font-semibold mb-5">
        Top Brands For You
      </h1>
      <div className="lg:hidden grid grid-cols-3 md:grid-cols-4 gap-3 justify-center">
        {categories.map((food, index) => (
          <DeliveryCategoryCard key={index} {...food} />
        ))}
      </div>
      <div className="hidden lg:block">
        <Swiper {...slideConfig}>
          {categories.map((food, index) => (
            <SwiperSlide key={index}>
              <DeliveryCategoryCard {...food} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TopBrandsCarousel;
