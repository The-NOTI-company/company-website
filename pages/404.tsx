import React from 'react'
import PageLayout from '../components/layouts/pageLayout'

function NotFound() {
    return (
        <PageLayout
            title='Future page'
            desc='This page is in the future'
            showInnerLoading={true}
        >
            <main className='mt-[50px] mb-[190px] h-full'>
                <section className='px-[8%]'>
                    <h1 className='font-clash azure-gradient-text text-[15vw] leading-[383px] font-semibold'>
                        Oops...
                    </h1>
                </section>
                <section className='px-[8%] mt-[88px] flex justify-between'>
                    <div className='w-[50%]'>
                        <div className='mb-[162px] flex'>
                            <h4 className='font-medium text-mystery-400 text-[20px] leading-[27px] uppercase'>
                                error 404
                            </h4>
                            <h4 className='font-medium text-mystery-400 text-[20px] leading-[27px] uppercase mx-[25%]'>
                                page not found
                            </h4>
                        </div>
                        <a href='mailto:thenoticompany@gmail.com' className='font-medium text-mystery-400 text-[20px] leading-[27px] hover:underline'>
                            thenoticompany@gmail.com
                        </a>
                    </div>
                    <p className='uppercase font-medium text-mystery-400 text-[20px] leading-[27px] w-[50%]'>
                        This page currently exists in the future.<br/>
                        Could be a few hours, a few days or a few weeks.
                        But right now, you get to imagine this page however you it to be.
                        <br/>
                        <br />
                        <br/>
                        <br/>
                        <br/>
                        Keep your imagination alive,
                        NOTI.
                    </p>
                </section>
                <div className='h-[150px]'></div>
            </main>
       </PageLayout>
    )
}

export default NotFound