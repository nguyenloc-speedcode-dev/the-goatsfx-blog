'use client'

import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="w-full overflow-hidden">
                <gecko-coin-price-marquee-widget locale="en" outlined="true" coin-ids="" initial-currency="usd"></gecko-coin-price-marquee-widget>
            </div>
            <main className=' sm:max-w-[768px] md:max-w-[1024px] xl:max-w-[1368px] w-full m-auto'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout