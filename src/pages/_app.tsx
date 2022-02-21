import GlobalStyleProvider from '../styles/Global';
import { AppProps } from 'next/app';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStyleProvider>
      <Component {...pageProps} />
    </GlobalStyleProvider>
  )
}

export default MyApp