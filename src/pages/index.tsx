import logo from "../assets/liamix-logo-transparentcorte.svg";
import mantenimientoImg from "../assets/programador.png";

const Home = () => {
  return (
    <div className="bg-white sm:bg-gray-100 min-h-screen flex items-center justify-center">

      <div className="bg-white p-5 rounded-lg sm:shadow-lg">

      <div className="flex justify-center mb-3">
        <img className="w-80" src={logo.src} alt="Cargando"/>
      </div>

      <div className="text-center mb-2">
        <h1 className="text-2xl sm:text-4xl text-blue-950 font-semibold mb-4">Pagina en Mantenimiento 👨‍💻</h1>
        <p className="text-gray-600 mb-6">Estamos trabajando en mejoras para darte la mejor experiencia. Disculpa las molestias.</p>
      </div>

      <div className="flex justify-center my-5">
        <img className="w-24 h-24" src={mantenimientoImg.src} alt="Mantenimiento"/>
      </div>


      <div className="text-center">
        <h2 className="text-2xl text-blue-950 font-semibold mb-2">Contactos</h2>
        <p className="text-gray-600 mb-6">WhatsApp: +1 829-445-2210</p>
      </div>
    
      </div>
  </div>
  )
}


export default Home
