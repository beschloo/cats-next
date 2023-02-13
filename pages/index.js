import Head from 'next/head'
import Image from 'next/image'
import HeroSection from '@/components/HeroSection'
import TokenomicsSection from '@/components/TokenomicsSection'
import PhasesSection from '@/components/phase_section/PhasesSection'
import StarwarsSection from '@/components/StarwarsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className='h-full w-full bg-gradient-to-b from-transparent to-black  p-4'>
      <HeroSection />
      <TokenomicsSection />
      <PhasesSection />
      <StarwarsSection />
      <Footer />
    </div>
  )
}
