import {  useParams } from "react-router-dom";
import thapar from "../../assets/images/Home/Portfolio/thapar.gif"
import cuet from "../../assets/images/Home/Portfolio/cuet.gif"

const Overview = () => {
    const cardData2 = [
        {
            title: 'cuet_testknock',
            image:cuet,
            website:"CUET-Testknock",
            para1:"We are on a mission to empower students with affordable training resources tailored to their needs.",
            para2:"Education for all students is crucial to our company. We are committed to giving them the necessary tools and resources that will enable them achieve their academic goals as well as career aspirations at an affordable cost. Our purpose is to prepare students for a highly competitive world."
        },
        {
            title: 'thapar',
            image:thapar,
            website:"Thapar",
            para1:"We are on a mission to empower students with affordable training resources tailored to their needs.",
            para2:"Education for all students is crucial to our company. We are committed to giving them the necessary tools and resources that will enable them achieve their academic goals as well as career aspirations at an affordable cost. Our purpose is to prepare students for a highly competitive world."
        },
    ];
    
    const { website } = useParams();
    const cardData = cardData2.find((card) => card.title === website);

    return (
        <div className="p-10 max-sm:px-5 max-w-[1450px] mx-auto">
            <div>
                {cardData && (
                    <div>
                       <h1 className="sm:text-3xl text-[25px] mb-10 font-bold text-center text-[#EF81C9]">
                        {cardData.website}
                       </h1>
                       <div className="grid text-white gap-10 sm:grid-cols-2 justify-center items-center">
                        <div className='rounded-2xl  py-5 p-2 bg-[#1E1E20] border-1 border border-[#6b6ba797]'>
                            <img className="sm:w-[50vw] sm:object-cover sm:h-[250px]" src={cardData.image} alt="" />
                        </div>
                        <div className=" xl:text-[22px] mt-2  max-sm:text-[14px]   2xl:text-2xl lg:text-xl flex flex-col  h-full gap-2">
                            <p className=" font-bold mb-10 ">{cardData.para1}</p>
                            <p className="">{cardData.para2}</p>
                        </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Overview;
