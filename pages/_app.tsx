import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import LoadingScreen from '../components/loadingScreen'
import DefaultLayout from '../components/layouts/defaultLayout'
import Lenis from "@studio-freight/lenis";


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
          <LoadingScreen loading={loading} />
        )
      } 
    </>
  );
}


function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pathsToHideFooter = ["/404"]

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      infinite: false,
      smooth: true,
    })
    
    
    //get scroll value
    // lenis?.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
    //   console.log({ scroll, limit, velocity, direction, progress })
    // })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)
  })

  return (
    <DefaultLayout
      showFooter={!pathsToHideFooter.includes(router.pathname)}
    >
      <Loading />
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
