import React from 'react';
import { motion } from 'framer-motion';
import { Player } from '../../types/game.types';
import styles from './Cell.module.css';

interface CellProps {
    value: Player;
    onClick: () => void;
}

export const Cell: React.FC<CellProps> = ({ value, onClick }) => {
    return (
        <motion.button
            className={styles.cell}
            onClick={onClick}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.9 }}
            disabled={!!value}
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