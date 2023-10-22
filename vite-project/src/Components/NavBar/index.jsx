import logo from "../../assets/logo.jpg";
import { ReactComponent as FacebookIcon } from "../../assets/facebook.svg";

function NavBar() {
  return (
    <section className="">
      <div className="h-7 flex justify-center items-center">
        <h4 className="text-base">Siguenos en nuestras redes</h4>
        <FacebookIcon />
      </div>
      <div className="h-24 flex justify-between items-center overflow-hidden bg-sanAndresBg px-7 text-white text-lg sticky">
        <ul className="flex gap-8">
          <li>Nosotros</li>
          <li>¿Porque elegirnos?</li>
          <li>Proceso</li>
          <li>Nuestro Equipo</li>
        </ul>
        <img src={logo} alt="Agua De Mesa San Andres" className="w-52" />
        <ul className="flex gap-8">
          <li>Productos y precio</li>
          <li>Promociones</li>
          <li>Preguntas frecuentes</li>
        </ul>
      </div>
    </section>
  );
}

export default NavBar;
