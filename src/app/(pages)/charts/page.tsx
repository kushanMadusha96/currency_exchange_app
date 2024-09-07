import React from 'react'
import styles from './charts.module.css'

export default function Chart() {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.secondDiv}>
                    <span>Xe Currency Charts</span>
                    <span>Review historical currency rates</span>
                </div>
                <div className={styles.thirdDiv}>

                    <div className={styles.liveRate}>
                        <span>Live Currency Rates</span>
                        <div className={styles.rateContainer}>
                            <table className={styles.rateTbl}>
                                <thead>
                                    <tr>
                                        <th className={styles.th}>Currency</th>
                                        <th className={styles.th}>Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.from({ length: 15 }, (_, index) => (
                                        <tr key={index + 1}>
                                            <td className={styles.td}>EUR/USD</td>
                                            <td className={styles.td}>1.10784</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className={styles.bankRate}>
                        <span>Central Bank Rates</span>
                        <div className={styles.rateContainer}>
                            <table className={styles.rateTbl}>
                                <thead>
                                    <tr>
                                        <th className={styles.th}>Currency</th>
                                        <th className={styles.th}>Interest Rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.from({ length: 15 }, (_, index) => (
                                        <tr key={index + 1}>
                                            <td className={styles.td}>EUR</td>
                                            <td className={styles.td}>1.10784</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </header>
        </div>
    )
}
