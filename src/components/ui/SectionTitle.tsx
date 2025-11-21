import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'left' }) => {
    const alignmentClasses = {
        left: 'text-left',
        center: 'text-center mx-auto',
        right: 'text-right ml-auto'
    };

    return (
        <div className={`mb-16 ${alignmentClasses[align]}`}>
            <motion.h2
                className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    {title}
                </span>
            </motion.h2>
            {subtitle && (
                <motion.p
                    className="text-secondary text-lg md:text-xl max-w-2xl leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {subtitle}
                </motion.p>
            )}
            <motion.div
                className={`h-1 w-20 bg-accent mt-6 rounded-full ${align === 'center' ? 'mx-auto' : ''}`}
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            />
        </div>
    );
};

export default SectionTitle;
