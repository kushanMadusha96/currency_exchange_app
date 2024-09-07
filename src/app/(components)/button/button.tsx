import React from 'react';
import styles from './button.module.css';

interface ButtonProps {
    text: string;
    bc: boolean;
    ml?: number;
    mr?: number;
}

export default function Button({ text, bc, ml, mr }: ButtonProps) {
    return <button style={{ marginRight: mr }} className={bc ? styles.coler_button : styles.button}>{text}</button>;
}
