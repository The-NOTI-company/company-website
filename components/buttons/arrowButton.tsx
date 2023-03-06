/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { classNames } from '../../utils/classNames'

interface ArrowButtonProps{
    to: string,
    children: ReactNode,
    className?: string
}

function ArrowButton({ to, children, className }: ArrowButtonProps) {
    return (
        <div className={classNames('group', className)}>
            <Link href={to} className="flex">
                <div className='flex items-center py-3 px-[43px] border rounded-lg azure-boder w-full mx-auto justify-center'>
                    <span className='uppercase azure-gradient-text text-[20px] leading-[38px] mr-3'>
                        {children}
                    </span>
                    <div className='duration-150 group-hover:translate-x-2'>
                        <img
                            src='/assets/svg/home/arrow-right.svg'
                            alt='Arrow'
                        />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ArrowButton