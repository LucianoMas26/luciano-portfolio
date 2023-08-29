"use client"
import Image from "next/image"
import profilePic from "@/images/fotoColorProfile-PhotoRoom.png"
import { MainLayout } from "@/components/MainLayout/MainLayout"
import { AnimatedText } from "@/components/AnimatedText/AnimatedText"
import Link from "next/link"
import { LinkArrow } from "@/components/NavIcons/NavIcons"
import { HireMe } from "@/components/HireMe/HireMe"
import icon from "@/images/miscellaneous_icons_1.png"
import { TransitionEffect } from "@/components/TransitionEffect/TransitionEffect"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Luciano Mas | Home Page</title>
        <meta name="description" content="portfolio" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen">
        <MainLayout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-[75%]">
              <Image
                src={profilePic}
                alt=""
                className="w-[90%] h-auto rounded-full lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text={"Turning Vision Into Reality With Code And Design."}
                className="!text-5xl !text-left xl:!text-4xl lg:!text-center lg:!text-5xl md:!text-4xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/CV.pdf"
                  target={"_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:lucianoalejandromas@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </MainLayout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-[5.8rem] md:hidden">
          <Image src={icon} alt="LucianoMas" className="w-full h-auto" />
        </div>
      </main>
    </>
  )
}
