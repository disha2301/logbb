// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/author';

export default function section3() {
  return (
   <section className="container mx-auto md:px-20 py-16">
    <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

    {/* swiper */}
    <Swiper
    slidesPerView={2}

    >
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
    </Swiper>
   </section>
  )
}
function Post(){
    return(
        <div className="grid">
            <div className="Images">
                <Link href={"/"}><Image src={"/images/image1.jpeg"} width={600} height={400}/></Link>
            </div>

            <div className="info flex justify-center flex-col py-4">
                <div className="category">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Business,Travel</Link>
                    <Link href={"/"} className="text-gray-600 hover:text-gray-800">-July 3, 2023</Link>
                </div>
                <div className="title">
                    <Link href={"/"}><div className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">Blockchain technology is an advanced database mechanism</div></Link>
                </div>
                    <p className="text-gray-500 py-3">There are four main types of blockchain networks: public blockchains, private blockchains, consortium blockchains and hybrid blockchains.</p>
                    <Author></Author>
            </div>
        </div>
    )
}

