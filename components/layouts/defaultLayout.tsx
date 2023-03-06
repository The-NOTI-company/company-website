import React, { ReactNode, useEffect, useState } from 'react'
import LoadingScreen from '../../components/loadingScreen'
import Navigation from '../../components/navigation'
import BottomNavigation from '../bottomNavigation'
import Footer from '../footer'
import SeoHead from '../seoHead'
import styles from '../../styles/components/layout.module.css'
import { HideDuring, HideOn } from 'react-hide-on-scroll'
import SmoothScroll from '../smoothScrolling'
import MobileView from '../mobileView'
import { classNames } from '../../utils/classNames'

interface LayoutProps {
    title: string,
    desc: string,
    showInnerLoading: Boolean,
    children : ReactNode
}

function DefaultLayout({ title, desc, showInnerLoading=false, children }: LayoutProps) {
    const [contentLoaded, setContentLoaded] = useState(false)
    const [showBottomNav, setShowBottomNav] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setContentLoaded(true)
      }, 4300);
    })

    
    return (
        <div className={styles.layoutContainer}>
            <SeoHead
                title={title}
                description={desc}
            />
            {showInnerLoading ? <LoadingScreen loading={contentLoaded} /> : null}
            
            <div className={ classNames(styles.layout, "max-w-screen")}>
                {/* <SmoothScroll> */}
                <Navigation />
                <MobileView/>
                <div className='hidden lg:block'>
                    <>
                        { children }
                    </>
                    {/* <HideOn divID="footer" atDiv={true} showOnPageInit>
                        <HideDuring inverse={true}>
                            <BottomNavigation />
                        </HideDuring>
                    </HideOn> */}
                    <Footer/>
                </div>
                {/* </SmoothScroll> */}
            </div>
        </div>
    )
}

export default DefaultLayout