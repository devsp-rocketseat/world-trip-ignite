import Head from 'next/head'

import { Header } from '../components/Header'
import { Banner } from '../components/home/Banner'
import { SectionInfo } from '../components/home/SectionInfo'
import { Slider } from '../components/home/Slider'

export default function Home() {
  return (
    <>
      <Head>
        <title>World Trip</title>
      </Head>

      <Header />

      <Banner />

      <SectionInfo />

      <Slider />
    </>
  )
}
