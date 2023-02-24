import '@/styles/globals.css'
import '@/styles/custom.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        id='GA-Script'
        strategy="beforeInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-VJMVBLLJ2R}`}
      />
      <Script
        id='Google-Analytics'
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VJMVBLLJ2R');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
