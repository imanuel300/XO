import React from 'react';
import { motion } from 'framer-motion';
import { Player } from '../../types/game.types';
import styles from './Cell.module.css';

interface CellProps {
    value: Player;
    onClick: () => void;
    isWinning?: boolean;
}

export const Cell: React.FC<CellProps> = ({ value, onClick, isWinning }) => {
    return (
        <motion.button
            className={`${styles.cell} ${isWinning ? styles.winning : ''}`}
            onClick={onClick}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
            disabled={!!value}
            animate={isWinning ? {
                scale: [1, 1.2, 1],
                rotate: [0, 360, 0],
                borderColor: ['#4f46e5', '#10b981', '#4f46e5'],
            } : {}}
            transition={isWinning ? {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse"
            } : {}}
        >
            {value && (
                <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    {value}
                </motion.span>
            )}
        </motion.button>
    );
}; 