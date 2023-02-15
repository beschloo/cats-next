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
      <Head>
        <title>$CATS Official | Arbitrum</title>
        <meta property="og:site_name" content="" />
        <meta
          name="description"
          content="Your new defi feline friend.Bringing together the world of cats and crypto."
        />
        <meta name="twitter:image" content="/images/cats-og.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="/images/cats-og.jpg" />
      </Head>

      <HeroSection />
      <TokenomicsSection />
      <PhasesSection />
      <StarwarsSection />
      <Footer />
    </div>
  )
}
