import React from 'react'
import thapar from "../../assets/images/Home/Portfolio/thapar.gif"
import cuet from "../../assets/images/Home/Portfolio/cuet.gif"
import zigzag from "../../assets/images/Home/Portfolio/zigzag.png"
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

const services = [
    {
        img: cuet,
        link: "cuet_testknock"
    },
    {
        img: thapar,
        link: "thapar"
    }

];
const Portfolio2 = () => {

    const swiperRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setSlidesPerView(2);
            } else if (window.innerWidth >= 768) {
                setSlidesPerView(3);
            } else if (window.innerWidth >= 550) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <>
           
            <div className='w-full mb-10'>
                <style jsx>{`
        .custom-pagination .swiper-pagination-bullet {
          background-color: #B47BFC;
          opacity: 0.5;
          width: 10px; 
          height: 10px; 
          margin: 0 5px;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background-color: #C77DEE;
          opacity: 1;
        }
      `}</style>
                 <div>
                    <h1 className="text-6xl mb-14  text-white font-bold text-center  [font-family:'Houschka']">Our Awesome Portofolio</h1>
                </div>
                <Swiper
                    direction={'horizontal'}
                    slidesPerView={slidesPerView}
                    spaceBetween={30}
                    mousewheel={{ invert: false, forceToAxis: true }}
                    pagination={{ clickable: true, dynamicBullets: true, }}
                    modules={[Mousewheel, Navigation, Autoplay, Pagination]}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper custom-pagination pb-10 p-4"
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {services.map((service, index) => (
                        <SwiperSlide className='mr-4 rounded-2xl py-5 p-2 bg-[#1E1E20] border-1 border border-[#6b6ba797]' key={index}>
                            <Link to={`portfolio/${service.link}`} className=''>
                                <img className='rounded-2xl w-[50vw]  h-[280px] ' src={service.img} alt="" />
                            </Link>
                        </SwiperSlide>
                    ))}
                    <div className=' md:hidden relative my-10 pb-10'>
                        <div className="swiper-button-prev  pl-10  ">
                            <FaChevronLeft />
                        </div>
                        <div className="swiper-button-next pr-10 ">
                            <FaChevronRight />
                        </div>
                    </div>

                </Swiper>
                <img className='absolute left-0 pl-10 pt-10' src={zigzag} alt="" />

            </div>
        </>

    )
}

export default Portfolio2