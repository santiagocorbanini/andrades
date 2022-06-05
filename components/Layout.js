import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children, pagina}) => {
  return (
    <div>
       <Head>
            <title>GuitarLA - {pagina}</title>
            <meta name="description" content="Andrades" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />
        
        {children}

        <Footer />
    </div>
  )
}

export default Layout