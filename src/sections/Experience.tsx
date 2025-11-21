import React from "react";
import { motion } from "framer-motion";
import Section from "../components/ui/Section";
import SectionTitle from "../components/ui/SectionTitle";
import { EXPERIENCE, EDUCATION } from "../constants";

const Experience = () => {
  return (
    <Section id="experience">
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <div>
            <SectionTitle title="Experience" />
            <div className="space-y-12">
              {EXPERIENCE.map((job, index) => (
                <motion.div
                  key={job.id}
                  className="relative pl-8 border-l border-neutral-200 dark:border-neutral-800"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-accent" />
                  <div className="mb-2">
                    <span className="text-sm text-secondary font-medium mb-1 block">
                      {job.period}
                    </span>
                    <h3 className="text-xl font-bold text-primary">
                      {job.role}
                    </h3>
                    <h4 className="text-lg text-secondary">{job.company}</h4>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-secondary space-y-2 mt-4 text-sm leading-relaxed">
                    {job.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <SectionTitle title="Education" />
            <div className="space-y-12">
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="relative pl-8 border-l border-neutral-200 dark:border-neutral-800"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-600" />
                  <div className="mb-2">
                    <span className="text-sm text-secondary font-medium mb-1 block">
                      {edu.year}
                    </span>
                    <h3 className="text-xl font-bold text-primary">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg text-secondary">
                      {edu.institution}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
