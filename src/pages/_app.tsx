import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import {SessionProvider as NextAuthProvider} from 'next-auth/react'

import '../styles/global.scss'

import { PrismicProvider } from '@prismicio/react'
import { client } from '../services/prismic'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <NextAuthProvider session={pageProps.session}>
    <PrismicProvider client={client}>
      <Header />
      <Component {...pageProps} />
    </PrismicProvider>
  </NextAuthProvider>
  )
}

export default MyApp