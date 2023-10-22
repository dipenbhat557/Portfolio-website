import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Small colored circle */}
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          {/* Vertical violet gradient line */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          {/* Hero text */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Dipendra</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I develop web <br className="sm:block hidden" />
            applications using Spring Boot and React.
          </p>
        </div>
      </div>

      {/* Render the ComputersCanvas component */}
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        {/* Link to scroll to the 'About' section */}
        <a href="#about">
          <div className="rounded-3xl border-4 border-secondary flex justify-center items-start p-222 w-[35px] h-[64px]">
            {/* Animated circle */}
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
