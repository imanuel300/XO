import React from 'react';
import { motion } from 'framer-motion';
import { Player, GameStatus as GameStatusType } from '../../types/game.types';
import styles from './GameStatus.module.css';

interface GameStatusProps {
    currentPlayer: Player;
    status: GameStatusType;
    onReset: () => void;
}

export const GameStatus: React.FC<GameStatusProps> = ({ currentPlayer, status, onReset }) => {
    const getMessage = () => {
        switch (status) {
            case 'won':
                return `שחקן ${currentPlayer} ניצח!`;
            case 'draw':
                return 'תיקו!';
            default:
                return `תור שחקן ${currentPlayer}`;
        }
    };

    return (
        <div className={styles.status}>
            <motion.p
                key={getMessage()}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
            >
                {getMessage()}
            </motion.p>
            {(status === 'won' || status === 'draw') && (
                <motion.button
                    className={styles.resetButton}
                    onClick={onReset}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    משחק חדש
                </motion.button>
            )}
        </div>
    );
}; 