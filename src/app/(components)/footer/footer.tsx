import React from 'react'
import styles from './footer.module.css'
import { ImFacebook, ImTwitter, ImLinkedin2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { style } from 'framer-motion/client';
import Link from 'next/link';


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.socials}>
                <Link href={''}><ImFacebook size={25} color='#FFFFFF' className={styles.socialIcon} /></Link>
                <Link href={''}> <BsTwitterX size={25} color='#FFFFFF' className={styles.socialIcon} /></Link>
                <Link href={''}><ImLinkedin2 size={25} color='#FFFFFF' className={styles.socialIcon} /></Link>
                <Link href={''}><GrInstagram size={25} color='#FFFFFF' className={styles.socialIcon} /></Link>
            </div>
            <div className={styles.linkContainer}>
                <div>
                    <span>Transfer Money</span>
                    <Link className={styles.link} href={''}>Send Money Online</Link>
                    <Link className={styles.link} href={''}>Send Money to India</Link>
                    <Link className={styles.link} href={''}>Send Money to Pakistan</Link>
                    <Link className={styles.link} href={''}>Send Money to Mexico</Link>
                    <Link className={styles.link} href={''}>Send Money to Japan</Link>
                    <Link className={styles.link} href={''}>Send Money to the UK</Link>
                    <Link className={styles.link} href={''}>Send Money to Canada</Link>
                    <Link className={styles.link} href={''}>Send Money to Australia</Link>
                </div>
                <div>
                    <span>XE Business</span>
                    <Link className={styles.link} href=''>Business Payments</Link>
                    <Link className={styles.link} href=''>International Business Payments</Link>
                    <Link className={styles.link} href=''>Global Business Payments</Link>
                    <Link className={styles.link} href=''>Risk Management</Link>
                    <Link className={styles.link} href=''>Enterprise Resource Planning</Link>
                    <Link className={styles.link} href=''>Currency Data API Integration</Link>
                    <Link className={styles.link} href=''>Affiliate Referral Partner Program</Link>
                    <Link className={styles.link} href=''>Mass Payments</Link>
                </div>
                <div>
                    <span>Apps</span>
                    <Link className={styles.link} href={''}>Money Transfer & Currency Apps</Link>
                    <Link className={styles.link} href={''}>Android Money Transfer App</Link>
                    <Link className={styles.link} href={''}>iOS Money Transfer App</Link>
                </div>
                <div>
                    <span>Tools & Resources</span>
                    <Link className={styles.link} href={''}>Blog</Link>
                    <Link className={styles.link} href={''}>Currency Converter</Link>
                    <Link className={styles.link} href={''}>Currency Charts</Link>
                    <Link className={styles.link} href={''}>Historical Currency Rates</Link>
                    <Link className={styles.link} href={''}>Currency Encyclopedia</Link>
                    <Link className={styles.link} href={''}>Currency Rate Alerts</Link>
                    <Link className={styles.link} href={''}>Currency Newsletters</Link>
                    <Link className={styles.link} href={''}>IBAN Calculator</Link>
                </div>
            </div>
            <span className={styles.copyright}>© 1995-2024 XE.com Inc.</span>
        </footer>
    )
}
