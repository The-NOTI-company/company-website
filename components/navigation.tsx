/* eslint-disable @next/next/no-img-element */
import Link from "next/link"
import { HideOn } from "react-hide-on-scroll"

const Navigation = () => {
    return (
        <nav className='flex items-center justify-between px-[4%] pt-5 pb-7 w-full bg-mystery-900 lg:bg-transparent lg:px-[120px] fixed z-20 top-0' id='nav'>
            <Link href={"/"}>
                <div className='flex'>
                    <img
                        src={'/assets/svg/navigation/logo.svg'}
                        alt='Noti logo'
                    />
                    <HideOn divID="main" atDiv={true} showOnPageInit>
                        <h2 className='text-[17px] leading-[27px] self-end text-mystery-300 ml-4 font-[450] hidden md:block'>Thenoticompany</h2>
                    </HideOn>
                </div>
            </Link>
            <ul className="font-futura hidden lg:flex">
                <li className="p-2 text-mystery-300">
                    <Link href="/about"> About </Link>
                </li>
                <li className="p-2 text-mystery-300 mx-10">
                    <Link href="/portfolio"> Portfolio </Link>
                </li>
                <li className="p-2 text-mystery-300">
                    <Link href="/contact"> Contact </Link>
                </li>
            </ul>
            <div className="hidden">

            </div>
            <button className="hidden">

            </button>
        </nav>
    )
}


export default Navigation