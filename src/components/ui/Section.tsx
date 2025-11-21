import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    id: string;
    className?: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
    return (
        <section id={id} className={`py-20 md:py-32 px-6 md:px-12 relative overflow-hidden ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-7xl mx-auto relative z-10"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
