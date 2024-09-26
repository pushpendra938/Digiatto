import Harold from "../../assets/Harold Rose.png"
import person2 from "../../assets/person2.png"
import person3 from "../../assets/person3.png"
import Michael from "../../assets/Michael Smith.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { FiArrowUpRight } from 'react-icons/fi'
import "./Global.css"
import { useEffect, useState } from "react"
import { FaWindowClose } from "react-icons/fa";
import axios from "axios";

function Global() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isModalOpen]);


    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };



    // button
    const [ableToClick, setAbleToClick] = useState(true);

    const handleClick = () => {
        if (!ableToClick) return;
        setAbleToClick(false);

        const splash = document.getElementById("splash");
        splash.style.width = "300px";
        splash.style.height = "300px";

        setTimeout(() => {
            splash.style.opacity = "0";
        }, 400);

        setTimeout(() => {
            splash.style.transitionDuration = "0s";
        }, 1000);

        setTimeout(() => {
            splash.style.width = "0";
            splash.style.height = "0";
            splash.style.opacity = "1";
        }, 1100);

        setTimeout(() => {
            setAbleToClick(true);
            splash.style.transitionDuration = ".9s";
        }, 1200);
    };
    // button



    const [inputvalue, setinputvalue] = useState({
        technology: "",
        email: "",
        phone: "",
        message: "",
    })
    let inputHandel = ((event) => {
        setinputvalue({ ...inputvalue, [event.target.name]: event.target.value })
    })
    let formHandel = ((event) => {
        event.preventDefault();

        axios
            .post(`https://digiatto.onrender.com/expertadvice`, inputvalue)
            .then((res) => {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            })

        setinputvalue({
            technology: "",
            email: "",
            phone: "",
            message: "",
        })
    })
    return (
        <><div className="globalgradient">
            <div className="star 2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px]  xl:pt-[350px]  sm:pt-[80px] pt-[100px] pb-[100px] xl:pb-[450px]  lg:py-[220px] md:py-[150px] text-[white]   relative">
                <div className="mx-auto text-center grid   "  >
                    <h1 className=" xl:text-[44.5px] lg:text-[35px] text-[22px] leading-snug font-medium my-[25px] mt-[15px] "><span className="text-[#0036B0] font-semibold"> Global 1k+ </span> Clients Worked With Us, <br /> Have A Project, Let’s Discuss</h1>

                    <div data-aos="zoom-in-down" className="place-self-center">
                        <button onClick={() => openModal()}
                            className="hover:scale-105 duration-500 place-self-center  xl:text-[17px] lg:text-[15px] text-[10px] sm:text-[13px] px-[8px] lg:px-[10px] rounded lg:py-[8px] py-[3px] 
                            bg-transparent border border-[#0036B0]  flex justify-center items-center gap-x-1  lg:mt-[20px]">
                            Let’s Discuss <FiArrowUpRight className="lg:mt-[2px] mt-[1px] lg:text-[22px] text-[15px] " />
                        </button>

                    </div>
                    {/* modalbox */}
                    {isModalOpen && (

                        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
                            <div className="grid  xl:gap-7 gap-4 modalBoxBg relative  p-3 xl:p-5 rounded-lg xl:w-[30%] lg:w-[40%] md:w-[50%] sm:w-[60%] w-[90%] min-h-[10vh]    xl:mt-[85px] mt-[40px] xl:px-[25px]">

                                <button onClick={closeModal} className="absolute xl:top-5 xl:right-5 top-2 right-2   text-white rounded-lg">
                                    <FaWindowClose className="xl:h-7 xl:w-7 h-4 w-4 fill-[#FCB71B]" />
                                </button>


                                <p className=" text-[19px] place-self-start">Let&apos;s Discuss</p>
                                <hr className="border-0  h-[1px] bg-[#FDB61B]   " />

                                <form action="" className="grid sm:gap-5  gap-3 " onSubmit={formHandel}>
                                    <div className="w-[100%]">
                                        <input type="text" required minLength="3" placeholder="Name" id="technology" name="technology" className="w-full bg-transparent border border-[#003CC4] rounded p-[5px] pl-[10px]" onChange={inputHandel} value={inputvalue.technology} />
                                    </div>

                                    <div className="w-[100%]">
                                        <input type="email" required placeholder="Email" id="email" name="email" className="w-full bg-transparent border border-[#003CC4] rounded p-[5px] pl-[10px]" onChange={inputHandel} value={inputvalue.email} />
                                    </div>

                                    <div className="w-[100%]">
                                        <input type="number" required placeholder="Mobile Number" id="phone" name="phone" className="w-full bg-transparent border border-[#003CC4] rounded p-[5px] pl-[10px]" onChange={inputHandel} value={inputvalue.phone} />
                                    </div>

                                    <div>
                                        <textarea rows="4" required id="message" name="message" className="border border-[#003CC4]  p-[5px] pl-[10px] block  max-h-[200px] w-full text-sm text-gray-900  rounded-lg   focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-[#003CC4]   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message..." onChange={inputHandel} value={inputvalue.message}></textarea>
                                    </div>

                                    <div className="flex gap-x-10 mx-auto">
                                        <button onMouseDown={handleClick}
                                            className=" button btn-grad  sm:text-[17px] text-[12px] sm:px-[15px] px-[7px] rounded xl:py-[7px] py-[5px] place-self-center flex justify-center items-center gap-x-1 ">
                                            Submit Now
                                            <div id="splash"></div>
                                        </button>
                                    </div>
                                </form>


                            </div>
                        </div>
                    )}
                    {/* modalbox */}

                </div>
                <div data-aos="zoom-in-up" data-aos-duration="800"
                    data-aos-easing="ease-in-sine" className="absolute lg:top-[8%] lg:left-[21%] top-[10%] left-[10%] flex lg:gap-7 gap-1">

                    <div className="rounded-full xl:h-[130px] lg:h-[100px] h-[50px] border-8 border-[#3A384F] border-opacity-80 shadow-[0px_0px_32.06px_5px_#73708E5E]">
                        <img className="rounded-full h-[100%] w-[100%] " src={Harold} alt="" />
                    </div>

                    <span className="rounded-xl self-center  lg:pl-[12px] lg:pr-[30px] xl:py-[15px] lg:py-[10px] pl-[8px] pr-[10px] py-[7px] border-1 border-[#3A384F] border-opacity-80 shadow-[0px_0px_30.06px_1px_#73708E5E]">
                        <h5 className="font-semibold tracking-wider text-[#FCB71B] xl:text-[18px] lg:text-[15px] text-[10px] ">Harold Rose</h5>
                        <h6 className="xl:text-[13px] lg:text-[11px] text-[7px] tracking-wider">AB-Sutra Welness</h6>
                    </span>
                </div>
                <div className="hidden md:block">
                    <div data-aos="zoom-in-right" data-aos-duration="800"
                        data-aos-easing="ease-in-sine" className="absolute lg:top-[19%] lg:left-[83%] top-[10%] left-[75%]">
                        <div className="rounded-full xl:h-[100px] lg:h-[80px] h-[45px] inline-block border-8 border-[#3A384F] border-opacity-80 shadow-[0px_0px_32.06px_5px_#73708E5E] opacity-70">
                            <img className="rounded-full xl:h-[84px] lg:h-[64px] xl:w-[84px] lg:w-[64px] h-[30px]  w-[30px]" src={person2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="hidden md:block">
                    <div data-aos="zoom-in-left" data-aos-duration="800"
                        data-aos-easing="ease-in-sine" className="absolute lg:top-[58%] lg:left-[11%] top-[70%] left-[5%]">
                        <div className="rounded-full xl:h-[175px] lg:h-[135px] h-[55px] inline-block border-8 border-[#3A384F] opacity-70 border-opacity-80 shadow-[0px_0px_32.06px_5px_#73708E5E]">
                            <img className="rounded-full xl:h-[160px] lg:h-[120px] xl:w-[160px] lg:w-[120px] h-[40px] w-[40px] " src={person3} alt="" />
                        </div>
                    </div>
                </div>

                <div data-aos="zoom-in-down" data-aos-duration="900"
                    data-aos-easing="ease-in-sine" className="absolute sm:top-[73%] sm:left-[66%] left-[60%] top-[80%] flex lg:gap-7 gap-1">
                    <span className="rounded-xl self-center  text-end xl:pl-[50px] lg:pl-[20px]  pl-[10px] lg:pr-[12px] pr-[5px] xl:py-[15px] lg:py-[10px] py-[5px] border-1  opacity-90 border-[#3A384F] border-opacity-80 shadow-[0px_0px_30.06px_1px_#73708E5E]">
                        <h5 className="font-semibold tracking-wider text-[#FCB71B] xl:text-[18px] lg:text-[15px] text-[10px] ">Michael Smith</h5>
                        <h6 className="xl:text-[18px] lg:text-[14px] text-[10px] tracking-wider">Virtue Care</h6>
                    </span>
                    <div className="rounded-full xl:h-[125px] lg:h-[100px] h-[55px]  border-8 border-[#3A384F] border-opacity-80 opacity-70 shadow-[0px_0px_32.06px_5px_#73708E5E]">
                        <img className="rounded-full h-[100%] w-[100%] " src={Michael} alt="" />
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Global