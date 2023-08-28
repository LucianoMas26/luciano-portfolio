"use client"
import React, { ButtonHTMLAttributes } from "react"
import Link from "next/link"
import { Logo } from "../Logo/Logo"
import { usePathname, useRouter } from "next/navigation"
import { LinkedInIcon, GithubIcon } from "@/components/NavIcons/NavIcons"
import { motion } from "framer-motion"
import { useState } from "react"

interface CustomLink {
  href: string
  title: string
  className?: string
}
interface CustomMobileLink {
  href: string
  title: string
  className?: string
  toggle: any
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  const CustomLink = ({ href, title, className = "" }: CustomLink) => {
    const router = usePathname()

    return (
      <Link href={href} className={`${className} relative group`}>
        {title}
        <span
          className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
            router === href ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </span>
      </Link>
    )
  }

  const CustomMobileLink = ({
    href,
    title,
    className = "",
    toggle
  }: CustomMobileLink) => {
    const router = useRouter()
    const path = usePathname()

    const handleClick = () => {
      toggle()
      router.push(href)
    }

    return (
      <button
        className={`${className} relative group text-light my-2`}
        onClick={handleClick}
      >
        {title}
        <span
          className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
            path === href ? "w-full" : "w-0"
          }`}
        >
          &nbsp;
        </span>
      </button>
    )
  }

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="lg:flex flex-col justify-center items-center hidden"
        onClick={handleClick}
      >
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title={"Home"} className="mr-4" />
          <CustomLink href="/about" title={"About"} className="mx-4" />
          <CustomLink href="/projects" title={"Projects"} className="mx-4" />
          <CustomLink href="/learning" title={"Learning"} className="ml-4" />
        </nav>

        <nav className="flex justify-center items-center flex-wrap">
          <motion.a
            href="https://github.com/LucianoMas26"
            target={"_blank"}
            whileHover={{
              y: -2
            }}
            whileTap={{
              scale: 0.9
            }}
            className="w-6 mx-3"
          >
            <GithubIcon className={"w-7"} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/lucianomas"
            target={"_blank"}
            whileHover={{
              y: -2
            }}
            whileTap={{
              scale: 0.9
            }}
            className="w-6 ml-3"
          >
            <LinkedInIcon className={"w-7"} />
          </motion.a>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title={"Home"}
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title={"About"}
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title={"Projects"}
              className=""
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/learning"
              title={"Learning"}
              className=""
              toggle={handleClick}
            />
          </nav>

          <nav className="flex justify-center items-center flex-wrap mt-2">
            <motion.a
              href="https://github.com/LucianoMas26"
              target={"_blank"}
              whileHover={{
                y: -2
              }}
              whileTap={{
                scale: 0.9
              }}
              className="w-6 mx-3 rounded-full bg-light sm:mx-1"
            >
              <GithubIcon className={"w-7"} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/lucianomas"
              target={"_blank"}
              whileHover={{
                y: -2
              }}
              whileTap={{
                scale: 0.9
              }}
              className="w-6 ml-3 sm:mx-1"
            >
              <LinkedInIcon className={"w-7"} />
            </motion.a>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}
