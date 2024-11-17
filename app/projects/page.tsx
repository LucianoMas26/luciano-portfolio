"use client"
import { AnimatedText } from "@/components/AnimatedText/AnimatedText"
import { MainLayout } from "@/components/MainLayout/MainLayout"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { GithubIcon } from "@/components/NavIcons/NavIcons"
import project2 from "@/images/rickAndMorty.jpeg"
import project3 from "@/images/videogameApp.jpg"
import project1 from "@/images/parcels.jpg"
import project4 from "@/images/Sarsfield.png"
import project5 from "@/images/luzem.png"
import { StaticImageData } from "next/image"
import { motion } from "framer-motion"
import { TransitionEffect } from "@/components/TransitionEffect/TransitionEffect"
interface FeaturedProjectTypes {
  type: string
  title: string
  summary: string
  img: StaticImageData
  link: string
  github: string
}
interface ProjectTypes {
  title: string
  type: string
  img: StaticImageData
  link: string
  github: string
}

const FramerImage = motion(Image)

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github
}: FeaturedProjectTypes) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border boder-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl sm:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
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
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={link} target="_blank" className="w-10">
            <GithubIcon className="" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Proyect
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, img, link, github }: ProjectTypes) => {
  return (
    <article className="w-full flex  flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>

        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={link} target="_blank" className="w-8 md:w-6">
            <GithubIcon className="" />
          </Link>
        </div>
      </div>
    </article>
  )
}

export default function page() {
  return (
    <>
      <Head>
        <title>Luciano Mas | Projects Page</title>
        <meta name="description" content="portfolio" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <MainLayout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Sarsfield (BETA)"
                summary="Jurisprudence search engine powered by artificial intelligence. Built from Nuxt, tailwindCss, TypeScript. It facilitates the search and analysis of jurisprudence quickly and efficiently. It uses machine learning algorithms to deliver relevant results, sorted by context and legal precedent, optimizing the work of lawyers, researchers and law students. The application stands out for its precision, accessibility and continuous learning capacity, adapting to the user's specific needs."
                img={project4}
                github=""
                link="https://sarsfield.ai/g"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Parcels"
                summary="Land sales application created with Next.js, TypeScript, Redux Toolkit, MongoDB, Express, Node.js, and Tailwind CSS offers a user-friendly platform for individuals interested in purchasing land in Chile. This combination of technologies enhances the overall user experience, making it simple and enjoyable to explore, select, and acquire desired land parcels."
                img={project1}
                github="https://github.com/LucasRibotta/Project-Parcels"
                link="https://parcelas.vercel.app/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Luzem"
                summary="A tarot application developed with Next.js, TypeScript, Tailwind CSS, MongoDB, and Mongoose. It is designed to offer personalized services for readings and rituals, providing an intuitive experience for clients. The platform allows users to check prices, easily schedule appointments, and efficiently manage bookings. Its modern and responsive design ensures a smooth experience on both mobile and desktop devices, combining cutting-edge technology with a spiritual focus."
                img={project5}
                github="https://github.com/LucianoMas26/app-tarot"
                link="https://luzem.vercel.app/"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Rick and Morty"
                img={project2}
                github="https://github.com/LucianoMas26/rick-and-morty-app"
                link="https://rick-and-morty-app-vert.vercel.app/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Videogame App"
                img={project3}
                github="https://github.com/LucianoMas26/PI-Videogames-main"
                link="https://pi-videogames-main-ab7z.vercel.app/"
                type="Featured Project"
              />
            </div>
          </div>
        </MainLayout>
      </main>
    </>
  )
}
