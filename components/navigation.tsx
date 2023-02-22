/* eslint-disable @next/next/no-img-element */

import Link from "next/link"

const Navigation = () => {
    return (
        <nav className='flex items-center justify-between px-[4%] pt-5 pb-7 w-full lg:px-[120px]' id='nav'>
            <div className='flex items-center'>
                <img
                    src={'/assets/svg/navigation/logo.svg'}
                    alt='Noti logo'
                />
                <h2 className='text-[17px] leading-[27px] text-grey-300 ml-4 font-futura hidden md:block'>Thenoticompany</h2>
            </div>
            <ul className="flex font-futura">
                <li className="p-2 text-grey-300">
                    <Link href="/about"> About </Link>
                </li>
                <li className="p-2 text-grey-300 mx-10">
                    <Link href="/portfolio"> Portfolio </Link>
                </li>
                <li className="p-2 text-grey-300">
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