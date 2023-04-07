import Image from "next/image"
import Link from "next/link"
export default function section1() {
  return (
   <section className="py-16">
    <div className="container mx-auto md:px-20">
         <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
         {Slide()}
    </div>
   </section>
  )
}

function Slide(){
    return(
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link legacyBehavior href={"/"}><a><Image src={"/images/image1.jpeg"} width={600} height={600}/></a></Link>
                

            </div>
            <div className="info">
                <div className="category">
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">Business,Travel</a></Link>
                </div>

            </div>

        </div>
    )
}
