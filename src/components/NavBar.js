import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.jpg'
import styles from '../styles/NavBar.module.scss'

const NavBar = () => {
    return (
        <nav className={styles.container}>

            <div className={styles.person}>
                <Image                    
                    alt='Logo de empresa'
                    src={logo}
                    // width={100}
                    // height={100}
                />
            </div>

            <ul className={styles.burger}>
                <Link href='/'>
                    <p>Inicio</p>
                </Link>
                <Link href='/procedimientos'>
                    <p>Procedimientos</p>
                </Link>
                <Link href='/perfil'>
                    <p>Perfil</p>
                </Link>
            </ul>
        </nav>
    )
}

export default NavBar