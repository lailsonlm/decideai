import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/AuthContext'
import { client } from '../lib/apollo'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </AuthProvider>
  )
}

export default MyApp
