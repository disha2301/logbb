import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
import fetcher from "../library/fetcher";
import Spinner from "./spinner"
import Error from "./_child/error"

export default function section4() {

    const{data,isLoading,isError} = fetcher('api/popular')
    if(isLoading)return <Spinner></Spinner>
    if(isError)return <Error></Error>

  return (
    <section className="container mx-auto md:px-20 py-16">
        <div className="grid lg:grid-cols-2">
            <div className="item">
                <h1 className="font-bold text-4xl py-12 text-center">Business</h1>
                <div className="flex flex-col gap-6">
                    {/* POST and using function for that */}
                { data[1] ? <Post data={data[1]}></Post>:<></>}
                { data[2] ? <Post data={data[2]}></Post>:<></>}
                { data[3] ? <Post data={data[3]}></Post>:<></>}
                </div>
            </div>
            <div className="item">
                <h1 className="font-bold text-4xl py-12 text-center">Travel</h1>
                <div className="flex flex-col gap-6">
                    {/* POST and using function for that */}
                    { data[4] ? <Post data={data[4]}></Post>:<></>}
                    { data[5] ? <Post data={data[5]}></Post>:<></>}
                    { data[2] ? <Post data={data[2]}></Post>:<></>}
                </div>
            </div>

            
        </div>
    </section>
  )
}
function Post({data}){
    const {id,title,category,img,published,description, author}=data;
    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={`/posts/${id}`}><Image className="rounded" src={img || '/'} width={300} height={250}/></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="category">
                        <Link href={`/posts/${id}`} className="text-orange-600 hover:text-orange-800">{category || "unknown"}</Link>
                        <Link href={`/posts/${id}`} className="text-gray-600 hover:text-gray-800">&nbsp;-{published || "Unknown"}</Link>
                    </div>
                    <div className="title">
                        <Link href={`/posts/${id}`}><div className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "Unknown"}</div></Link>
                    </div>
                    {author?<Author {...author}></Author>:<></>}
            </div>
        </div>
    )
}
