import React, { useEffect } from 'react'
import { LottieAnimation } from './lottieAnimation'
// import ReactPlayer from 'react-player'

function BottomNavigation() {

    const detectKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "c") {
            alert("Hi")
        }

        console.log(e)
    }

    return (
        <div className='flex justify-between w-full px-[8%] fixed bottom-10'>
            <div >
                <h4 className='text-[18px] leading-[27px] text-mystery-600 font-[450]'>
                    Press
                    <span className='font-futura text-mystery-100 py-[2px] px-[8px] border-grey-100 border rounded mx-3'>
                        C
                    </span>
                    anywhere to contact us
                </h4>
            </div>
            <div className='flex'>
                {/* <ReactPlayer
                    url='https://soundcloud.com/stitch_stx/sets/noti/s-iywKySzv5jR?ref=clipboard&p=a&c=1&si=948dd931141f4ed3b31fa1d661363043&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'
                /> */}
                <h4 className='text-[18px] leading-[27px] text-mystery-600 font-[450] mr-[22px] self-end'>
                    Sound: on
                </h4>
                <div className='w-[38px]'>
                    <LottieAnimation
                        path='/assets/lottie/sound.json'
                        autoplay={true}
                        loop={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default BottomNavigation