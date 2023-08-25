"use client"
import React from "react"
import Link from "next/link"
import { Logo } from "../Logo/Logo"
import { usePathname } from "next/navigation"
import { LinkedInIcon, GithubIcon } from "@/components/NavIcons/NavIcons"
import { motion } from "framer-motion"

interface CustomLink {
  href: string
  title: string
  className?: string
}

export const Navbar = () => {
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

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <CustomLink href="/" title={"Home"} className="mr-4" />
        <CustomLink href="/about" title={"About"} className="mx-4" />
        <CustomLink href="/projects" title={"Projects"} className="mx-4" />
        <CustomLink href="/articles" title={"Articles"} className="ml-4" />
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

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  )
}
