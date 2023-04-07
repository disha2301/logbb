import Head from 'next/head'
import Image from 'next/image'
import styles from "../styles/Home.module.css"
import Header from "../components/header"
import { Inter } from 'next/font/google'
import Format from '@/layout/format'
import Section2 from '@/components/section2'

//components
import Section1 from '../components/section1'


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Format>
     <Section1></Section1>
     <Section2></Section2>
    </Format>
  )
}
