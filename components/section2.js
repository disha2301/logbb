
import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
import fetcher from "../library/fetcher"
import Spinner from "./spinner"
import Error from "./_child/error"

export default function section2() {
    const{data,isLoading,isError} = fetcher('api/posts/post')
    if(isLoading)return <Spinner></Spinner>
    if(isError)return <Error></Error>


  return (
    <section className="container mx:auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
        
        {/* grid column */}
        <div className="grid md:grid-cols-3 lg:grid-col-3 gap-14">
          {
            data.map((value,index)=>(
                <Post data={value} key={index}></Post>

            ))
          }
        </div>
    </section>
  )
}
function Post({ data }){
    const {id,title,subtitle,category,img,published,author}=data;
    return(
        <div className="item">
            <div className="Images">
                <Link href={"/"}><Image src={img || "/"} className="rounded" width={500} height={350}/></Link>
            </div>

            <div className="info flex justify-center flex-col py-4">
                <div className="category">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</Link>
                    <Link href={"/"} className="text-gray-600 hover:text-gray-800">{published || "Unknown"}</Link>
                </div>
                <div className="title">
                    <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "title"}</Link>
                </div>
                    <p className="text-gray-500 py-3">{subtitle || "subtitle"}</p>
                    {author?<Author></Author>:<></>}
            </div>
        </div>
    )
}
