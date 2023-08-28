"use client"
import { motion } from "framer-motion"
export const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen z-30 bg-primary"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen z-30 bg-light"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen z-10 bg-dark"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, ease: "easeInOut" }}
      />
    </>
  )
}
