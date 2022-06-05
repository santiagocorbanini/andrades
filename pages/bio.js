import React from 'react'
import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Bio.module.css'

const bio = () => {
  return (
    <Layout pagina='Bio'>
        <main className='contenedor'>

            <h2 className='heading'></h2>

            <div className={styles.contenido}>

                <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt='Imagen sobre nosotros' />

                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>

            </div>
        </main>
    </Layout>
  )
}

export default bio