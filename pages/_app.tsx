// import { NextPageContext } from 'next'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

// This is what Next.js uses initialize  components
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp