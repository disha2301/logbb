import Header from "@/components/header"
import Footer from "@/components/footer"
import Head from "next/head"
import Newsletter from "@/components/_child/newsletter"
export default function format({children}){
    return (
     <>
     <Head>
        <title>blog</title>
     </Head>
      <Header></Header>
      <main>{children}</main>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </> 
          )
}