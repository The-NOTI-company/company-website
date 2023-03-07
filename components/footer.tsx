/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { classNames } from '../utils/classNames'
import styles from '../styles/components/footer.module.css'

function Footer() {
    return (
        <footer className='px-[8%] pt-[80px] pb-[47px]' id='footer'>
            <div className='flex justify-between items-center mb-6'>
                <div>
                    <div className='relative max-w-[353px] mb-[30px]'>
                        <h1 className={ classNames('azure-gradient-text text-[96px] leading-[115px] font-[450]')}>Start <br/> A Project</h1>
                        <div className='absolute top-0 right-0'>
                            <img
                                src={'/assets/svg/footer/footer-arrow.svg'}
                                alt="Arrow"
                            />
                        </div>
                    </div>
                    <p className='text-mystery-500 text-[28px] leading-[42px]'>Let{"'"}s bring your ideas to life.</p>
                </div>
                <div className='max-w-[516px]'>
                    <video
                        loop
                        muted
                        autoPlay
                        playsInline
                        width="100%"
                        height="100%"
                    >
                        <source src={"/assets/video/footer/sparks.mp4"} type="video/mp4"/>
                    </video>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className={classNames('text-mystery-500 flex flex-wrap' )}>
                    <div className=''>
                        <p className='mb-2'>
                            NOTI HQ,<br/>
                            Bayajidda Close,<br/>
                            The Trenches.
                        </p>
                        <a href="mailto:thenoticompany@gmail.com?subject=Enquiries">thenoticompany@gmail.com</a>
                    </div>
                    <ul className='mx-[96px]'>
                        <li className='flex items-center mb-2 group'>
                            <img
                                src='/assets/svg/footer/star.svg'
                                alt='Star'
                                className='mr-4 opacity-0 duration-150 group-hover:opacity-100'
                            />
                            <Link href="/portfolio" className='duration-150 group-hover:text-mystery-100'>Portfolio</Link>
                        </li>
                        <li className='flex items-center mb-2 group'>
                            <img
                                src='/assets/svg/footer/star.svg'
                                alt='Star'
                                className='mr-4 opacity-0 duration-150 group-hover:opacity-100'
                            />
                            <Link href="/about" className='duration-150 group-hover:text-mystery-100'>About</Link>
                        </li>
                        <li className='flex items-center group'>
                            <img
                                src='/assets/svg/footer/star.svg'
                                alt='Star'
                                className='mr-4 opacity-0 duration-150 group-hover:opacity-100'
                            />
                            <Link href="/contact" className='duration-150 group-hover:text-mystery-100'>Contact</Link>
                        </li>
                    </ul>
                    <ul>
                        {/* <li className='mb-2 flex items-center group'>
                            <img
                                src='/assets/svg/footer/star.svg'
                                alt='Star'
                                className='mr-4 opacity-0 duration-150 group-hover:opacity-100'
                            />
                            <a href='' className='duration-150 group-hover:text-mystery-100'>
                                Dribbble
                            </a>
                        </li>
                        <li className='mb-2 flex items-center group'>
                            <img
                                src='/assets/svg/footer/star.svg'
                                alt='Star'
                                className='mr-4 opacity-0 duration-150 group-hover:opacity-100'
                            />
                            <a href='' className='duration-150 group-hover:text-mystery-100'>
                                Behance
                            </a>
                        </li> */}
                        <li className='mb-2 flex items-center group'>
                            <img
                                src='/assets/svg/footer/star.svg'
                                alt='Star'
                                className='mr-4 opacity-0 duration-150 group-hover:opacity-100'
                            />
                            <a href='https://twitter.com/thenoticompany?s=20' target="_blank" rel="noreferrer" className='duration-150 group-hover:text-mystery-100'>
                                Twitter
                            </a>
                        </li>
                        <li className='flex items-center group'>
                            <img
                                src='/assets/svg/footer/star.svg'
                                alt='Star'
                                className='mr-4 opacity-0 duration-150 group-hover:opacity-100'
                            />
                            <a href='https://www.instagram.com/thenoticompany/' target="_blank" rel="noreferrer" className='duration-150 group-hover:text-mystery-100'>
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col max-w-fit self-end'>
                    <div className='self-end mb-4'>
                        <img
                            src={'/assets/svg/footer/footer-logo.svg'}
                            alt="NOTI logo"
                        />
                    </div>
                    <h4 className='text-paragraph-b text-mystery-500'>THENOTICOMPANY</h4>
                </div>
            </div>

        </footer>
    )
}

export default Footer