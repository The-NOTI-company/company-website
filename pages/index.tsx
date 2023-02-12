/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { classNames } from '../utils/classNames'
import LoadingScreen from '../components/loadingScreen'
import Countdown from '../components/countdown'

const Home: NextPage = () => {
  const [contentLoaded, setContentLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setContentLoaded(true) 
    }, 3000);
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Home | NOTI</title>
        <meta name="description" content="At NOTI, we push the standards of creativity to build brands that reach beyond the screen and create enduring experiences that engage audiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      { !contentLoaded && <LoadingScreen/>}
      <div
        className={classNames(styles.main, 'relative pb-5')}>
        <nav className='px-[120px] pt-5 pb-7 w-full' id='nav'>
          <div className='flex items-center'>
            <img
              src={'/assets/svg/navigation/logo.svg'}
              alt='Noti logo'
            />
            <h2 className='text-[17px] leading-[27px] text-[#E0E0E0] ml-4 font-futura'>The noti company</h2>
          </div>
        </nav>
        <main className={ classNames('mt-[66px] h-full flex flex-col items-center self-center')} id='body'>
          <div className='text-center w-[70%]'>
            <h1 className='text-[44px] leading-[52px] text-[#808080] font-semibold font-clash'>
              We are Currently under
              <span className={styles.gradientText}> Construction </span>
            </h1>
            <p className='mt-7 text-[24px] leading-[36px] font-futura font-normal text-[#808080]'>
              The noti company is currently improving its  website, and would be ready to launch in
            </p>
          </div>
          <div className={styles.countdownClock}>
            <div className='m-auto font-clash font-medium'>
              <span>
                <Countdown />
              </span> hrs
            </div>
          </div>
        </main> 
        <footer className='flex flex-col items-center mt-[70px]' id='footer'>
          <h3 className='text-[#808080] font-medium text-[24px] leading-[54px] font-futura'>Contact us</h3>
          <div className='flex items-center mt-[14px]'>
            <a href='mailto:thenoticompany@gmail.com' target='_blank' rel="noreferrer">
              <img
                src={'/assets/svg/footer/mail.svg'}
                alt="Mail"
              />
            </a>
            <a href='https://twitter.com/thenoticompany?s=21&t=aZjZSvIsM6Hfff7jzHoS8A' target='_blank'  className='mx-[53px]' rel="noreferrer">
              <img
                src={'/assets/svg/footer/twitter.svg'}
                alt="Twitter"
              />
            </a>
            <a href='https://instagram.com/thenoticompany?igshid=YmMyMTA2M2Y='>
              <img
                src={'/assets/svg/footer/instagram.svg'}
                alt="Instagram"
              />
            </a>
          </div>
        </footer>
        <div className='absolute max-w-[612px] bottom-0'>
          <img
            src='/assets/png/home/blob2.png'
            alt='Blob'
            className=' w-full'
          />
        </div>
        <div className='absolute max-w-[300px] top-[200px] right-0'>
          <img
            src='/assets/png/home/blob3.png'
            alt='Blob'
            className=' w-full'
          />
        </div>
        <div className='absolute max-w-[150px] top-[100px] left-[150px]'>
          <img
            src='/assets/png/home/blob.png'
            alt='Blob'
            className=' w-full'
          />
        </div>
      </div>
    </div>
  )
}

export default Home
