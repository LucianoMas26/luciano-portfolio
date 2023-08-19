import React from "react"
import { MainLayout } from "../MainLayout/MainLayout"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <MainLayout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center">
          Build With <span className="text-primary text-2xl px-1">&#9825;</span>
          by&nbsp;
          <Link
            href="https://www.linkedin.com/in/lucianomas"
            className="underline underline-offset-2"
          >
            Luciano Mas
          </Link>
        </div>

        <Link
          href="https://www.linkedin.com/in/lucianomas"
          target={"_blank"}
          className="underline underline-offset-2"
        >
          Say hello
        </Link>
      </MainLayout>
    </footer>
  )
}
