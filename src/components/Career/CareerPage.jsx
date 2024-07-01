import React, { useState } from 'react'
import add from "../../assets/images/add.svg"
import circle from "../../assets/images/circle.svg"
import zigzag from "../../assets/images/zigzag.svg"
import { RxArrowRight } from "react-icons/rx";

const CareerPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        resume: null,
        subject: '',
        message: ''
    });

    const [fileName, setFileName] = useState('No File Chosen');
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prevState => ({
                ...prevState,
                resume: file
            }));
            setFileName(file.name);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted:', formData);
        setFormData({
            name: '',
            email: '',
            phone: '',
            resume: null,
            subject: '',
            message: ''
        });
        setFileName('No file chosen');
    };

    return (
        <div className=' max-md:px-4'>
            <div className='text-white relative mt-10 font-bold space-y-5 text-center'>
                <img className=' absolute md:px-20 max-sm:w-[30px] max-sm:pt-10 scale-125 md:rotate-12 top-0' src={add} alt="" />
                <h1 className='md:text-5xl text-[5.5vw]'>
                    Dream Job Awaits: See Openings!
                </h1>
                <h1 className='md:text-2xl text-[3.5vw] opacity-80'>
                    We’re more than just a workplace.
                </h1>
                <h1 className='md:text-2xl text-[4.5vw] opacity-80'>
                    We’re a Family
                </h1>
                <h1 className='opacity-80 max-sm:text-[13px]  md:px-20'>Craft the Career You Deserve.  Finding a fulfilling job can feel like an uphill battle. We get it! That's why we're hereto make your journey smoother. Explore our
                    open positions and discover meaningful work with a supportive team.  We foster an inspiring and positive work environment that empowers you to excel, not
                    just a place to clock in and out.
                </h1>
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col relative justify-center items-center mb-20 my-10'>
                <img src={circle} className=' absolute max-md:w-[40px] max-md:pt-10 top-0 md:px-20 right-0' alt="" />
                <img src={zigzag} className=' absolute md:bottom-0 bottom-[-60px] md:px-20 left-0' alt="" />
                <h1 className='text-2xl  max-sm:text-[22px] mb-8 text-[#EF81C9] text-center'>
                    Join us and turn your dream career into a reality.
                </h1>
                <input placeholder='Your Name' className='focus:outline-none text-white pl-0 p-3 bg-transparent border-b-2 border-white  sm:w-[60%] w-[100%]  my-3' type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                <input placeholder='Your Email' className='focus:outline-none text-white pl-0 p-3 bg-transparent border-b-2 border-white  sm:w-[60%] w-[100%]  my-3' type="email" name="email" value={formData.email} onChange={handleInputChange} required />
                <input placeholder='Your Phone Number' className='focus:outline-none text-white pl-0 p-3 bg-transparent border-b-2 border-white  sm:w-[60%] w-[100%]  my-3' type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />
                <div className=' sm:w-[60%] w-[100%] relative'>
                    <div className=' absolute right-0 text-[8px] text-white mt-2'>
                        <label htmlFor="fileInput" className='text-[#FF6333] flex gap-2 rounded-3xl absolute  right-2 border-[1.2px] w-fit p-1 px-3 border-[#FF6333] items-center cursor-pointer'>
                            <span className=' whitespace-nowrap' >Choose file</span>
                            <RxArrowRight />
                        </label>
                        <input
                            id="fileInput"
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                        />
                        <h1 className='text-center pr-2  mt-7'>{fileName}</h1>
                    </div>
                    {fileName === 'No File Chosen' ? (
                        <input placeholder='Attach Your Resume' className='focus:outline-none text-white pl-0 p-3 bg-transparent border-b-2 border-white my-3 w-full' type="text" readOnly />
                    ) : (
                        <input value={fileName} readOnly className='focus:outline-none text-white pl-0 p-3 bg-transparent border-b-2 border-white my-3 w-full' type="text" />
                    )}
                </div>
                <input placeholder='Subject' className='focus:outline-none text-white pl-0 p-3 bg-transparent border-b-2 border-white  sm:w-[60%] w-[100%]  my-3' type="text" name="subject" value={formData.subject} onChange={handleInputChange} required />
                <input placeholder='Your Message (Optional)' className='focus:outline-none text-white pl-0 p-3 bg-transparent border-b-2 border-white  sm:w-[60%] w-[100%]  my-3' type="text" name="message" value={formData.message} onChange={handleInputChange} />
                <button type="submit" className='hover:bg-gradient-to-r from-[#B47BFC] via-[#F181C7] to-[#FFA38C] font-bold hover:scale-105 transition-all duration-200 text-white border border-white rounded-md max-sm:text-[13px] p-2 px-10 mt-10 sm:mt-20'>Submit</button>
            </form>
        </div>
    )
}

export default CareerPage