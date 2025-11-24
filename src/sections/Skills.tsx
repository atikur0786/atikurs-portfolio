import React from "react";
import { motion } from "framer-motion";
import { Layout, Server, Database, Settings, Code2 } from "lucide-react";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import { SKILLS } from "../constants";

const Skills: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Frontend: Layout,
    Backend: Server,
    Database: Database,
    Tools: Settings,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section id="skills" className="relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        {/* Decorative background blur */}
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-50/40 rounded-full blur-3xl -z-10" />

        <SectionTitle
          title="Technical Expertise"
          subtitle="A comprehensive toolbelt for building scalable digital products."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {SKILLS.map((skillGroup, index) => {
            const Icon = iconMap[skillGroup.category] || Code2;

            return (
              <motion.div
                key={skillGroup.category}
                variants={itemVariants}
                className="group p-4 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 shadow-sm hover:shadow-lg hover:border-neutral-200 dark:hover:border-neutral-600 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-neutral-50 dark:bg-neutral-700 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    {skillGroup.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-secondary rounded-lg hover:border-primary/30 hover:text-primary hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors cursor-default"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
};

export default Skills;
