import NavBar from './NavBar'
import Footer from './Footer'
import styles from '../styles/Layout.module.scss'

const Layout = ({ children }) => (
    <>
        <NavBar/>
        <main className={styles.mein}>
            { children }
        </main>
        <Footer/>
    </>
)

export default Layout