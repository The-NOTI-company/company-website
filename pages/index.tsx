import React from 'react'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import styles from '../styles/Homepage.module.css'
import { classNames } from '../utils/classNames'
import DefaultLayout from '../components/layouts/defaultLayout'


const Homepage: NextPage = () => {

    return (
        <DefaultLayout
            title='Home'
            desc='The homepage of the NOTI company website'
            showInnerLoading={true}
        >
            <main className={ classNames(styles.container, 'min-h-screen') }>
                
            </main>
        </DefaultLayout>
    )
}

export default Homepage