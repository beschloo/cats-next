import '@/styles/globals.css'
import '@/styles/custom.css'
import '@/styles/locomotive.css'

import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

export default function App({ Component, pageProps }) {

  return (
    <Component {...pageProps} />
  )
}
