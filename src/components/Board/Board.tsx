import React from 'react';
import { motion } from 'framer-motion';
import { Cell } from '../Cell/Cell';
import { Board as BoardType } from '../../types/game.types';
import styles from './Board.module.css';

interface BoardProps {
    board: BoardType;
    onCellClick: (index: number) => void;
}

export const Board: React.FC<BoardProps> = ({ board, onCellClick }) => {
    return (
        <motion.div 
            className={styles.board}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {board.map((value, index) => (
                <Cell
                    key={index}
                    value={value}
                    onClick={() => onCellClick(index)}
                />
            ))}
        </motion.div>
    );
}; 