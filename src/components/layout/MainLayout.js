'use client'

import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />

            <main className='px-2 sm:px-5 sm:max-w-[768px] md:max-w-[1024px] xl:max-w-[1368px] w-full m-auto'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout