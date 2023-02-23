import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.jpg'
import styles from '../styles/NavBar.module.scss'

const NavBar = () => {
    return (
        <nav className={styles.container}>

            <i className="gg-menu-grid-o"></i>

            <div className={styles.person}>
                <Image
                    alt='Logo de empresa'
                    src={logo}
                />
            </div>

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