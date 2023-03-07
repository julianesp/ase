import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.jpg'
import styles from '../styles/NavBar.module.scss'

const NavBar = () => {
    
    return (
        <nav className={styles.container}>

            <div className={styles['container__principal']}>

                <Image
                    className={styles['enlaces__logo']}
                    alt='Logo de empresa'
                    src={logo}
                />

                <i className={styles['gg-menu-grid-o']}></i>

            </div>

            <ul id='menu' className={styles['enlaces__menu']}>

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