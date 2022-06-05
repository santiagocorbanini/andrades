import React from 'react'
import Layout from '../components/Layout'

import Image from 'next/image'
import styles from '../styles/Media.module.css'

const media = () => {
  return (
    <Layout pagina='Media'>
        <main className='contenedor'>
            <h2 className='heading'>Media</h2>

            <div className={styles.contenido}>


                <div>
                    <iframe width="80%" height="300" src="https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ffavioandrades%2Fjacks-6-3-20-warm-eanp%2F" frameborder="0" ></iframe>    
                    <iframe width="80%" height="300" src="https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ffavioandrades%2Fchk-9-18-live-set-at-junin%2F" frameborder="0" ></iframe>
                </div>

                <div>
                    <iframe width="80%" height="300" src="https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ffavioandrades%2Ftechnight-at-junin-july-8-2020%2F" frameborder="0" ></iframe>
                    <iframe width="80%" height="300" src="https://www.mixcloud.com/widget/iframe/?light=1&feed=%2Ffavioandrades%2Fopenyourmind-radio-12-08-2020%2F" frameborder="0" ></iframe>
                </div>

            </div>
        </main>    


    </Layout>
  )
}

export default media