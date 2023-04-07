import Format from "../../layout/format"
import Author from "../../components/_child/author"
import Image from "next/image"
export default function index() {
  return (
    <Format>
      <section className='container mx-auto md:px-2 py-16 w-1/2'>
        <div className="flex justify-center">
            <Author></Author>
        </div>
        <div className="post py-10">
            <h1 className="font-bold text-4xl text-center pb-5">The purpose of the blockchain is to share information amongst all parties that access it via an application.</h1>
            <p className="text-gray-500 text-xl text-center">Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding).</p>
            <div className="py-10">
                <Image src={"/images/image2.jpg"} width={900} height={600}></Image>
            </div>

            <div className="content text-gray-600 text-lg flex flex-col gap-4">
                <p>Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding).</p>
                <p>Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding).</p>
                <p>Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding).</p>
                
            </div>
        </div>

      </section>
    </Format>
  )
}
