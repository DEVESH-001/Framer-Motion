"use client";
import { motion } from "motion/react";

const content = () => {
  return (
    <div
      className="h-screen w-full bg-neutral-950 flex items-center justify-center [perspective::1000px] transform-3d"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6, 182, 212, 0.2) 1px,transparent 0.5px)`,
        backgroundSize: `20px 20px`,
        backgroundRepeat: `repeat`,
      }}
    >
      <motion.button
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(8,112,184,0.7)",
          y: -5,
        }}
        style={{ translateZ: 100 }}
        whileTap={{ y: 0 }}
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        className="text-neutral-500 px-12 py-4 bg-black rounded-lg shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset] relative group cursor-pointer"
      >
        <span className="group-hover:text-cyan-500 transition-colors duration-300">
          Subscribe
        </span>
        <span className="absolute inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto "></span>
        <span className="absolute inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent h-1 w-full mx-auto blur-sm opacity-0 group-hover:opacity-100 transition duration-200"></span>
      </motion.button>
    </div>
  );
};

export default content;
