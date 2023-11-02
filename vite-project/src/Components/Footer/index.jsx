import Faq from "./Faq";

function Footer() {
  let vendedores = [
    {
      nombre: "Giomara",
      telefono: "977 728 248",
      correo: "sanandres@aquacif.com",
    },
    { nombre: "Antonio", telefono: "947 899 666", correo: "-" },
    { nombre: "Josue", telefono: "946 508 111", correo: "-" },
  ];

  let vendedor = vendedores.map((x) => (
    <li className="flex flex-col gap-1">
      <h4>{x.nombre}</h4>
      <span className="relative left-[20%]">
        <p className="font-normal">{x.telefono}</p>
        <p className="font-normal">{x.correo}</p>
      </span>
    </li>
  ));

  return (
    <>
      <footer className="max-w-full bg-sanAndresBg flex justify-center items-center py-8">
        <span className="flex justify-between items-center text-white w-10/12 max-w-7xl">
          <Faq />
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100063555131987&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
            width="340"
            height="275"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          <div className="flex flex-col gap-2">
            <h2>Contacto</h2>
            <ul className="flex flex-col gap-2">{vendedor.map((x) => x)}</ul>
          </div>
        </span>
      </footer>
    </>
  );
}

export default Footer;
