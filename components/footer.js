import { ImFacebook2,ImYoutube,ImTwitter } from "react-icons/im";
// import Link from "next/link";

export default function footer(){
  
  const bg = {
    background: "url('/images/bg.jpg') no-repeat",
    backgroundPosition: "bottom left",
    backgroundSize: "cover"
}
  return (
   <footer className="bg-gray-50" style={bg}>
    <div className="container mx-auto flex justify-center py-12">
      <div className="py-5">
        <div className="flex gap-6 justify-center">
           <a><ImFacebook2 color="#888888"/></a>
           <a><ImTwitter color="#888888"/></a>
           <a><ImYoutube color="#888888"/></a>
        </div>
        <p className="py-5 text-gray-400">Copyright©2023 All rights reserved</p>
        <p className="text-gray-400 text-center">Terms and Conditions</p>
      </div>
    </div>

   </footer>
  )
}