import React, { ReactNode } from 'react'
import Navigation from '../../components/navigation'
import BottomNavigation from '../bottomNavigation'
import Footer from '../footer'
import styles from '../../styles/components/layout.module.css'
import { HideDuring, HideOn } from 'react-hide-on-scroll'
import MobileView from '../mobileView'
import { classNames } from '../../utils/classNames'


interface LayoutProps {
    children: ReactNode,
    showFooter? : boolean
}

function DefaultLayout({ children, showFooter = true }: LayoutProps) {
    // const [showBottomNav, setShowBottomNav] = useState(true)



    return (
        <div className={ classNames(styles.layout, "max-w-desktop")}>
            <Navigation />
            <MobileView />
            <div className='hidden lg:block'>
                { children }
                {/* <HideOn divID="footer" atDiv={true} showOnPageInit>
                    <HideDuring inverse={true}>
                        <BottomNavigation />
                    </HideDuring>
                </HideOn> */}
                { showFooter ? <Footer/> : null}
            </div>
        </div>
    )
}

export default DefaultLayout