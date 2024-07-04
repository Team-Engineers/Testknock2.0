import axios from 'axios';
import React, { useState } from 'react';
import { RxArrowRight } from "react-icons/rx";
import { API } from "../../Utils/constants";
import emailIcon from "../../assets/images/Home/Contact/email.svg";
import nameIcon from "../../assets/images/Home/Contact/name.svg";
import phoneIcon from "../../assets/images/Home/Contact/phone.svg";

const HomeContact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        reason: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        reason: ''
    });

    const [notification, setNotification] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: ''
        }));
        setNotification('');
    };

    const validateForm = () => {
        const newErrors = {
            name: '',
            email: '',
            phoneNumber: '',
            reason: ''
        };
        let isValid = true;

        if (!formData.name) {
            newErrors.name = 'Name is required';
            isValid = false;
        }
        if (!formData.email) {
            newErrors.email = 'Email is required';
            isValid = false;
        }
        if (!formData.phoneNumber) {
            newErrors.phoneNumber = 'Phone number is required';
            isValid = false;
        }
        if (!formData.reason) {
            newErrors.reason = 'Project Details is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            try {
                const response = await axios.post(`${API}/contact/submit`, formData);
                console.log("Submitted:", response.data);
                setFormData({
                    name: '',
                    email: '',
                    phoneNumber: '',
                    reason: ''
                });
                setNotification('Details submitted successfully!');
            } catch (error) {
                console.error("Error submitting form:", error);
                setNotification('Error submitting details. Please try again.');
            }
        }
    };

    return (
        <div className='max-w-[1480px] mx-auto pt-10 max-sm:p-5 max-md:p-8 p-20'>
            <div className='text-white'>
                <h1 className='sm:text-7xl text-4xl mb-4'>
                    Let’s talk
                </h1>
                <h1 className='sm:text-lg text-[14px]'>
                    Our team consists of highly qualified specialists with international experience in the field of Web development, mobile development, Product management and design. We provide premium service at affordable prices and are always focused on the success of our clients.
                </h1>
            </div>
            <div className='grid gap-3 sm:gap-20 mt-10 sm:grid-cols-2'>
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
                    {errors.name && <small className="text-red-500">{errors.name}</small>}
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
                    {errors.email && <small className="text-red-500">{errors.email}</small>}
                    <div className='flex items-center gap-3 justify-center'>
                        <img className='w-[20px]' src={phoneIcon} alt="" />
                        <input
                            name="phoneNumber"
                            placeholder='Your phone number'
                            className='focus:outline-none text-white p-2 bg-transparent border-b w-full'
                            type="text"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                        />
                    </div>
                    {errors.phoneNumber && <small className="text-red-500">{errors.phoneNumber}</small>}
                </div>
                <div className='h-full flex flex-col justify-between'>
                    <div className='flex max-sm:pl-[32px] max-sm:mb-8 items-center gap-3 justify-center'>
                        <input
                            name="reason"
                            placeholder='Tell us about your project.'
                            className='focus:outline-none text-white p-2 bg-transparent border-b w-full'
                            type="text"
                            value={formData.reason}
                            onChange={handleInputChange}
                        />
                    </div>
                    {errors.reason && <small className="text-red-500">{errors.reason}</small>}
                    <div className='text-[#FF6333] max-sm:ml-[32px] flex gap-2 rounded-3xl border-[1.2px] w-fit p-1 px-3 border-[#FF6333] items-center'>
                        <button onClick={handleSubmit}>Send</button>
                        <h1><RxArrowRight /></h1>
                    </div>
                    {notification && <p className='text-green-500 mt-4'>{notification}</p>}
                </div>
            </div>
        </div>
    );
};

export default HomeContact;
