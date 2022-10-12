import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";
import Link from "next/link";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

function Footer() {
    return (
        <footer className={styles.footer_distributed}>
            <div className={styles.footer_right}>
                <div className={styles.icons}>
                    <Link href="https://www.facebook.com/telkomuniversity/"><BsFacebook className={styles.icon}/></Link></div>
                <div className={styles.icons}>
                    <Link href="https://twitter.com/TelUniversity?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><BsTwitter className={styles.icon}/></Link>
                </div>
                <div className={styles.icons}>
                    <Link href="https://www.instagram.com/telkomuniversity/"><BsInstagram className={styles.icon}/></Link></div>
            </div>
            <div className={styles.footer_left}>
                <Link href="">Home </Link>
                <Link href="">Profil </Link>
                <Link href="">Alumni </Link>
                <Link href="">Kontak </Link>
                <p>Tel-U &copy; 2022</p>
            </div>
        </footer>
    );
}

Footer.propTypes = {};

export default Footer;
