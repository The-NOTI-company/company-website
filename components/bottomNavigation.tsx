import React from 'react'
import { LottieAnimation } from './lottieAnimation'

function BottomNavigation() {
    return (
        <div className='flex justify-between w-full px-[8%] fixed bottom-20'>
            <div>
                <h4 className='text-[18px] leading-[27px] text-mystery-600 font-medium'>
                    Press
                    <span className='font-futura text-mystery-100 py-[2px] px-[8px] border-grey-100 border rounded mx-3'>
                        C
                    </span>
                    anywhere to contact us
                </h4>
            </div>
            <div className='flex'>
                <h4 className='text-[18px] leading-[27px] text-mystery-600 font-medium mr-[22px] self-end'>
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