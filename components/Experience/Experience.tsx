import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import { LiIcon } from "../LiIcon/LiIcon"

export interface DetailsTypes {
  position: string
  company: string
  companyLink: string
  time: string
  address: string
  work: string
}

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work
}: DetailsTypes) => {
  const ref = useRef<HTMLLIElement | null>(null)
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col 
    items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  )
}

export const Experience = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        ></motion.div>
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Teaching Assistant"
            company="Henry"
            companyLink="https://www.soyhenry.com/"
            time="April/2023-Present"
            address="Argentina"
            work="Coordinating a group of students to facilitate integration into the study team. Assisting with exercise resolutions and promoting group collaboration (Pair Programming)Contributing ideas for the improvement of Bootcamp processes."
          />
          <Details
            position="Full Stack Developer"
            company="Parcels"
            companyLink="https://parcelas.vercel.app/"
            time="june/2023-Present"
            address="Argentina"
            work="Act as a task assigner and ful lstack developer for a land sale application proyect. Collaborate with team members to delegate and efficiently track tasks. Develop front-end and back-end components of the application using a full stack approach. Ensure seamless integration of features and functionality for a smooth user experience. Implement robust and scalable solutions to meet land sale application requirements."
          />
        </ul>
      </div>
    </div>
  )
}
