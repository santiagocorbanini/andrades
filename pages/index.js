import Layout from '../components/Layout'
import Image from 'next/image'

export default function Home() {
  return (
        <Layout>
            <div className="container-home">
              <div className="contenedor">
                <div className="image">
                  <Image id='profile' width={605.22} height={605.22} src="/img/Profile.jpg" alt="Andrades Profile"/>
                </div>
                <div className="descripcion">
                  <h1>progressive house</h1>
                  <div className='container-p'>
                  <p>Desde los 11 años que soy sonidista y a los 15 empecé de a poco a pasar algo de música. cerca de los 18 intenté comenzar a ser dj pero las circunstancias no me acompañaron y quedo como un sueño frustrado.Hoy después de mucho tiempo vuelvo a retomar ese camino del que me desvié y no pienso dejarlo nunca mas. me destaco por una mezcla de tech/house progressive con tintes de muchos otros estilos, los cuales suelen ser disco, clásicos y algo alternativo generando un "groove" envolvente en la atmósfera. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>
                  </div>
                </div>
              </div>
            </div>
        </Layout>
  )
}
