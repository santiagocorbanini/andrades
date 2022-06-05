import Link from 'next/link'
import styles from '../styles/Header.module.css'
import Image from 'next/image'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className="contenedor">
            <div className={styles.barra}>
                <Link href="/">
                    <Image width={400} height={100} src="/img/logo.svg" alt="Imagen Logo"/>
                </Link>
                <nav className={styles.navegacion}>
                    <Link href="/">Inicio</Link>
                    <Link href="/fechas">FECHAS</Link>
                    <Link href="/media">MEDIA</Link>
                    <Link href="/bio">BIO</Link>
                    <Link href="/contacto">CONTACTO</Link>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header