"use client"
import "./globals.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Navbar } from "@/components/Navbar/Navbar"
import Head from "next/head"
import { Footer } from "@/components/Footer/Footer"
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "Luciano Portfolio",
  description: "Luciano's Portfolio"
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const path = usePathname()
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={`${montserrat.className} bg-light w-full min-h-screen`}>
        <Navbar />
        <AnimatePresence mode="wait">
          {path}
          {children}
        </AnimatePresence>
        <Footer />
      </body>
    </html>
  )
}
