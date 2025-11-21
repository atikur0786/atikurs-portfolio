import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
    return (
        <motion.div
            className={`bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-sm ${hover ? 'hover:shadow-md hover:border-accent/30 transition-all duration-300' : ''} ${className}`}
            whileHover={hover ? { y: -5 } : {}}
        >
            {children}
        </motion.div>
    );
};

export default Card;
