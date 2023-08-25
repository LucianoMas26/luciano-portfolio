import { AnimatedText } from "@/components/AnimatedText/AnimatedText"
import { MainLayout } from "@/components/MainLayout/MainLayout"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { GithubIcon } from "@/components/NavIcons/NavIcons"
import project1 from "@/images/rickAndMorty.jpg"
import { StaticImageData } from "next/image"
interface FeaturedProjectTypes {
  type: string
  title: string
  summary: string
  img: StaticImageData
  link: string
  github: string
}

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github
}: FeaturedProjectTypes) => {
  return (
    <article>
      <Link href={link} target="_blank">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div>
        <span>{type}</span>
        <Link href={link} target="_blank">
          <h2>{title}</h2>
        </Link>
        <p>{summary}</p>
        <div>
          <Link href={link} target="_blank">
            <GithubIcon className="" />
          </Link>
          <Link href={link} target="_blank">
            Visit Proyect
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
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <MainLayout className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge!" className="" />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                title="Rick and Morty"
                summary="The Rick and Morty application is a haven for fans of the series. With React, Redux, Tailwind CSS, Node.js, Express, and PostgreSQL, you have crafted a platform that blends a visually appealing interface with interactive and personalized functionality, providing users an exciting way to explore, interact, and connect with the world of Rick and Morty."
                img={project1}
                github="https://github.com/LucianoMas26/rick-and-morty-app"
                link="https://rick-and-morty-app-vert.vercel.app/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">Project 1</div>
            <div className="col-span-6">Project 2</div>
            <div className="col-span-12">featured Project</div>
            <div className="col-span-6">Project 3</div>
            <div className="col-span-6">Project 4</div>
          </div>
        </MainLayout>
      </main>
    </>
  )
}
