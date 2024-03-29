import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../../css/font-awesome.min.css";
import "../../css/themify-icons.css";
import "../../css/elegant-font-icons.css";
import "../../css/elegant-line-icons.css";
import "../../css/bootstrap.min.css";
import "../../css/venobox/venobox.css";
// import "../../css/owl.carousel.css";
import "../../css/slicknav.min.css";
import "../../css/css-animation.min.css";
import "../../css/nivo-slider.css";
import "../../css/main.css";
import "../../css/responsive.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spokesman Communication Ministries",
  description: "We are dealers in HOPE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
