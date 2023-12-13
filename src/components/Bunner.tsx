"use client";
import Slider from "react-slick";
import image1 from "@/images/image1.jpg";
import image2 from "@/images/image2.webp";
import image3 from "@/images/image3.jpg";
import Image from "next/image";
import BannerText from "./BannerText";
import { PiCaretLeft } from "react-icons/pi";
import { PiCaretRight } from "react-icons/pi";



const Banner = () => {
    const NextArrow = (props:any)=>{
        const {onClick} = props;
        return (
            <div className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2"
            onClick={onClick}>
                <PiCaretLeft/>
            </div>
        );
    };
    const PrevArrow = (props:any)=>{
        const {onClick} = props;
        return (
            <div className="p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2"
            onClick={onClick}>
                <PiCaretRight/>
            </div>
        );
    };
    const settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>

      };
    return (
        <div className="relative">
            <Slider {...settings}>
                <div className="w-full h-full relative">
                    <Image src={image1} alt="image1"
                    className="w-full h-[550px] relative"
                    priority/>
                 <BannerText title="Outware Picks"/>
                </div>
                <div className="w-full h-full relative">
                    <Image src={image2} alt="image1"
                    className="w-full h-[550px] relative"
                    priority/>
                 <BannerText title="Seasonal Offers"/>
                </div>
                <div>
                    <Image src={image3} alt="image3"
                    className="w-full  h-[550px] relative"
                    priority/>
                     <BannerText title="Best for men"/>
                </div>   
            </Slider>
            <div className="absolute w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-10"></div>
        </div>
    )
}

export default Banner;