import "./globals.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Navbar } from "@/components/Navbar/Navbar"
import Head from "next/head"
import { Footer } from "@/components/Footer/Footer"

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Luciano Portfolio",
  description: "Luciano's Portfolio"
}
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
      </Head>
      <body className={`${montserrat.className} bg-light w-full min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
