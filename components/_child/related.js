import Link from "next/link"
import Image from "next/image"
import Author from "./author"

export default function related() {
  return (
    <section className="pt-20">
        <h1 className="font-bold text-3xl py-10 text-center">Related</h1>
        <div className="flex flex-col gap-10">
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
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={"/"}><Image className="rounded" src={"/images/image1.jpeg"} width={300} height={200}/></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="category">
                        <Link href={"/"} className="text-orange-600 hover:text-orange-800">Business,Travel</Link>
                        <Link href={"/"} className="text-gray-600 hover:text-gray-800">-July 3, 2023</Link>
                    </div>
                    <div className="title">
                        <Link href={"/"}><div className="text-xl font-bold text-gray-800 hover:text-gray-600">Blockchain technology is an advanced database mechanism</div></Link>
                    </div>
                    <Author></Author>
            </div>
        </div>
    )
}
