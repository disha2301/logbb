import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"

export default function section4() {
  return (
    <section className="container mx-auto md:px-20 py-16">
        <div className="grid lg:grid-cols-2">
            <div className="item">
                <h1 className="font-bold text-4xl py-12 text-center">Business</h1>
                <div className="flex flex-col gap-6">
                    {/* POST and using function for that */}
                    {Post()}
                    {Post()}
                    {Post()}
                    {Post()}
                </div>
            </div>
            <div className="item">
                <h1 className="font-bold text-4xl py-12 text-center">Travel</h1>
                <div className="flex flex-col gap-6">
                    {/* POST and using function for that */}
                    {Post()}
                    {Post()}
                    {Post()}
                    {Post()}
                </div>
            </div>

            
        </div>
    </section>
  )
}
function Post(){
    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={"/"}><Image className="rounded" src={"/images/image1.jpeg"} width={300} height={250}/></Link>
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
