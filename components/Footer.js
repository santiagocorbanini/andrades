import Link from "next/link"
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={`contenedor ${styles.contenido}`}>
            <nav className={styles.navegacion}>
                <Link href="/">Inicio</Link>
                <Link href="/fechas">FECHAS</Link>
                <Link href="/media">MEDIA</Link>
                <Link href="/bio">BIO</Link>
                <Link href="/contacto">CONTACTO</Link>
            </nav>

            <p className={styles.copyright}>Todos los derechos reservados</p>
        </div>
    </footer>
  )
}

export default Footer