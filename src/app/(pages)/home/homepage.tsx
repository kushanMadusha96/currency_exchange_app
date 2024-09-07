'use client'
import React, { useState } from 'react'
import styles from './homepage.module.css'
import Dropdown from '@/app/(components)/dropdown/dropdown'
import { LiaExchangeAltSolid } from "react-icons/lia";
import ToggleButton from '@/app/(components)/toggle_button/toggleButton';
import { PiInfoLight } from "react-icons/pi";
import Button from '@/app/(components)/button/button';
import { RiCoinsLine, RiLineChartLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import Image from 'next/image';

export default function HomePage() {
    const [activeButton, setActiveButton] = useState<Number>(1);
    const [showCountrySelectorFrom, setShowCountrySelectorFrom] = useState<Boolean>(false)
    const [showCountrySelectorTo, setShowCountrySelectorTo] = useState<Boolean>(false)

    const handleButtonClick = (buttonId: number) => {
        setActiveButton(buttonId);
    };

    const toggleCountrySelectorFrom = () => {
        setShowCountrySelectorFrom(!showCountrySelectorFrom);
    }
    const toggleCountrySelectorTo = () => {
        setShowCountrySelectorTo(!showCountrySelectorTo);
    }

    const flags = [
        { id: 1, flag: `/assets/euro.png` },
        { id: 2, flag: `/assets/usa.jpeg` },
        { id: 3, flag: `/assets/euro.png` },
        { id: 4, flag: `/assets/usa.jpeg` },
        { id: 5, flag: `/assets/euro.png` },
        { id: 6, flag: `/assets/usa.jpeg` },
        { id: 7, flag: `/assets/euro.png` },
        { id: 8, flag: `/assets/usa.jpeg` },
        { id: 9, flag: `/assets/euro.png` },
        { id: 10, flag: `/assets/usa.jpeg` },
    ]

    return (
        <div>
            <header className={styles.header}>
                {/* <div className={styles.firstDiv}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        viewBox="0 0 2060.64 743.655"
                        width="500"
                        height="200"
                        color='#FFFFFF'
                    >
                        <path
                            fill="currentColor"
                            d="M12.316 606.967a3.002 3.002 0 01-.582-5.944c57.065-11.357 107.4-35.86 153.88-74.909 40.988-34.435 75.491-77 108.859-118.163 35.843-44.215 72.906-89.936 119.082-127.536 51.473-41.912 108.74-68.703 175.077-81.904 41.97-8.353 83.035-8.556 125.542-.618 38.131 7.122 76.633 20.685 117.706 41.467 77.293 39.106 152.096 98.522 224.437 155.98 72.02 57.204 146.478 116.343 223.83 155.829 88.282 45.066 170.775 59.098 252.192 42.893 77.4-15.403 141.682-45.008 196.52-90.506 25.59-21.233 49.374-45.658 72.708-74.671l.178-.221c8.521-10.596 15.252-18.964 24.013-30.566a5646.241 5646.241 0 0019.502-25.964c29.313-39.283 56.994-76.378 91.672-106.68 38.426-33.576 79.99-53.924 130.801-64.036a3 3 0 111.172 5.885c-49.74 9.899-90.421 29.813-128.025 62.67-34.199 29.882-61.694 66.729-90.804 105.74a5693.246 5693.246 0 01-19.529 26c-8.817 11.676-15.574 20.076-24.127 30.712l-.177.22c-23.59 29.33-47.649 54.037-73.553 75.528-55.625 46.152-120.777 76.172-199.18 91.774-82.792 16.478-166.56 2.27-256.092-43.434-77.885-39.758-152.582-99.087-224.82-156.462-72.118-57.284-146.679-116.506-223.427-155.338-40.558-20.52-78.534-33.906-116.099-40.922-41.74-7.794-82.062-7.596-123.27.604-65.352 13.006-121.764 39.394-172.458 80.673-45.695 37.207-82.56 82.683-118.21 126.662-33.545 41.382-68.233 84.173-109.661 118.978-47.273 39.716-98.487 64.64-156.569 76.2-.197.04-.394.059-.588.059z"
                        />
                    </svg>
                </div> */}
                <div className={styles.secondDiv}>
                    <span>Xe Currency Converter</span>
                    <span>Check live foreign currency exchange rates</span>
                </div>
                <div className={styles.thirdDiv}>
                    <div>
                        <ToggleButton isActive={activeButton === 1} onClick={() => handleButtonClick(1)} text='Convert' icon={<RiCoinsLine color='#1A86FA' size={20} className={styles.toggleIcon} />} />
                        <ToggleButton isActive={activeButton === 2} onClick={() => handleButtonClick(2)} text='Charts' icon={<RiLineChartLine color='#1A86FA' size={20} className={styles.toggleIcon} />} />
                    </div>
                    <div>
                        <div className={styles.amountInput}>
                            <span>Amount</span>
                            <input
                                placeholder='$1.00'
                            />
                        </div>
                        {
                            showCountrySelectorFrom ?
                                <CountrySelector onClick={() => toggleCountrySelectorFrom()} label='From' /> :
                                <Dropdown label='From' country='USD - US Dollar' flag={`/assets/usa.jpeg`} onClick={() => toggleCountrySelectorFrom()} />
                        }
                        <div className={styles.changeIcon}>
                            <LiaExchangeAltSolid color='#0A146E' />
                        </div>
                        {
                            showCountrySelectorTo ?
                                <CountrySelector onClick={() => toggleCountrySelectorTo()} label='To' /> :
                                <Dropdown label='To' country='EURO - Euro' flag={`/assets/euro.png`} onClick={() => toggleCountrySelectorTo()} />
                        }
                    </div>
                    <div>
                        <div className={styles.infoLabel}>
                            <PiInfoLight size={30} className={styles.infoIcon} />
                            <span>We use the mid-market rate for our Converter. This is for informational purposes only. You won’t receive this rate when sending money.</span>
                        </div>
                        <Button bc={true} text='Convert' mr={25} />
                    </div>
                </div>
                <div className={styles.fourthDiv}>
                    {
                        flags.map((item, index) => (
                            <Image
                                key={index + 1}
                                alt='animateFlag'
                                src={item.flag}
                                width={100}
                                height={100}
                                className={styles.animatedFlag}
                            />
                        ))
                    }
                </div>
            </header>
            <section className={styles.liveRatesContainer}>
                <span>Xe Live Exchange Rates</span>
                <table className={styles.table}>
                    <thead>
                        <tr className={styles.tr}>
                            <th className={styles.th}>Inverse</th>
                            <th className={styles.th}>Amount</th>
                            <th className={styles.th}>Change(24h)</th>
                        </tr>
                    </thead>
                    <tbody className={styles.tbody}>
                        {Array.from({ length: 7 }, (_, index) => (
                            <>
                                <tr>
                                    <td className={styles.td}>
                                        <Image alt='tableFlag' src={`/assets/euro.png`} width={40} height={40} className={styles.tableFlag} />
                                        Us Dollar
                                    </td>
                                    <td className={styles.td}>1</td>
                                    <td className={styles.td}>2.5%</td>
                                </tr>
                                <tr className={styles.devider}></tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export function CountrySelector(props: { onClick: () => void, label: string }) {
    return (
        <div>
            <div className={styles.selectContainer}>
                <span>{props.label}</span>
                <div>
                    <input
                        placeholder='Type to search...'
                    />
                    <RxCross2 className={styles.crossIcon} size={20} onClick={props.onClick} />
                </div>
            </div>
            <div className={styles.countryListContaier}>
                {Array.from({ length: 10 }, (_, index) => (
                    <Country key={index + 1} flag={`/assets/euro.png`} country='EURO - Euro' />
                ))}
            </div>
        </div>
    );
}

export function Country(props: { flag: string, country: string }) {
    return (
        <div className={styles.countryContainer}>
            <Image
                alt="flag"
                src={props.flag}
                width={35}
                height={25}
                className={styles.countryFlag}
            />
            <span className={styles.countryName}>{props.country}</span>
        </div>
    );
}

