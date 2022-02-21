import { AppProps } from 'next/app';
import GlobalStyleProvider from '../styles/Global';
import { Header } from '../components'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStyleProvider>
      <Header />
      <Component {...pageProps} />
    </GlobalStyleProvider>
  )
}

export default MyApp