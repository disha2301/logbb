import Head from 'next/head'
import Image from 'next/image'
import styles from "../styles/Home.module.css"
import Header from "../components/header"
import { Inter } from 'next/font/google'
import Format from '@/layout/format'


//components
import Section1 from '../components/section1'
import Section2 from '@/components/section2'
import Section3 from '@/components/section3'
import Section4 from '@/components/section4'
import Newsletter from '@/components/_child/newsletter'
import Footer from '@/components/footer'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Format>
     <Section1></Section1>
     <Section2></Section2>
     <Section3></Section3>
     <Section4></Section4>
     <Newsletter></Newsletter>
     
    </Format>
  )
}
