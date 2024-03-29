import type { AppProps } from 'next/app'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  makeVar,
} from '@apollo/client'

import '../styles/index.scss'
import {Nav} from '../components/Nav'

export const client = new ApolloClient({
  uri: 'https://api-us-west-2.graphcms.com/v2/ckovqxkol5h2u01xgauiqg9xo/master',
  cache: new InMemoryCache(),
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Nav />
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
