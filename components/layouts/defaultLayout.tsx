import React, { ReactNode, useEffect, useState } from 'react'
import LoadingScreen from '../../components/loadingScreen'
import Navigation from '../../components/navigation'
import BottomNavigation from '../bottomNavigation'
import Footer from '../footer'
import SeoHead from '../seoHead'
import styles from '../../styles/components/layout.module.css'

interface LayoutProps {
    title: string,
    desc: string,
    showInnerLoading: Boolean,
    children : ReactNode
}

function DefaultLayout({ title, desc, showInnerLoading=false, children }: LayoutProps) {
    const [contentLoaded, setContentLoaded] = useState(false)

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
            { showInnerLoading && <LoadingScreen loading={contentLoaded}/> }
            <div className={styles.layout}>
                <Navigation />
                <>
                    { children }
                </>
                <BottomNavigation />
                <Footer/>
            </div>
        </div>
    )
}

export default DefaultLayout