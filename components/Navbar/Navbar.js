import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { BsX } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import { signIn, signOut, useSession } from 'next-auth/react';

function Navbar() {

    const[isMenuSelected, setIsMenuSelected] = useState(false)
    const { data: session, status } = useSession();

    const menuSelectedHandle = () => {
        setIsMenuSelected(!isMenuSelected)
    }


    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <span className={styles.selected}>D</span>
                {"'"}Notation
            </div>
            {isMenuSelected && <BsList className={styles.icon}/>}
            <div className={styles.menus}>
                <BsX className={styles.icon}/>
                <ul className={styles.items}>
                    <Link href={"/"}>
                        <li className={styles.item}>Home</li>
                    </Link>
                    <Link href={"/"}>
                        <li className={styles.item}>Profil</li>
                    </Link>
                    <Link href={"/"}>
                        <li className={styles.item}>Alumni</li>
                    </Link>
                    <Link href={"/"}>
                        <li className={styles.item}>Kontak</li>
                    </Link>
                    {status === 'authenticated' ? (
                        <>
                            <li>
                                <a onClick={() => signOut()}>Sign Out</a>
                            </li>
                        </>
                        ) : (
                        <>
                          <li>
                            <a onClick={() => signIn()}>Sign In</a>
                          </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

Navbar.propTypes = {};

export default Navbar;
