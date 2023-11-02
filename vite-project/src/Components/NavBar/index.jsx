import logo from "../../assets/logo.jpg";
import FacebookIcon from "../../assets/facebook.svg";
import InstagramIcon from "../../assets/instagram.svg";
import TelephoneIcon from "../../assets/telephone.svg";

function NavBar() {
  let lastScrollPosition = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollPosition = window.scrollY;
    let nav = document.querySelector("#nav");
    

    if (currentScrollPosition > lastScrollPosition) {
      // El usuario está desplazándose hacia abajo
      nav.style.top = "-5.5rem";
    } else {
      // El usuario está desplazándose hacia arriba
      nav.style.top = "0rem";
    }

    lastScrollPosition = currentScrollPosition;
  });

  return (
    <>
      <div className="h-7 flex justify-end items-center relative px-9 borde">
        <h4 className="text-base w-fit absolute left-1/2 -translate-x-1/2 ">
          Siguenos en nuestras redes
        </h4>
        <a href="#" className="h-5">
          <img
            src={FacebookIcon}
            alt="Agua de Mesa San Andrés"
            className="h-5"
          />
        </a>
        <a href="#" className="h-5">
          <img
            src={InstagramIcon}
            alt="Agua de Mesa San Andrés"
            className="h-5"
          />
        </a>
        <a href="#" className="h-5">
          <img
            src={TelephoneIcon}
            alt="Agua de Mesa San Andrés"
            className="h-5"
          />
        </a>
        <a href="#" className="h-5">
          <p className="italic underline text-links text-sm">946 508 111</p>
        </a>
      </div>
      <nav
        id="nav"
        className=" font-tittle h-[5.5rem] flex justify-between items-center overflow-hidden bg-sanAndresBg px-7 text-white text-lg sticky top-0 z-[1]  duration-500"
      >
        <ul className="flex gap-8">
          <li>Nosotros</li>
          <li>¿Porque elegirnos?</li>
          <li>Proceso</li>
        </ul>
        <img
          src={logo}
          alt="Agua De Mesa San Andres"
          className="w-52 absolute left-1/2 -translate-x-1/2"
          style={{
            top: "-3.9rem",
          }}
        />
        <ul className="flex gap-8">
          <li>Productos y precio</li>
          <li>Promociones</li>
          <li>Preguntas frecuentes</li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
