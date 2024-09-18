
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { SPOKESMAN } from "@/lib/constants";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: SPOKESMAN.APP_TITLE,
  description: SPOKESMAN.APP_DESC,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
          {children}
      </body>
    </html>
  );
}
