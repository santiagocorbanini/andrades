import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Contacto.module.css'

const contacto = () => {
  return (
    <Layout pagina='Contacto'>
        <main className='contenedor'>
            <h2 className='heading'>Contacto</h2>

            <div className={styles.contenido}>

                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>

            </div>
        </main>        
    </Layout>
  )
}

export default contacto