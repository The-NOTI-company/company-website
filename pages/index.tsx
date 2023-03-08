/* eslint-disable @next/next/no-img-element */
import React from 'react'
import type { NextPage } from 'next'
import { useState, useRef } from 'react'
import styles from '../styles/Homepage.module.css'
import { classNames } from '../utils/classNames'
import PageLayout from '../components/layouts/pageLayout'
import {projects} from '../data/projects' 
import ProjectPreview from '../components/projectPreview'
import FaqList from '../components/faqList'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowButton from '../components/buttons/arrowButton'


const Homepage: NextPage = () => {
    const [trailing, setTrailing] = useState({ x: 0, y: 0 })
    const [videoPlay, setVideoPlay] = useState(false)
    const contentLoaded = true;
    const reelVideo = useRef<HTMLVideoElement | null>(null)

    const handleMouseMove = (e: any) => {
        const { clientX, clientY } = e

        setTrailing({
            x: clientX - 25,
            y: clientY - 25
        })
        
    }

    const togglePlay = () => {
        if (reelVideo.current) { reelVideo.current.volume = 0.4 }

        if (videoPlay) {
            setVideoPlay(false)
            reelVideo.current?.pause()
        } else { 
            setVideoPlay(true)
            reelVideo.current?.play()
        }
    }

    const notiFeatures = [
        {
            id: 1,
            title: "Real Experiences",
            description: "We approach brands like they are living, breathing, purposeful entities, and we design synchronized experiences."
        },
        {
            id: 2,
            title: "Daring Designs",
            description: "Your brand will have an edge over the competition with high-impact visual branding and a distinctive identity."
        },
        {
            id: 3,
            title: "Value-driven Results",
            description: "Our goal is to help you create a brand that is not only visually appealing but also conveys the core essence of what you do and why it matters."
        },
    ]

    const trustedNotiLogos = [
        {
            id: 1,
            name: "Malvie",
            imgSrc: '/assets/svg/home/logos/malvie.svg',
            maxWidth: "200px"
        },
        {
            id: 2,
            name: "Wac",
            imgSrc: '/assets/svg/home/logos/wac.svg',
            maxWidth: "200px"
        },
        {
            id: 3,
            name: "Heart",
            imgSrc: '/assets/svg/home/logos/heart.svg',
            maxWidth: "100px"
        },
        {
            id: 4,
            name: "Radr",
            imgSrc: '/assets/svg/home/logos/radr.svg',
            maxWidth: "200px"
        },
        {
            id: 5,
            name: "Solarsoft",
            imgSrc: '/assets/svg/home/logos/solarsoft.svg',
            maxWidth: "200px"
        },
        {
            id: 6,
            name: "Vobb",
            imgSrc: '/assets/svg/home/logos/vobb.svg',
            maxWidth: "200px"
        },
    ]

    const notiServices = [
        {
            id: 1,
            title: "brand strategy",
            description: "Our holistic approach includes innovative design thinking, proven processes, and a commitment to your users to help you create meaningful and sustainable value for your business."
        },
        {
            id: 2,
            title: "brand discovery",
            description: "Find the raw truth about your brand's strengths and weaknesses and understand the distinctive value it provides about customers' needs, your competition, and your position in the marketplace."
        },
        {
            id: 3,
            title: "brand engineering",
            description: "Deliberate and systematic shaping through rebranding and communication strategies to attract new customers, build loyalty among existing ones, and increase your overall profitability."
        },
    ]

    const CustomButtons = ({ previous, next }:any) => {
        return (
            <div className='flex carousel-button-group self-center mt-16'>
                <button className='mr-3 bg-transparent' onClick={()=>previous()}>
                    <img
                        src='/assets/svg/home/left-button.svg'
                        alt='Arrow Left'
                    />
                </button>
                <button className='ml-3 bg-transparent' onClick={()=>next()}>
                    <img
                        src='/assets/svg/home/right-button.svg'
                        alt='Arrow Right'
                    />
                </button>
            </div>
        )
    }



    return (
        <PageLayout
            title='Home'
            desc='The homepage of the NOTI company website'
            showInnerLoading={true}
        >
            <main className={ classNames(styles.container, "mt-[156px]") } data-scroll-section>
                <section className='my-[68px] flex justify-between px-[8%]'>
                    <div className='w-[55%]'>
                        <h1 className='text-[64px] leading-[90px] tracking-[0.01em] mb-6 font-clash font-bold'>
                            <span className='text-mystery-500'>Evolving</span><br/>
                            <span className='azure-gradient-text'>Bold Brands</span>
                        </h1>
                        <p className='text-mystery-500 font-[450] text-[24px] leading-[42px] mb-12 w-[90%]'>
                            At NOTI, we push the standards of creativity to build brands that reach beyond the screen and create enduring experiences that engage audiences.
                        </p>
                        <ArrowButton className='max-w-fit' to='/contact'>Start A Project</ArrowButton>
                    </div>
                    <div className='max-w-[450px]'>
                        <video
                            loop
                            muted
                            autoPlay
                            playsInline
                            width="100%"
                            height="100%"
                        >
                            <source src={"/assets/video/home/globe.mp4"} type="video/mp4"/>
                        </video>
                    </div>
                </section>
                <section className='mb-[176px] px-[8%] mx-auto'>
                    <div
                        className='my-48 relative cursor-none w-full overflow-hidden max-w-[1272px]'
                        onMouseMove={e => handleMouseMove(e)}
                    >
                        <video
                            ref={reelVideo}
                            onClick={togglePlay}
                            width="100%"
                            height="100%"
                        >
                            <source src={"https://res.cloudinary.com/noticompany/video/upload/v1678013990/NOTI%20media/website/0211_1_1_ali5xs.mp4"} type="video/mp4"/>
                        </video>
                        <div
                            className={classNames(styles.playHover, 'absolute w-[150px] h-[150px] rounded-full flex justify-center items-center m-auto bg-mystery-800')}
                            style={{
                                left: trailing.x,
                                top: trailing.y
                            }}
                        >
                            {
                                videoPlay ?
                                    (
                                        <span className='text-paragraph text-mystery-300'>pause</span>
                                    )
                                    :
                                    (
                                        <span className='text-paragraph text-mystery-300'>play</span>
                                    )
                            }
                        </div>
                    </div>
                    <h1 className='text-[64px] leading-[96px] tracking-[0.01em] azure-gradient-text text-center'>
                        We are a collective of designers, developers, creatives, analysts, and digital specialists, designing brands and creating lasting customer experiences.
                    </h1>
                </section>
                <section className='flex justify-between mystery-002 pt-[152px] pb-[232px] px-[5%]'>
                    <div className='w-full'>
                        <div className='max-w-[593px] mx-auto'>
                            <img
                                src='/assets/png/home/07.png'
                                alt='Blob'
                            />
                        </div>
                        <ul className='flex flex-col items-center h-full mt-24'>
                            {
                                trustedNotiLogos.map(logo => {
                                    return (
                                        <li
                                            key={logo.id}
                                            style={{ maxWidth: logo.maxWidth }}
                                            className={ classNames("my-[50px] first:mt-8 last:mb-0 px-5 opacity-10 duration-200 hover:opacity-100")}>
                                            <img
                                                className={'w-full'}
                                                src={logo.imgSrc}
                                                alt={logo.name}
                                            />
                                        </li>
                                    )
                                } )
                            }
                        </ul>
                    </div>
                    <div className='mt-24 w-[70%]'>
                        <h2 className='uppercase text-[48px] leading-[63px] tracking-[0.01em] font-clash text-mystery-500 font-medium'>
                            Designing
                            <span className='azure-gradient-text'> stories </span>
                            that matter through...
                        </h2>
                        <ul className='mt-[240px]'>
                            {
                                notiFeatures.map(feature => {
                                    return (
                                        <li key={feature.id} className=" mb-[152px]">
                                            <h5 className='font-clash text-[32px] leading-[40px] text-mystery-50 mb-4 font-semibold'>
                                                {feature.title}
                                            </h5>
                                            <p className='text-[28px] leading-[42px] text-mystery-500 max-w-[90%]'>
                                                { feature.description }
                                            </p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </section>
                <section className='mt-[280px] mb-[219px]'>
                    <h2 className=' text-[36px] leading-[60px] text-mystery-500 tracking-wide font-clash ml-[114px] font-medium'>
                        Our Services
                    </h2>
                    <div className='flex flex-col mt-[104px] relative'>
                        <Carousel
                            additionalTransfrom={0}
                            arrows={false}
                            autoPlaySpeed={3000}
                            centerMode={true}
                            className=""
                            containerClass="container-padding-bottom"
                            draggable
                            focusOnSelect={true}
                            infinite={true}
                            itemClass=""
                            keyBoardControl
                            minimumTouchDrag={80}
                            pauseOnHover
                            renderArrowsWhenDisabled={false}
                            renderButtonGroupOutside
                            renderDotsOutside={false}
                            responsive={{
                            desktop: {
                                breakpoint: {
                                max: 1550,
                                min: 1024
                                },
                                items: 1,
                            },
                            }}
                            rewind={false}
                            rewindWithAnimation={false}
                            rtl={false}
                            shouldResetAutoplay
                            showDots={false}
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                            customButtonGroup={<CustomButtons />}
                        >
                            {
                                notiServices.map((service) => {
                                    return (
                                        <div className='text-center flex flex-col items-center mx-16' key={service.id}>
                                            <h3 className='text-[40px] leading-[60px] uppercase azure-gradient-text font-semibold mb-8'>
                                                { service.title }
                                            </h3>
                                            <p className='text-[32px] leading-[54px] text-mystery-500 w-full'>
                                                { service.description }
                                            </p>
                                        </div>
                                    )
                                })       
                            }                   
                        </Carousel>
                        <div className={styles.leftFadeEffect}></div>
                        <div className={styles.rightFadeEffect}></div>
                    </div>
                    
                </section>
                <section className='relative py-[124px] mystery-002'>
                    <div className='flex flex-col items-center self-center text-center w-[90%] sm:w-[70%] mx-auto'>
                        <div className='text-[32px] leading-[32px] font-semibold font-clash md:text-[48px] md:leading-[56px]'>
                            <h1 className='text-mystery-500'>
                                We are 
                                <span className="azure-gradient-text"> Not Out To Impress </span>
                            </h1>
                            <h1 className='text-mystery-500'>
                                We Astonish
                            </h1>
                        </div>
                        <p className='mt-6 mb-12 w-[65%] text-[18px] leading-[28px] font-futura font-normal text-mystery-500 md:text-[24px] md:leading-[38px]'>
                            At NOTI, we are a team of elite non-conformists dedicated to creating impactful and enduring experiences through a combination of creativity and analytical thinking.
                        </p>
                        <ArrowButton to='/portfolio' className='w-full max-w-[389px]'>
                            Explore us
                        </ArrowButton>
                    </div> 
                    <div className={ classNames('absolute max-w-[230px] md:max-w-[387px] lg:max-w-[387px] bottom-0', !contentLoaded ? styles.scaledown : "scale-100")}>
                        <img
                            src='/assets/png/home/blob2.png'
                            alt='Blob'
                            className=' w-full'
                        />
                    </div>
                    <div className={ classNames('absolute max-w-[300px] top-[150px] right-0', !contentLoaded ? styles.scaledown : "scale-100")}>
                        <img
                            src='/assets/png/home/blob3.png'
                            alt='Blob'
                            className=' w-full'
                        />
                    </div>
                    <div className={ classNames('absolute max-w-[150px] top-[34px] left-[150px]', !contentLoaded ? styles.scaledown : "scale-100")}>
                        <img
                            src='/assets/png/home/blob.png'
                            alt='Blob'
                            className=' w-full'
                        />
                    </div>
                </section>
                <section className='flex flex-col px-[117px] py-[162px]'>
                    <h3 className='text-heading-3 azure-gradient-text font-medium'>
                        Selected projects
                    </h3>
                    <div className='grid grid-cols-2 gap-[99px] w-full mt-24'>
                        {
                            projects.map((project, idx) => {
                                return (
                                    <ProjectPreview
                                        key={idx}
                                        id={idx}
                                        title={project.title}
                                        slug={project.slug}
                                        roles={project.roles}
                                        imgSrc={project.imgSrc}
                                    />
                                )
                            })
                        }
                    </div>
                    <ArrowButton to="/porfolio" className='max-w-fit self-center'>
                        Visit Our Lab
                    </ArrowButton>
                </section>
                <section className='px-[117px]'>
                    <h2 className='text-heading-2 text-mystery-50 font-[450]'>
                        FAQ
                    </h2>
                    <div className='mt-[85px] mb-[150px'>
                        <FaqList/>
                    </div>
                </section>
            </main>
        </PageLayout>
    )
}

export default Homepage