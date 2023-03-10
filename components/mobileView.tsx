/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { classNames } from '../utils/classNames'
import ImageSlider from './imageSlider'
import styles from '../styles/components/mobileView.module.css'
import { projectsReel } from '../data/projects'

function MobileView() {
  const { reelSetOne, reelSetTwo, reelSetThree } = projectsReel

  return (
    <div className='w-full h-screen relative flex lg:hidden'>
      <div className=' flex flex-col mt-[156px] items-center text-center justify-self-center self-center relative w-full z-10'>
        <div className='mb-[50px]'>
          <img
            src='/assets/svg/mobile.svg'
            alt='Mobile'
          />
        </div>
        <h3 className='text-[24px] leading-[30px] font-clash text-mystery-300 font-semibold mb-4'>Screen size not supported yet</h3>
        <p className='text-mystery-300 text-[20px] leading-6 mb-[240px] w-[70%]'>
          We are sorry but this screen size is not supported. Please switch to a screen larger than 1024px wide.
        </p>
        <a className='text-mystery-300 text-[20px] leading-6' href='mailto:thenoticompany@gmail.com'>
          Contact us
        </a>
      </div>
      <div className='absolute top-0 right-0 bg-[#050505] w-full h-full opacity-70 z-[3]'></div>
      <div className={ classNames( "overflow-hidden absolute w-full h-full top-0 right-0 -z-0")}>
        <div className='rotate-[60deg] flex gap-[16px] min-w-[150%] h-[100vh]'>
          <ImageSlider pictures={reelSetThree} iterations={5} direction="reverse" className="h-[150vh]" />
          <ImageSlider pictures={reelSetOne} iterations={5} direction="normal" className="h-[150vh]" />
          <ImageSlider pictures={reelSetTwo} iterations={5} direction="reverse" className="h-[150vh]" />
          <ImageSlider pictures={reelSetThree} iterations={5} direction="normal" className="h-[150vh]" />
          <ImageSlider pictures={reelSetTwo} iterations={5} direction="reverse" className="h-[150vh]" />
          <ImageSlider pictures={reelSetOne} iterations={5} direction="normal" className="h-[150vh]" />
        </div>
      </div>
    </div>
  )
}

export default MobileView