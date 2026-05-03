import React from "react";
import NostraIcon from "../../public/assets/images/NostraCity-Logo.png";
import Link from "@material-ui/core/Link";
import Image from 'next/image'
import styles from  "./Logo.module.css"

export default function Logo() {
    return (
        <div className={styles.logoRoot}>
            <Link href="/" target="_blank">
                <Image  alt="Stardust City Logo" src="/assets/images/logo.png" width="200" height="150" />
            </Link>
        </div>
    );
}
