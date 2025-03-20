import "./globals.css";
import { cx } from "@/src/utils";
import { Inter, Manrope } from "next/font/google";
// import Header from "@/src/components/Header";
// import Footer from "../components/Footer";
import siteMetadata from "../utils/siteMetaData";
// import Script from "next/script";
import MainLayout from "../components/layout/MainLayout";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  keywords: [
    "Blockchain hôm nay",
    "Đầu tư tiền điện tử",
    "Chiến lược giao dịch Forex",
    "Phân tích thị trường Crypto",
    "Tin tức Bitcoin, Crypto",
    "the goatsfx trading",
    "tâm lý giao dịch",
    "kiến thức giao dịch",
    "tin tức thị trường",
    "chiến lược giao dịch",
    "phân tích kỹ thuật",
    "phân tích cơ bản",
    "quản lý rủi ro",
    "cập nhật thị trường",
    "tin tức tài chính",
    "thị trường ngoại hối",
    "thị trường tiền điện tử",
    "đầu tư tài chính",
    "giao dịch forex",
    "giao dịch crypto",
    "phân tích thị trường",
    "tín hiệu giao dịch",
    "học giao dịch",
    "tâm lý nhà đầu tư"
  ],
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "vi_Vi",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-lt-installed="true" >
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light "
        )}
        data-gr-ext-installed=""
        cz-shortcut-listen="true"
      >
        {/* <Script id="theme-switcher" strategy="beforeInteractive">
      {`if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }`}
    </Script> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DB79RR9D9X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DB79RR9D9X');
        `}
        </Script>
        <Script src="https://widgets.coingecko.com/gecko-coin-price-marquee-widget.js" strategy="lazyOnload"></Script>
        <MainLayout>
          {children}
        </MainLayout>

      </body >
    </html >
  );
}
