import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./iconfonts.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spokesman Communication Ministries",
  description: "We are dealers in HOPE",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Spokesman Communication Ministries || NGO/Charity/Fundraising Template" />
        <meta name="author" content="DynamicLayers" />

        <title>Spokesman Communication Ministries</title>

        {/* Favicon */}
        <link rel="shortcut icon" type="image/x-icon" href="/img/meta/favicon.ico" />

        {/* Stylesheets */}
        <link rel="preload" href="/css/font-awesome.min.css" as="style" />
        <link rel="stylesheet" href="/css/font-awesome.min.css" />
        <link rel="preload" href="/css/themify-icons.css" as="style" />
        <link rel="stylesheet" href="/css/themify-icons.css" />
        <link rel="preload" href="/css/elegant-font-icons.css" as="style" />
        <link rel="stylesheet" href="/css/elegant-font-icons.css" />
        <link rel="preload" href="/css/elegant-line-icons.css" as="style" />
        <link rel="stylesheet" href="/css/elegant-line-icons.css" />
        <link rel="preload" href="/css/bootstrap.min.css" as="style" />
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="preload" href="/css/venobox/venobox.css" as="style" />
        <link rel="stylesheet" href="/css/venobox/venobox.css" />
        <link rel="preload" href="/css/owl.carousel.css" as="style" />
        <link rel="stylesheet" href="/css/owl.carousel.css" />
        <link rel="preload" href="/css/slicknav.min.css" as="style" />
        <link rel="stylesheet" href="/css/slicknav.min.css" />
        <link rel="preload" href="/css/css-animation.min.css" as="style" />
        <link rel="stylesheet" href="/css/css-animation.min.css" />
        <link rel="preload" href="/css/nivo-slider.css" as="style" />
        <link rel="stylesheet" href="/css/nivo-slider.css" />
        <link rel="preload" href="/css/main.css" as="style" />
        <link rel="stylesheet" href="/css/main.css" />
        <link rel="preload" href="/css/responsive.css" as="style" />
        <link rel="stylesheet" href="/css/responsive.css" />

        {/* Modernizr */}
        <Script src="/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js" strategy="beforeInteractive" />
      </head>
      <body className={inter.className}>
        <Header />
        <div className="header-height"></div>
        {children}
        <Footer />

        {/* Scripts for site functionality */}
        <Script src="/js/vendor/jquery-1.12.4.min.js" strategy="beforeInteractive" />
        <Script src="/js/vendor/bootstrap.min.js" strategy="lazyOnload" />
        <Script src="/js/vendor/tether.min.js" strategy="lazyOnload" />
        <Script src="/js/vendor/imagesloaded.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/js/vendor/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/js/vendor/jquery.isotope.v3.0.2.js" strategy="lazyOnload" />
        <Script src="/js/vendor/smooth-scroll.min.js" strategy="lazyOnload" />
        <Script src="/js/vendor/venobox.min.js" strategy="lazyOnload" />
        <Script src="/js/vendor/jquery.ajaxchimp.min.js" strategy="lazyOnload" />
        <Script src="/js/vendor/jquery.counterup.min.js" strategy="lazyOnload" />
        <Script src="/js/vendor/jquery.waypoints.v2.0.3.min.js" strategy="lazyOnload" />
        <Script src="/js/vendor/jquery.slicknav.min.js" strategy="lazyOnload" />
        <Script src="/js/vendor/jquery.nivo.slider.pack.js" strategy="lazyOnload" />
        <Script src="/js/vendor/letteranimation.min.js" strategy="lazyOnload" />
        <Script src="/js/vendor/wow.min.js" strategy="lazyOnload" />
        <Script src="/js/contact.js" strategy="lazyOnload" />
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
