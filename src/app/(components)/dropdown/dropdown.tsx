import React from 'react'
import styles from './dropdown.module.css'
import Image, { StaticImageData } from 'next/image'
import usa from '../../../assets/usa.jpeg'
import euro from '../../../assets/euro.png'
import { IoIosArrowDown } from "react-icons/io";

export default function Dropdown(props: { label: string, flag: string | StaticImageData, country: string, onClick: () => void }) {
    return (
        <div className={styles.container} onClick={props.onClick}>
            <span className={styles.label}>{props.label}</span>
            <div className={styles.inputContainer}>
                <div className={styles.leftSide}>
                    <Image
                        alt="flag"
                        src={props.flag}
                        width={25}
                        height={25}
                    />
                    <span className={styles.countryName}>{props.country}</span>
                </div>
                <IoIosArrowDown className={styles.arrowIcon} size={20}/>
            </div>
        </div>

    )
}
