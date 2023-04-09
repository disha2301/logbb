import Link from "next/link"
import Image from "next/image"
import Author from "./author"
import fetcher from "@/library/fetcher"
import Spinner from "../spinner"
import Error from "../_child/error"

export default function related() {

    const{data,isLoading,isError} = fetcher('api/posts/post')
    if(isLoading)return <Spinner></Spinner>
    if(isError)return <Error></Error>

  return (
    <section className="pt-20">
        <h1 className="font-bold text-3xl py-10 text-center">Related</h1>
        <div className="flex flex-col gap-10">
            {
                data.map((value,index)=>{
                    <Post key={index} data={value}></Post>
                })
            }
        </div>
    </section>
  )
}
function Post({data}){
    const{id,title, category, img, published, author} = data;

    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={`/posts/${id}`}><Image className="rounded" src={img || "/"} width={300} height={200}/></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="category">
                        <Link href={`/posts/${id}`} className="text-orange-600 hover:text-orange-800">{category || "unknown"}</Link>
                        <Link href={`/posts/${id}`} className="text-gray-600 hover:text-gray-800">&nbsp;-{published || "Unknown"}</Link>
                    </div>
                    <div className="title">
                        <Link href={`/posts/${id}`}><div className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "title"}</div></Link>
                    </div>
                    {author?<Author {...author}></Author>:<></>}
            </div>
        </div>
    )
}
