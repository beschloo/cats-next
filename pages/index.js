import Head from 'next/head'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import TokenomicsSection from '@/components/TokenomicsSection'
import PhasesSection from '@/components/phase_section/PhasesSection'
import StarwarsSection from '@/components/StarwarsSection'
import Footer from '@/components/Footer'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { useRef } from 'react'


export default function Home() {
  const containerRef = useRef(null);
  return (
    <LocomotiveScrollProvider
      options={{ smooth: true, multiplier: 0.3 }}
      watch={[]}
      containerRef={containerRef}
    >
      <div data-scroll-container data-scroll ref={containerRef} className='h-full w-full bg-gradient-to-b from-transparent to-black p-4'>
        <HeroSection />
        <TokenomicsSection />
        <PhasesSection />
        <StarwarsSection />
        <Footer />
      </div>
    </LocomotiveScrollProvider >
  )
}
