import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from "react-router-dom";
import image1 from "../../assets/images/Portfolio/1.svg"
import image2 from "../../assets/images/Portfolio/2.svg"
import image3 from "../../assets/images/Portfolio/3.svg"
import image4 from "../../assets/images/Portfolio/4.svg"
import image5 from "../../assets/images/Portfolio/5.svg"
import image6 from "../../assets/images/Portfolio/6.svg"
import left from "../../assets/images/Portfolio/left.png"
import right from "../../assets/images/Portfolio/right.png"

const VerticalTimeline = () => {
    const { website } = useParams();
    const timelineDatasets = {
        cuet_testknock: [
            {
                text: "Access a wide range of practice tests covering various entrance and higher education exams in India, helping you familiarize yourself with the exam format and question types.",
                title: "Comprehensive Practice Tests",
                subtitle: null,
                image: image1,
            },
            {
                text: "Take simulated mock tests that mimic the real exam environment, allowing you to gauge your preparedness and identify areas for improvement before the actual exam.",
                title: "Mock Tests",
                subtitle: null,
                image: image2,
            },
            {
                text: "Receive immediate feedback with instant scorecards after completing practice tests and mock tests, enabling you to track your progress and focus on areas that require more attention.",
                title: "Instant Scorecards",
                subtitle: null,
                image: image3,
            },
            {
                text: "Explore comprehensive syllabi for every subject, ensuring that you study and practice all relevant topics required for your exams effectively.",
                title: "Detailed Syllabus Coverage",
                subtitle: null,
                image: image4,
            },
            {
                text: "Enjoy a personalized learning experience with tailored recommendations based on your performance in practice tests, helping you focus your efforts.",
                title: "Personalized Learning Experience",
                subtitle: null,
                image: image5,
            },
            {
                text: "Study at your own pace and convenience with 24/7 access to the platform from anywhere with an internet connection, allowing you to fit your exam preparation around your schedule.",
                title: "Flexibility and Convenience",
                subtitle: null,
                image: image6,
            },
        ],
        thapar: [
            {
                text: "Access a broad range of practice exams covering various entrance and higher education tests in India, helping you get familiar with the exam structure and question formats.",
                title: "Extensive Practice Exams",
                subtitle: null,
                image: image3,
            },
            {
                text: "Take realistic mock exams that replicate the actual exam conditions, allowing you to measure your readiness and identify areas for enhancement before the real test.",
                title: "Simulated Mock Exams",
                subtitle: null,
                image: image5,
            },
            {
                text: "Receive instant feedback with immediate scorecards after completing practice exams and mock exams, enabling you to monitor your progress and concentrate on areas needing more attention.",
                title: "Immediate Scorecards",
                subtitle: null,
                image: image4,
            },
            {
                text: "Explore thorough syllabi for each subject, ensuring that you study and practice all pertinent topics required for your exams effectively.",
                title: "Comprehensive Syllabus Coverage",
                subtitle: null,
                image: image6,
            },
            {
                text: "Enjoy a tailored learning experience with personalized recommendations based on your performance in practice exams, helping you focus your efforts on areas where you need the most improvement.",
                title: "Tailored Learning Experience",
                subtitle: null,
                image: image1,
            },
            {
                text: "Study at your own pace and convenience with 24/7 access to the platform from anywhere with an internet connection, allowing you to fit your exam preparation around your schedule.",
                title: "Convenience and Flexibility",
                subtitle: null,
                image: image2,
            },
        ]
    };
    const timelineData = timelineDatasets[website] || timelineDatasets.cuet_testknock;

    const decodeWebsiteName = (name) => {
        if (name === 'cuet_testknock') {
            return 'CUET-TestKnock';
        } else {
            return name.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        }
    };
    const WebsiteName = decodeWebsiteName(website);

    return (
        <div className=" mx-auto max-w-[1480px] p-8 px-2 sm:px-4">
            <div>
                <h1 className='text-white text-[25px] sm:text-4xl font-bold  mb-20 text-center'>What are you getting from {WebsiteName}?</h1>
            </div>
            <div className="relative  max-sm:h-[1050px] overflow-hidden max-sm:mb-10">
                <div className="absolute max-sm:hidden left-1/2 z-[0] transform -translate-x-1/2 w-[1.5px] h-full bg-gray-200"></div>
                {timelineData.map((item, index) => (
                    <>
                        <div key={index} className="mb-16 max-sm:hidden flex justify-center items-center">
                            <motion.div
                                className="w-[45%] relative  flex"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                {index % 2 === 0 ? (
                                    <div className="flex items-center w-full">
                                        <div className="p-6 h-[160px] flex justify-center items-center rounded-l-lg text-white flex-grow">
                                            <div className='absolute p-3 z-[1]'>
                                                <h3 className="md:text-xl font-bold mb-2">{index + 1}. {item.title}</h3>
                                                <p className='max-md:text-[14px]'>{item.text}</p>
                                            </div>
                                            <img className='absolute h-[160px]' src={left} alt="" />
                                        </div>

                                    </div>
                                ) : (
                                    <div className="flex   items-center  justify-end w-full">
                                        <img src={item.image} alt={item.title} className="w-32 h-32 object-cover rounded-lg" />
                                    </div>
                                )}
                            </motion.div>

                            <motion.div
                                className="w-[4%] flex relative justify-center"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="w-5 h-5 bg-blue-500  rounded-full  "></div>
                            </motion.div>

                            <motion.div
                                className="w-[45%] relative  flex"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                {index % 2 === 0 ? (
                                    <div className="flex justify-start  w-full">
                                        <img src={item.image} alt={item.title} className="  h-32  rounded-lg" />
                                    </div>
                                ) : (
                                    <div className="flex items-center w-full">
                                        <div className="p-6 h-[160px] flex justify-center items-center rounded-l-lg text-white flex-grow">
                                            <div className='absolute p-3 pl-5 z-[1]'>
                                                <h3 className="md:text-xl font-bold mb-2">{index + 1}. {item.title}</h3>
                                                <p className='max-md:text-[14px]'>{item.text}</p>
                                            </div>
                                            <img className='absolute h-[160px]' src={right} alt="" />
                                        </div>

                                    </div>
                                )}
                            </motion.div>
                        </div>
                        <div key={index} className="mb-16 flex sm:hidden justify-center items-center">
                            <motion.div
                                className="relative w-[50px] h-[50px]   flex"
                                initial={{ opacity: 0, x: -100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >

                                <div className="flex   items-center relative z-10  justify-end w-full">
                                    <img src={item.image} alt={item.title} className="w-[100px] object-fit h-32  rounded-lg" />
                                </div>

                            </motion.div>
                            <motion.div
                                className="w-[4%] h-full mx-2 flex relative justify-center"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="absolute  top-[-40px] z-[0] transform -translate-x-1/2 w-[1.5px] h-[90vh] bg-gray-200"></div>
                                <div className="w-3 h-3 z-[1] bg-blue-500  rounded-full  "></div>
                            </motion.div>
                            <motion.div
                                className="relative w-[300px]  flex"
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >

                                <div className="flex items-center w-full">
                                    <div className="p-6 h-[120px] flex justify-center items-center rounded-l-lg text-white flex-grow">
                                        <div className='absolute p-3 pl-5 z-[1]'>
                                            <h3 className="md:text-xl text-[13px] font-bold sm:mb-2">{index + 1}. {item.title}</h3>
                                            <p className='max-md:text-[11px]'>{item.text}</p>
                                        </div>
                                        <img className='absolute h-[120px]' src={right} alt="" />
                                    </div>

                                </div>

                            </motion.div>
                        </div>
                      
                    </>
                ))}
            </div>
        </div>
    );
};

export default VerticalTimeline;