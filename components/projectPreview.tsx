/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'
import React from 'react'
import { classNames } from '../utils/classNames'

interface ProjectPreviewProps {
    id: number,
    title: string,
    slug: string,
    imgSrc: string,
    roles: string[]
}

function ProjectPreview({ id, title, slug, imgSrc, roles }:ProjectPreviewProps) {
    return (
        <Link href={`/projects/${slug}`} >
            <div className={
                classNames(
                    "flex flex-col mb-[134px] max-w-[588px]",
                    (id + 1) % 2 === 0 ? "mt-[-120px]" : "mt-0"
                )
            }>
                <div className='object-cover overflow-hidden rounded-lg relative group'>
                    <img
                        className='w-full object-cover rounded-lg duration-300 group-hover:scale-110'
                        src={imgSrc}
                        alt={title}
                    />
                    <div className='absolute z-10 w-full h-full top-0 right-0 bg-[#05050566] duration-300 group-hover:opacity-0'></div>
                </div>
                <div className='mt-[22px]'>
                    <h2 className='text-[28px] leading-[42px] text-mystery-300 capitalize tracking-wide font-clash font-semibold'>
                        {title}
                    </h2>
                    <div className='uppercase text-mystery-500 text-[20px] leading-[38px]'>
                        { roles.join(",") }
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProjectPreview