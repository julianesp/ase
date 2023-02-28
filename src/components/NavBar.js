import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../assets/logo.jpg'
import styles from '../styles/NavBar.module.scss'

/* const menuHamburguesa = document.querySelector('.desplegar')
menuHamburguesa.addEventListener('click', despliegueMenu)

function despliegueMenu(params) {
    despliegueMenu.classList.toogle('inactive')
}*/

const NavBar = () => {

    return (
        <nav className={styles.container}>


            <menu className={styles.enlaces}>

                <Image
                    className={styles['enlaces__logo']}
                    alt='Logo de empresa'
                    src={logo}
                />
                <i className={styles['gg-menu-grid-o']}></i>

                <ul className={styles['enlaces__menu']}>

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



            </menu>


        </nav>
    )
}

export default NavBar