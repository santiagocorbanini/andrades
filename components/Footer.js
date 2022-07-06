import Link from "next/link"
import styles from "../styles/Footer.module.css"

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} text-center text-lg-start`}>
    <div className="container d-flex justify-content-center py-5">
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2">
      El
      </button>
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2">
      Nene
      </button>
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2">
      Esta
      </button>
      <button type="button" class="btn btn-primary btn-lg btn-floating mx-2">
      Bien
      </button>
    </div>


    <div className="text-center text-white p-3 bg-dark">
      © {year} Copyright:  
      <a className="text-white" href="https://pampacode.com/">  pampacode.com</a>
    </div>

  </footer>
  )
}

export default Footer