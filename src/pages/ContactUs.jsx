import { FaArrowRight, FaPhoneAlt } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { IoMdMail } from "react-icons/io"
import Drop from "../components/common/Dropform"

function ContactUs() {

    // India
    const indiaLatitude = 22.718821427352744;
    const IndiaLongitude = 75.86726553463755;
    const indiaDirection = () => {
        const mapUrl = `https://www.google.com/maps?q=${indiaLatitude},${IndiaLongitude}`;
        window.open(mapUrl, '_blank');
    };

    // UK
    const ukLatitude = 53.34997277742118;
    const ukLngitude = -1.4028725911928752;

    const ukDirection = () => {
        const mapUrl = `https://www.google.com/maps?q=${ukLatitude},${ukLngitude}`;
        window.open(mapUrl, '_blank');
    };
    return (
        <>
            <div className="2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px] md:pt-[80px] sm:pt-[60px] pt-[40px] sm:pb-[50px] pb-[0px]">
                <h1 className="text-[#fcb71b] xl:text-[40px] lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] lg:py-5 md:py-3 py-1">Contact us</h1>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                    <div className="grid lg:gap-6 gap-3 ">

                        <div className="place-self-start lg:w-[80%] md:w-[100%]  sm:w-[70%]  grid grid-cols-[25%_auto] border border-[white] rounded-lg w-full xl:py-4 py-3 xl:hover:-translate-y-3 lg:hover:-translate-y-2 hover:-translate-y-1 duration-500 hover:shadow-[0px_0px_1px_2px_white]">
                            <div className="grid bg-[grey]  xl:w-16 md:w-12 w-10 xl:h-16 md:h-12 h-10 rounded-full place-self-center">
                                <IoMdMail className="xl:w-10 md:w-7 w-5  xl:h-10 md:h-7 h-5 mx-auto  fill-[#030E25] place-self-center" />
                            </div>
                            <div className="max-w-[90%]">
                                <h3 className="xl:text-[25px] md:text-[20px] text-[19px] leading-5 pb-2">Email us</h3>
                                <p className="xl:text-[15px] md:text-[13px] text-[11px] md:pb-[10px] md:leading-5 leading-4">Please feel free to drop us a line. We will respond as soon as possible.</p>
                                <div className="inline-block">
                                    <a className="flex gap-1 text-blue-700 xl:text-[16px] md:text-[12px] text-[11px]" href="mailto:example.com">Leave a message <FaArrowRight className="xl:h-3.5 md:h-2.5 h-3 xl:w-3.5 md:w-2.5 w-2  md:mt-1.5 mt-1 fill-blue-700" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="place-self-start lg:w-[80%] md:w-[100%]  sm:w-[70%]  grid grid-cols-[25%_auto] border border-[white] rounded-lg w-full  xl:py-4 py-3 xl:hover:-translate-y-3 lg:hover:-translate-y-2 duration-500 hover:shadow-[0px_0px_1px_2px_white]">
                            <div className="grid bg-[grey]  xl:w-16 md:w-12 w-10 xl:h-16 md:h-12 h-10 rounded-full place-self-center">
                                <FaPhoneAlt className="xl:w-10 md:w-7 w-5  xl:h-10 md:h-7 h-5 mx-auto  fill-[#030E25] place-self-center" />
                            </div>
                            <div className="max-w-[90%]">
                                <h3 className="xl:text-[25px] md:text-[20px] text-[19px] leading-5 pb-2">Call us</h3>
                                <p className="xl:text-[15px] md:text-[13px] text-[11px] md:pb-[10px] md:leading-5 leading-4">If you need immediate assistance feel free to call us.</p>
                                <div className="inline-block">
                                    <a className="flex gap-1 text-blue-700 xl:text-[16px] md:text-[12px] text-[11px]" href={`tel:${"+91 0123456789"}`}>{"+91 0123456789"}</a>
                                </div>
                            </div>
                        </div>

                        <div className="place-self-start lg:w-[80%] md:w-[100%]  sm:w-[70%]  grid grid-cols-[25%_auto] border border-[white] rounded-lg w-full xl:py-4 py-3 xl:hover:-translate-y-3 lg:hover:-translate-y-2 duration-500 hover:shadow-[0px_0px_1px_2px_white]">
                            <div className="grid bg-[grey]  xl:w-16 md:w-12 w-10 xl:h-16 md:h-12 h-10 rounded-full place-self-center">
                                <FaLocationDot className="xl:w-10 md:w-7 w-5  xl:h-10 md:h-7 h-5 mx-auto  fill-[#030E25] place-self-center" />
                            </div>
                            <div className="max-w-[90%]">
                                <h3 className="xl:text-[25px] md:text-[20px] text-[19px] leading-5 pb-2">Visit us (India)</h3>
                                <p className="xl:text-[15px] md:text-[13px] text-[11px] md:pb-[10px] md:leading-5 leading-4"> Indore, Madhya Pradesh 452010</p>
                                <div className="inline-block">
                                    <a onClick={indiaDirection} className="flex gap-1 text-blue-700 xl:text-[16px] md:text-[12px] text-[11px]" href="">Get Directions <FaArrowRight className="xl:h-3.5 md:h-2.5 h-3 xl:w-3.5 md:w-2.5 w-2  md:mt-1.5 mt-1 fill-blue-700" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="place-self-start lg:w-[80%] md:w-[100%]  sm:w-[70%]  grid grid-cols-[25%_auto] border border-[white] rounded-lg w-full  xl:py-4 py-3 xl:hover:-translate-y-3 lg:hover:-translate-y-2 duration-500 hover:shadow-[0px_0px_1px_2px_white]">
                            <div className="grid bg-[grey]  xl:w-16 md:w-12 w-10 xl:h-16 md:h-12 h-10 rounded-full place-self-center">
                                <FaLocationDot className="xl:w-10 md:w-7 w-5  xl:h-10 md:h-7 h-5 mx-auto  fill-[#030E25] place-self-center" />
                            </div>
                            <div className="max-w-[90%]">
                                <h3 className="xl:text-[25px] md:text-[20px] text-[19px] leading-5 pb-2 ">Visit us (United Kingdom)</h3>
                                <p className="xl:text-[15px] md:text-[13px] text-[11px] md:pb-[10px] md:leading-5 leading-4">United Kingdom</p>
                                <div className="inline-block">
                                    <a onClick={ukDirection} className="flex gap-1 text-blue-700 xl:text-[16px] md:text-[12px] text-[11px]" href="">Get Directions <FaArrowRight className="xl:h-3.5 md:h-2.5 h-3 xl:w-3.5 md:w-2.5 w-2  md:mt-1.5 mt-1 fill-blue-700" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <iframe className="w-full h-full min-h-[350px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d140041.7533791832!2d75.7723110894464!3d22.727534696850732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1727437146710!5m2!1sen!2sin" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />





                    </div>
                </div>
            </div>
            <Drop />

        </>
    )
}

export default ContactUs