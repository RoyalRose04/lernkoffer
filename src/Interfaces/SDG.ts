/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable unicorn/filename-case */
import React, { CSSProperties } from "react";

export interface InfotextProps {
    number: number;
    name: string;
    sdg: string;
    text: Record<number, string>;
    header: Record<number, string>;
    logo: string;
    eg: string;
    audioFile?: string;
}

export interface ModalProps {
    modalContent?:JSX.Element;
    modalStyle?:CSSProperties
    incrementCount: () => void;
    setSelectedItem: (n: number) => void;
    answercw;
    modalIsOpen;
    setIsOpen;
}

export interface QuizProps {
    /**
     * header
     */ 
    sdgNumber: number;
    sdgTitle: string;
    sdg: string;
    logo:string

    /**
     * props for text part
     */
    tile: Record<number, string>;
    text: Record<number, string>;
          
    /**
     * props for quiz part 
     */
    question: Record<number, string>;
    buttonLeftContent: Record<number, JSX.Element>;
    buttonRightContent: Record<number, JSX.Element>;
    answerNumbersLeft: Record<number, string>;
    answerNumbersRight: Record<number, string>;
    explanation: Record<number, string>;

    /**
     * Modal
     */
    modalContent?:JSX.Element;
    modalStyle?:CSSProperties
    isQuizActive: Record<number, boolean>; 
}