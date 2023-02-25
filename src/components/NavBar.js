import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.jpg'
import styles from '../styles/NavBar.module.scss'

const NavBar = () => {

    function desplegar(params) {
        alert('Clickaste')


    }

    return (
        <nav className={styles.container}>

            <menu className={styles.enlaces}>

                <i className={styles['gg-menu-grid-o']} onClick={desplegar}></i>

                <div className={styles.person}>
                    <Image
                        alt='Logo de empresa'
                        src={logo}
                    />
                </div>


            </menu>

            <ul className={styles.desplegar}>
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

        </nav>
    )
}

export default NavBar