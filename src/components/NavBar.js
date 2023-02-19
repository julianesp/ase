import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import doc from '../assets/doc.jpg'
import styles from '../styles/NavBar.module.scss'

const NavBar = () => {
    return (
        <nav className={styles.container}>

            <div className={styles.person}>
                <Image                    
                    alt='Logo de empresa'
                    src={doc}
                    width={100}
                    height={100}
                />
            </div>

            <ul className={styles.burger}>
                <Link href='/'>Inicio</Link>
                <Link href='/procedimientos'>Procedimientos</Link>
                <Link href='/perfil'>Perfil</Link>
            </ul>
        </nav>
    )
}

export default NavBar