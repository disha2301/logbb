import Image from "next/image"
import Link from "next/link"
export default function author({name,img,designation}) {
  if(!name && !img) return <></>
  return (
    <div className="author flex py-5">
        <Image src={img || "/"} className="rounded-full" width={40} height={40}></Image>
        <div className="flex flex-col justify-center px-4">
            <Link href="/"><div className="text-md font-bold text-gray-800 hover:text-gray-600">{name || "no name"}</div></Link>
            <span className="text-sm text-gray-500">{designation || "designation"}</span>
        </div>
    </div>
  )
}
