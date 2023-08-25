import { AnimatedText } from "@/components/AnimatedText/AnimatedText"
import { MainLayout } from "@/components/MainLayout/MainLayout"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { GithubIcon } from "@/components/NavIcons/NavIcons"
import project2 from "@/images/rickAndMorty.jpeg"
import project3 from "@/images/videogameApp.jpg"
import project1 from "@/images/parcels.jpg"
import { StaticImageData } from "next/image"
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

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github
}: FeaturedProjectTypes) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border boder-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={link} target="_blank" className="w-10">
            <GithubIcon className="" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
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
    <article className="w-full flex  flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>

        <div className="mt-2 flex items-center justify-between w-full">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={link} target="_blank" className="w-8">
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
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <MainLayout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32">
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
            <div className="col-span-6">
              <Project
                title="Rick and Morty"
                img={project2}
                github="https://github.com/LucianoMas26/rick-and-morty-app"
                link="https://rick-and-morty-app-vert.vercel.app/"
                type="Featured Project"
              />
            </div>
            <div className="col-span-6">
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
