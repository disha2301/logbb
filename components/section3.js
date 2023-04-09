// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/author';
import fetcher from "../library/fetcher";
import Spinner from "./spinner"
import Error from "./_child/error"

export default function section3() {

    const{data,isLoading,isError} = fetcher('api/popular')
    if(isLoading)return <Spinner></Spinner>
    if(isError)return <Error></Error>

  return (
   <section className="container mx-auto md:px-20 py-16">
    <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

    {/* swiper */}
    <Swiper
    breakpoints={{
        640:{
            slidesPerView:2,
            spaceBetween:30
        }
    }}
    >
         {
                data.map((value,index) =>
                (
                    <SwiperSlide key={index}><Post data={value}></Post></SwiperSlide>
                ))
            }
    </Swiper>
   </section>
  )
}
function Post({data}){
    const {id,title,category,img,published,description, author}=data;
    return(
        <div className="grid">
            <div className="Images">
                <Link href={`/posts/${id}`}><Image src={img || '/'} width={600} height={400}/></Link>
            </div>

            <div className="info flex justify-center flex-col py-4">
                <div className="category">
                    <Link href={`/posts/${id}`} className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</Link>
                    <Link href={`/posts/${id}`} className="text-gray-600 hover:text-gray-800">&nbsp;-{published || "Unknown"}</Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`}><div className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">{title || "title"}</div></Link>
                </div>
                    <p className="text-gray-500 py-3">{description || "desc"}</p>
                    {author?<Author {...author}></Author>:<></>}
            </div>
        </div>
    )
}

