import Image from "next/image";
export default function error(){
    return(
        <div className="text-center justify-center py-10">
            <h1 className="text-3xl font-bold text-orange-600 py-10">Something went wrong</h1>
            <Image className="justify-center text-center" src={"/images/error.jpg"} width={400} height={400}></Image>
        </div>
    )
}