import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import { client } from '../lib/apollo'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
