import React, { useState } from 'react';
import nameIcon from "../../assets/images/Home/Contact/name.svg";
import emailIcon from "../../assets/images/Home/Contact/email.svg";
import phoneIcon from "../../assets/images/Home/Contact/phone.svg";
import { RxArrowRight } from "react-icons/rx";

const HomeContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        project: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log("Submitted:", formData);
        setFormData({
            name: '',
            email: '',
            phone: '',
            project: ''
        });
    };

    return (
        <div className='max-w-[1480px] mx-auto pt-10 p-20'>
            <div className='text-white'>
                <h1 className='text-7xl mb-4'>
                    Let’s talk
                </h1>
                <h1 className='text-lg'>
                    Our team consists of highly qualified specialists with international experience in the field of Web development, mobile development, Product management and design. We provide premium service at affordable prices and are always focused on the success of our clients.
                </h1>
            </div>
            <div className='grid gap-20 mt-10 grid-cols-2'>
                <div className='space-y-4'>
                    <div className='flex items-center gap-3 justify-center'>
                        <img className='w-[20px]' src={nameIcon} alt="" />
                        <input
                            name="name"
                            placeholder='Name'
                            className='focus:outline-none text-white p-2 bg-transparent border-b w-full'
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='flex items-center gap-3 justify-center'>
                        <img src={emailIcon} className='w-[20px]' alt="" />
                        <input
                            name="email"
                            placeholder='Your email'
                            className='focus:outline-none text-white p-2 bg-transparent border-b w-full'
                            type="text"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='flex items-center gap-3 justify-center'>
                        <img className='w-[20px]' src={phoneIcon} alt="" />
                        <input
                            name="phone"
                            placeholder='Your phone number'
                            className='focus:outline-none text-white p-2 bg-transparent border-b w-full'
                            type="text"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className='h-full flex flex-col justify-between'>
                    <div className='flex items-center gap-3 justify-center'>
                        <input
                            name="project"
                            placeholder='Tell us about your project.'
                            className='focus:outline-none text-white p-2 bg-transparent border-b w-full'
                            type="text"
                            value={formData.project}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='text-[#FF6333] flex gap-2 rounded-3xl border-[1.2px] w-fit p-1 px-3 border-[#FF6333] items-center'>
                        <button onClick={handleSubmit}>Send</button>
                        <h1><RxArrowRight /></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContact;
