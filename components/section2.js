
import Image from "next/image"
import Link from "next/link"
import Author from "./_child/author"
import getPost from "../library/helper"

export default function section2() {
    console.log(process.env.baseURL)
  return (
    <section className="container mx:auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>
        
        {/* grid column */}
        <div className="grid md:grid-cols-3 lg:grid-col-3 gap-14">
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}
        </div>
    </section>
  )
}
function Post(){
    return(
        <div className="item">
            <div className="Images">
                <Link href={"/"}><Image src={"/images/image1.jpeg"} className="rounded" width={500} height={350}/></Link>
            </div>

            <div className="info flex justify-center flex-col py-4">
                <div className="category">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Business,Travel</Link>
                    <Link href={"/"} className="text-gray-600 hover:text-gray-800">-July 3, 2023</Link>
                </div>
                <div className="title">
                    <Link href="/" className="text-xl font-bold text-gray-800 hover:text-gray-600">Blockchain technology is an advanced database mechanism</Link>
                </div>
                    <p className="text-gray-500 py-3">There are four main types of blockchain networks: public blockchains, private blockchains, consortium blockchains and hybrid blockchains.</p>
                    <Author></Author>
            </div>
        </div>
    )
}
