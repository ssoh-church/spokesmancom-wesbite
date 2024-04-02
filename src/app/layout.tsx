import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Script from "next/script";

import "./iconfonts.css";

import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const inter = Inter({ subsets: ["latin"] }); // Assuming this is a font styling import

export const metadata: Metadata = {
  title: "Spokesman Communication Ministries",
  description: "We are dealers in HOPE",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Move meta tags and link elements here */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="author" content="DynamicLayers" />

        <title>Spokesman Communication Ministries || NGO/Charity/Fundraising Template</title>

        <link rel="shortcut icon" type="image/x-icon" href="img/meta/favicon.ico" />

        {/* Link your CSS files here (consider using Next.js's built-in CSS modules or styled-components for better organization) */}
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        <link rel="stylesheet" href="css/themify-icons.css" />
        <link rel="stylesheet" href="css/elegant-font-icons.css" />
        <link rel="stylesheet" href="css/elegant-line-icons.css" />
        <link rel="stylesheet" href="css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/venobox/venobox.css" />
        <link rel="stylesheet" href="css/owl.carousel.css" />
        <link rel="stylesheet" href="css/slicknav.min.css" />
        <link rel="stylesheet" href="css/css-animation.min.css" />
        <link rel="stylesheet" href="css/nivo-slider.css" />
        <link rel="stylesheet" href="css/main.css" />
        <link rel="stylesheet" href="css/responsive.css" />
        <Script src="/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js" />
      </head>
      <body className={inter.className}>
        <Header />
        <div className="header-height"></div>
        {children}
        <Footer />

        {/* Script tags can be added here or consider using Next.js's Script component for lazy loading */}
        
        <Script src="/js/vendor/jquery-1.12.4.min.js"/> 
        <Script src="/js/vendor/bootstrap.min.js" />
        <Script src="/js/vendor/tether.min.js" />
        <Script src="/js/vendor/imagesloaded.pkgd.min.js" />
        <Script src="/js/vendor/owl.carousel.min.js" />
        <Script src="/js/vendor/jquery.isotope.v3.0.2.js" />
        <Script src="/js/vendor/smooth-scroll.min.js" />
        <Script src="/js/vendor/venobox.min.js" />
        <Script src="/js/vendor/jquery.ajaxchimp.min.js" />
        <Script src="/js/vendor/jquery.counterup.min.js" />
        <Script src="/js/vendor/jquery.waypoints.v2.0.3.min.js" />
        <Script src="/js/vendor/jquery.slicknav.min.js" />
        <Script src="/js/vendor/jquery.nivo.slider.pack.js" />
        <Script src="/js/vendor/letteranimation.min.js" />
        <Script src="/js/vendor/wow.min.js" />
        <Script src="/js/contact.js" />
        <Script src="/js/main.js" />
      </body>
    </html>
  );
}
