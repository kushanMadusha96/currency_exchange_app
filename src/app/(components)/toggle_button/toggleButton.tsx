'use client'
import React, { useState } from 'react'
import styles from './toggleButton.module.css'

export default function ToggleButton(props: { onClick?: () => void, isActive: boolean, text: string, icon }) {
    const backgroundColor = props.isActive ? '#FFFFFF' : '#EEF7FF';
    return (
        <>
            <div className={styles.toggleContainer}
                style={{ backgroundColor }}
                onClick={props.onClick}
                onMouseMove={(e) => { e.currentTarget.style.backgroundColor = '#F6F5F5' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = backgroundColor }}>
                {props.icon}
                <span className={styles.label}>{props.text}</span>
            </div>
        </>
    )
}

