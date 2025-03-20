'use client'

import React from 'react'
import dynamic from 'next/dynamic';
import Header from '../Header'
import Footer from '../Footer'
import Script from 'next/script'


const MainLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <div className="w-full overflow-hidden">
                <Script src="https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js" strategy="afterInteractive"></Script>
                <gecko-coin-price-marquee-widget locale="vi" outlined="true" coin-ids="" initial-currency="usd"></gecko-coin-price-marquee-widget>
            </div>
            <main className=' sm:max-w-[768px] md:max-w-[1024px] xl:max-w-[1368px] w-full m-auto'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout