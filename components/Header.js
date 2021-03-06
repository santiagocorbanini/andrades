import Link from 'next/link'
import styles from '../styles/Header.module.css'
import Image from 'next/image'

const Header = () => {
  return (
    <header className={styles.header}>
        <div className="contenedor">
            <div className={styles.barra}>
                <Link href="/">
                    <Image width={217.48} height={29.7} src="/img/LogoAndrades.png" alt="Andrades Logo"/>
                </Link>
                <nav className={styles.navegacion}>
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