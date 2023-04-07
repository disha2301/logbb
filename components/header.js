import { ImFacebook2 } from "react-icons/im";
import { ImYoutube } from "react-icons/im";
import { ImTwitter } from "react-icons/im";
import Link from "next/link";

export default function header() {
  return (
    <>
    <nav className="bg-gr">
        <ul>
            <li></li>
        </ul>
    </nav>
    <header className="bg-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
            <div className="md:flex-none w-96 order-2 sm:order-1 py-4 justify-center sm:py-0 px-6">
                <input type="text" className="input-text" placeholder="Search..."/>
            </div>
            <div className="shrink w-80 sm:order-2">
                <Link href={"/"} className="font-bold uppercase text-3xl">
                    Design 
                </Link>
            </div>
            <div className="w-96 order-3 flex justify-center">
                <div className="flex gap-6">
                    <Link href={"/"} className="ImFacebook2" color="#888888"></Link>
                    <Link href={"/"} className="ImTwitter" color="#888888"></Link>
                    <Link href={"/"} className="ImYoutube" color="#888888"></Link>
                </div>
            </div>
        </div>


    </header>
    </>
  )
}
