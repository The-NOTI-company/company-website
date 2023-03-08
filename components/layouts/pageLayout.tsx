import React, { useState, useEffect, ReactNode } from 'react'
import SeoHead from '../seoHead'
import LoadingScreen from '../../components/loadingScreen'

interface LayoutProps {
    title: string,
    desc: string,
    showInnerLoading: Boolean,
    children : ReactNode
}

function PageLayout({ title, desc, showInnerLoading = false, children }: LayoutProps) {
    const [contentLoaded, setContentLoaded] = useState(false)


    useEffect(() => {
        setTimeout(() => {
          setContentLoaded(true)
        }, 4300);
    })
  
    return (
        <div>
            <SeoHead
                title={title}
                description={desc}
            />
            {showInnerLoading ? <LoadingScreen loading={contentLoaded} /> : null}
            <div id="main">
                { children }
            </div>
        </div>
    )
}

export default PageLayout