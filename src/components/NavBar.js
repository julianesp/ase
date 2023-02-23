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
                />
            </div>
            
            <i className={styles['gg-menu-grid-o']}></i>


            <menu className={styles.enlaces}>
                <ul>
                    <div>
                        <Link href='/'>
                            <p>Inicio</p>
                        </Link>
                    </div>
                    <div>
                        <Link href='/procedimientos'>
                            <p>Procedimientos</p>
                        </Link>
                    </div>
                    <div>
                        <Link href='/perfil'>
                            <p>Perfil</p>
                        </Link>
                    </div>
                </ul>

            </menu>

            
        </nav>
    )
}

export default NavBar