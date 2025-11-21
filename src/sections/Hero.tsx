import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { PERSONAL_INFO } from "../constants";
import Button from "../components/ui/Button";

const Hero: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center relative pt-20"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <span className="text-accent font-medium tracking-wider uppercase text-sm mb-4 block">
              Portfolio
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary mb-8 leading-[1.1]"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Hello, I'm {PERSONAL_INFO.name.split(" ")[0]}.<br />
            <span className="text-secondary opacity-60">
              {PERSONAL_INFO.title}.
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-secondary max-w-xl mb-10 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {PERSONAL_INFO.about}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Button href="#projects">View Work</Button>
            <Button variant="outline" href="#contact">
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-secondary/40"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;
