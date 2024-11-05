import { useState, useCallback } from 'react';

import { Player, Board, GameStatus } from '../types/game.types';



const WINNING_COMBINATIONS = [

    [0, 1, 2], [3, 4, 5], [6, 7, 8], // שורות

    [0, 3, 6], [1, 4, 7], [2, 5, 8], // עמודות

    [0, 4, 8], [2, 4, 6] // אלכסונים

];



const createEmptyBoard = (): Board => new Array(9).fill(null);



export const useGame = () => {

    const [board, setBoard] = useState<Board>(createEmptyBoard());

    const [currentPlayer, setCurrentPlayer] = useState<Player>('X');

    const [status, setStatus] = useState<GameStatus>('playing');

    const [winningCombination, setWinningCombination] = useState<number[] | null>(null);



    const checkWinner = useCallback((boardState: Board): [Player, number[] | null] => {

        for (const combo of WINNING_COMBINATIONS) {

            const [a, b, c] = combo;

            if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {

                return [boardState[a], combo];

            }

        }

        return [null, null];

    }, []);



    const makeMove = useCallback((index: number) => {

        if (board[index] || status !== 'playing') return;



        const newBoard = [...board];

        newBoard[index] = currentPlayer;

        setBoard(newBoard);



        const [winner, winningCombo] = checkWinner(newBoard);

        if (winner) {

            setStatus('won');

            setWinningCombination(winningCombo);

        } else if (newBoard.every(cell => cell !== null)) {

            setStatus('draw');

        } else {

            setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');

        }

    }, [board, currentPlayer, status, checkWinner]);



    const resetGame = useCallback(() => {

        setBoard(createEmptyBoard());

        setCurrentPlayer('X');

        setStatus('playing');

        setWinningCombination(null);

    }, []);



    return {

        board,

        currentPlayer,

        status,

        winningCombination,

        makeMove,

        resetGame

    };

}; 
