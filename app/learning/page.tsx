"use client"
import { AnimatedText } from "@/components/AnimatedText/AnimatedText"
import { MainLayout } from "@/components/MainLayout/MainLayout"
import Head from "next/head"
import { StaticImageData } from "next/image"
import Link from "next/link"
import Image from "next/image"
import article1 from "@/images/heg.jpg"
import article2 from "@/images/Captura.jpg"
import { motion, useMotionValue } from "framer-motion"
import React, { useRef } from "react"
import { TransitionEffect } from "@/components/TransitionEffect/TransitionEffect"
interface FeaturedArticleTypes {
  img: StaticImageData
  title: string
  time: string
  summary: string
}
interface ArticleTypes {
  img: StaticImageData
  title: string
  date: string
  link: string
}
interface MovingImgTypes {
  img: StaticImageData
  title: string
  link: string
}
const FramerImage = motion(Image)

const MovingImg = ({ title, img, link }: MovingImgTypes) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const imgRef = useRef<HTMLImageElement | null>(null)
  function handleMouse(event: React.MouseEvent) {
    if (imgRef.current) {
      imgRef.current.style.display = "inline-block"
      x.set(event.pageX)
      y.set(-10)
    }
  }
  function handleMouseLeave(event: React.MouseEvent) {
    if (imgRef.current) {
      imgRef.current.style.display = "none"
      x.set(0)
      y.set(0)
    }
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-lg font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  )
}

const Article = ({ img, title, date, link }: ArticleTypes) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  )
}

const FeaturedArticle = ({
  img,
  title,
  time,
  summary
}: FeaturedArticleTypes) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href=""
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
        />
      </Link>
      <Link href="" target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  )
}

export default function learning() {
  return (
    <>
      <Head>
        <title>Luciano Mas | Articles Page</title>
        <meta name="description" content="portfolio" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <MainLayout className="pt-16">
          <AnimatedText
            text="If You Want To Learn, Teach"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="App For The Sale Of Components And Custom Assemblies Of Computers"
              summary="Explore and purchase computer components or custom assemblies with our cutting-edge Nuxt app, powered by advanced technologies such as TypeScript and Tailwind. Designed to simplify the process of buying and building personalized computer setups"
              time="2023"
              img={article1}
            />
            <FeaturedArticle
              title="App For Buying And Selling Digital Art Nft"
              summary="mmerse yourself in the world of digital art NFTs with our app, crafted using the same technologies. Buy and sell unique artworks seamlessly, all powered by Nuxt, TypeScript, and Tailwind"
              time="2023"
              img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            New Learning
          </h2>
          <ul>
            <Article
              title="New Framework Nuxt 3: Learning Fundamentals And Principles Of Nuxt 3"
              date="2023"
              link="/"
              img={article1}
            />
            <Article
              title="Learning Cloud Computing AWS: Cloud Architecture, Container Services, Database and Storage Services"
              date="2023"
              link="/"
              img={article1}
            />
            <Article
              title="Learning Microservices: Robust Backend Structure, Decomposition Services, Individual Scalability"
              date="2023"
              link="/"
              img={article1}
            />
            <Article
              title="Learning Mobile User Interfaces: Development of Native Mobile Applications With Flutter And React Native"
              date="2023"
              link="/"
              img={article1}
            />
          </ul>
        </MainLayout>
      </main>
    </>
  )
}
