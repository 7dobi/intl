import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {TranslationProvider} from 'next-zero-intl'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TranslationProvider>
        <Component {...pageProps} />

    </TranslationProvider>
  )
}

export default MyApp
