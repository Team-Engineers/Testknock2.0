import { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

import { Autoplay, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from "../../assets/images/Home/Testimonials/1.svg"
const services = [
    {
        description: "Working with Digimax transformed our online presence. Our SEO rankings soared, increasing our visibility and driving a notable rise in sales.",
        img: image1,
        name: "Mitchell Stark",
        company: "Star Industry",
    },
    {
        description: "Choosing Digimax for our marketing needs was a fantastic decision. We saw our SEO rankings improve, leading to greater visibility and more sales.",
        img: image1,
        name: "Jessica Lane",
        company: "Lane Ventures",
    },
    {
        description: "Digimax's expertise in digital marketing is unmatched. Our SEO performance improved drastically, boosting our visibility and significantly increasing sales.",
        img: image1,
        name: "Samuel Green",
        company: "Green Tech",
    },
    {
        description: "Thanks to Digimax, our SEO rankings went through the roof. This heightened visibility translated directly into a significant boost in our sales.",
        img: image1,
        name: "Linda Brown",
        company: "Brown Enterprises",
    },
    {
        description: "Partnering with Digimax was a smart move for us. Our improved SEO rankings led to enhanced visibility and a notable rise in our sales figures.",
        img: image1,
        name: "James Smith",
        company: "Smith Solutions",
    },
    {
        description: "Digimax's digital marketing strategies worked wonders. Our SEO rankings soared, which increased our online visibility and led to a substantial boost in sales.",
        img: image1,
        name: "Emma White",
        company: "White Innovations",
    }
];

const Testimonials = ({ style }) => {
    const swiperRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setSlidesPerView(3);
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
        <div className='w-full max-w-[1600px] mx-auto mb-10'>
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
            <div className='text-center'>
                <h1 className={`sm:text-2xl text-[20px] text-[#B47BFC] font-bold sm:mb-3 mb-2 text-center  relative`}>
                    TESTIMONIAL
                </h1>
                <h1 className={`sm:text-3xl text-[22px] text-white font-bold mb-10 text-center  relative`}>
                    Client Feedback & Reviews
                </h1>
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
                    <SwiperSlide className='mr-4' key={index}>
                        <div className={`py-8 p-3 mb-4 border border-[#9797976d] rounded-xl   bg-[#2B2338]  min-h-[340px]  `}>
                            <div className='flex justify-between items-center w-full'>
                                <img
                                    src={service.img}
                                    alt={""}
                                    className="w-16 h-16 mx-auto rounded-full "
                                />
                            </div>

                            <h1 className=' mt-6 text-white opacity-55 text-center '>"{service.description}"</h1>
                            <div className="flex flex-col text-xl mt-6 font-bold text-center ">
                                <h5 className=" text-white whitespace-nowrap ">{service.name}</h5>
                                <h6 className=" text-[#C77DEE]">{service.company}</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                {/* <div className=' md:hidden relative my-10 pb-10'>
                    <div className="swiper-button-prev  pl-10  ">
                        <FaChevronLeft />
                    </div>
                    <div className="swiper-button-next pr-10 ">
                        <FaChevronRight />
                    </div>
                </div> */}

            </Swiper>
        </div>
    );
};

export default Testimonials;