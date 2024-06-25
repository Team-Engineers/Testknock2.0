import React from 'react'
import thapar from "../assets/images/Home/Portfolio/thapar.gif"
import cuet from "../assets/images/Home/Portfolio/cuet.gif"
import zigzag from "../assets/images/Home/Portfolio/zigzag.png"
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
import Navbar from '../components/Navbar'

const services = [
    {
        img: cuet,
        website:"CUET-Testknock",
        client:"Our Product",
        date:"30 April 2024",
        location:"New Delhi",
        link: "cuet_testknock"
    },
    {
        img: thapar,
        website:"TIET",
        client:"Thapar Intitute",
        date:"30 April 2023",
        location:"New Delhi",
        link: "thapar"
    }

];
const OurProducts = () => {

    const swiperRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setSlidesPerView(3);
            } else if (window.innerWidth >= 768) {
                setSlidesPerView(2);
            } else if (window.innerWidth >= 550) {
                setSlidesPerView(1);
            } else {
                setSlidesPerView(1);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div>
        <div className='min-h-[90vh] flex  mt-10 items-center overflow-hidden max-w-[1400px] mx-auto'>           
            <div className='w-full '>
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
                    <h1 className="text-5xl mb-14  text-white font-bold text-center  [font-family:'Houschka']">Our Products</h1>
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
                        <SwiperSlide className='mr-4  py-5 rounded-md bg-gradient-t from-[#ffffff] to-[#0E041C] border-1 border border-[#6b6ba797]' key={index}>
                            <Link to={`/portfolio/${service.link}`}>
                            <div className='text-white p-2 px-4 pb-3 font-bold'>
                            <h1 className='text-[#EF81C9] '>Website</h1>
                            <h1 className='text-xl'>{service.website}</h1>
                            </div>
                            <div className=''>
                                <img className=' md:w-[50vw] w-screen  h-[220px] ' src={service.img} alt="" />
                            </div>
                            <div className='grid grid-cols-2 justify-between w-full pt-4'>
                            <div className='text-white p-2 px-4 pb-3 font-bold'>
                            <h1 className='text-[#EF81C9] '>Client</h1>
                            <h1 className='text-lg'>{service.client}</h1>
                            </div>
                            <div className='text-white p-2 px-4 pb-3 font-bold'>
                            <h1 className='text-[#EF81C9] '>Date</h1>
                            <h1 className='text-lg'>{service.date}</h1>
                            </div>
                            <div className='text-white p-2 px-4 pb-3 font-bold'>
                            <h1 className='text-[#EF81C9] '>Location</h1>
                            <h1 className='text-lg'>{service.location}</h1>
                            </div>
                            </div>
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

            </div>
        </div>
</div>
    )
}

export default OurProducts