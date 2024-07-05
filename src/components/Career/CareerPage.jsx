import React, { useState } from 'react'
import add from "../../assets/images/add.svg"
import circle from "../../assets/images/circle.svg"
import zigzag from "../../assets/images/zigzag.svg"
import { RxArrowRight } from "react-icons/rx";
import axios from 'axios'; 
import { API } from '../../Utils/constants';

const CareerPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        resume: null,
        subject: '',
        message: ''
    });
    const [notification, setNotification] = useState('');
    const [fileName, setFileName] = useState('No File Chosen');
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        setErrors(prev => ({ ...prev, [name]: '' }));
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

    const validateForm = () => {
        let formErrors = {};
        
        if (!formData.name.trim()) {
            formErrors.name = "Name is required";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            formErrors.email = "Valid email is required";
        }

        const phoneRegex = /^\d{10}$/;
        if (!formData.phoneNumber.trim() || !phoneRegex.test(formData.phoneNumber)) {
            formErrors.phoneNumber = "Valid 10-digit phoneNumber number is required";
        }

        if (!formData.subject.trim()) {
            formErrors.subject = "Subject is required";
        }

        if (!formData.resume) {
            formErrors.resume = "Resume is required";
        }

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        
        const formDataToSend = new FormData();
        for (const key in formData) {
            formDataToSend.append(key, formData[key]);
        }

        try {
            const response = await axios.post(`${API}/contact/resume_submit`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Form submitted successfully:', response.data);
            setFormData({
                name: '',
                email: '',
                phoneNumber: '',
                resume: null,
                subject: '',
                message: ''
            });
            setFileName('No file chosen');
            setNotification('Details submitted successfully!');
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        } catch (error) {
            console.error('Error submitting form:', error);
            setNotification('Error submitting details. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='max-md:px-4'>
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
                <img src={circle} className='absolute max-md:w-[40px] max-md:pt-10 top-0 md:px-20 right-0' alt="" />
                <img src={zigzag} className='absolute md:bottom-0 bottom-[-60px] md:px-20 left-0' alt="" />
                <h1 className='text-2xl max-sm:text-[22px] mb-8 text-[#EF81C9] text-center'>
                    Join us and turn your dream career into a reality.
                </h1>
                <input 
                    placeholder='Your Name' 
                    className={`focus:outline-none text-white pl-0 p-3 bg-transparent border-b-2 border-white sm:w-[60%] w-[100%] my-3 ${errors.name ? 'border-red-500' : ''}`} 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                
                <input 
                    placeholder='Your Email' 
                    className={`focus:outline-none focus:bg-transparent   text-white pl-0 p-3 bg-transparent border-b-2 border-white sm:w-[60%] w-[100%] my-3 ${errors.email ? 'border-red-500' : ''}`} 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                
                <input 
                    placeholder='Your Phone Number' 
                    className={`focus:outline-none text-white pl-0 p-3 bg-transparent border-b-2 border-white sm:w-[60%] w-[100%] my-3 ${errors.phoneNumber ? 'border-red-500' : ''}`} 
                    type="tel" 
                    name="phoneNumber" 
                    value={formData.phoneNumber} 
                    onChange={handleInputChange} 
                />
                {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                
                <div className='sm:w-[60%] w-[100%] relative'>
                    <div className='absolute right-0 text-[8px] text-white mt-2'>
                        <label htmlFor="fileInput" className='text-[#FF6333] flex gap-2 rounded-3xl absolute right-2 border-[1.2px] w-fit p-1 px-3 border-[#FF6333] items-center cursor-pointer'>
                            <span className='whitespace-nowrap'>Choose file</span>
                            <RxArrowRight />
                        </label>
                        <input
                            id="fileInput"
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            accept=".pdf,.doc,.docx"
                        />
                        <h1 className='text-center pr-2 mt-7'>{fileName}</h1>
                    </div>
                    <input 
                        placeholder='Attach Your Resume' 
                        className={`focus:outline-none text-white pl-0 p-3 bg-transparent border-b-2 border-white my-3 w-full ${errors.resume ? 'border-red-500' : ''}`} 
                        type="text" 
                        readOnly 
                        value={fileName !== 'No File Chosen' ? fileName : ''}
                    />
                </div>
                {errors.resume && <p className="text-red-500 text-sm">{errors.resume}</p>}
                
                <input 
                    placeholder='Subject' 
                    className={`focus:outline-none text-white pl-0 p-3 bg-transparent border-b-2 border-white sm:w-[60%] w-[100%] my-3 ${errors.subject ? 'border-red-500' : ''}`} 
                    type="text" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleInputChange} 
                />
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                
                <input 
                    placeholder='Your Message (Optional)' 
                    className='focus:outline-none text-white pl-0 p-3 bg-transparent border-b-2 border-white sm:w-[60%] w-[100%] my-3' 
                    type="text" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleInputChange} 
                />
                
                <button 
                    type="submit" 
                    className='hover:bg-gradient-to-r from-[#B47BFC] via-[#F181C7] to-[#FFA38C] font-bold hover:scale-105 transition-all duration-200 text-white border border-white rounded-md max-sm:text-[13px] p-2 px-10 mt-10 sm:mt-20'
                    disabled={isLoading}
                >
                    {isLoading ? 'Submitting...' : 'Submit'}
                </button>

                
                {notification && <p className='text-green-500 mt-10'>{notification}</p>}

            </form>
        </div>
    )
}

export default CareerPage