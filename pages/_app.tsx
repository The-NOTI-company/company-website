import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import LoadingScreen from '../components/loadingScreen'

const Loading = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleStart = (url: String) => (url !== router.asPath) && setLoading(true);
    const handleComplete = (url: String) => (url === router.asPath) && setTimeout( ()=>{setLoading(false)},3000);

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router.asPath, router.events])


  return (
    <>
      {
        loading && (
          <LoadingScreen/>
        )
      } 
    </>
  );
}


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Loading />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
