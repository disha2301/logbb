import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import SwiperCore,{Autoplay} from "swiper";

export default function section1() {

    SwiperCore.use([Autoplay])
    const bg = {
        background: "url('/images/bg.jpg') no-repeat",
        backgroundPosition: "right",
        backgroundSize: "cover"
    }
  return (
   <section className="py-16" style={bg}>
    <div className="container mx-auto md:px-20">
         <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
         <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay:2000
            }}
            >

            <SwiperSlide>{Slide()}</SwiperSlide>
            <SwiperSlide>{Slide()}</SwiperSlide>          
            <SwiperSlide>{Slide()}</SwiperSlide>
            <SwiperSlide>{Slide()}</SwiperSlide>          
            <SwiperSlide>{Slide()}</SwiperSlide>
            ...
    </Swiper>
         
    </div>
   </section>
  )
}

function Slide(){
    return(
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={"/"}><Image src={"/images/image1.jpeg"} width={600} height={600}/></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="category">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Business,Travel</Link>
                    <Link href={"/"} className="text-gray-600 hover:text-gray-800">-July 3, 2023</Link>
                </div>
                <div className="title">
                    <Link href="/" className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">Blockchain technology is an advanced database mechanism</Link>
                    <p className="text-gray-500 py-3">There are four main types of blockchain networks: public blockchains, private blockchains, consortium blockchains and hybrid blockchains.</p>
                    <Author></Author>
                </div>
            </div>
        </div>
    )
}
