import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";
import Link from "next/link";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

function Footer() {
    return (
        <footer className={styles.footer_distributed}>
            <div className={styles.footer_right}>
                <div className={styles.icons}><BsFacebook className={styles.icon}/></div>
                <div className={styles.icons}><BsTwitter className={styles.icon}/></div>
                <div className={styles.icons}><BsInstagram className={styles.icon}/></div>
            </div>
            <div className={styles.footer_left}>
                <Link href="">Home </Link>
                <Link href="">Gallery </Link>
                <Link href="">Menus </Link>
                <Link href="">Contacs </Link>
                <p>D{"'"}Notation &copy; 2015</p>
            </div>
        </footer>
    );
}

Footer.propTypes = {};

export default Footer;
