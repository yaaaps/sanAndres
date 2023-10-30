function Footer() {
  let preguntas = [
    { titulo: "¿Llegan hasta mi hogar?", respuesta: "respuesta" },
    { titulo: "¿Entregan factura?", respuesta: "respuesta" },
    { titulo: "¿Pregunta3?", respuesta: "respuesta" },
    { titulo: "¿Pregunta4?", respuesta: "respuesta" },
  ];

  let pregunta = preguntas.map((x) => (
    <li>
      <h4>{x.titulo}</h4>
    </li>
  ));

  let vendedores = [
    {
      nombre: "Giomara",
      telefono: "977 728 248",
      correo: "sanandres@aquacif.com",
    },
    { nombre: "Josué", telefono: "946 508 111", correo: "" },
    { nombre: "Antonio", telefono: "947 899 666", correo: "" },
  ];

  let vendedor = vendedores.map((x) => (
    <li>
      <h4>{x.nombre}</h4>
      <p>{x.telefono}</p>
      <p>{x.correo}</p>
    </li>
  ));

  return (
    <>
      <footer className="max-w-full bg-sanAndresBg flex justify-center items-center">
        <span className="flex justify-between border border-black text-white w-7xl">
          <div className="">
            <h2>Preguntas frecuentes</h2>
            <ul>{pregunta.map((x) => x)}</ul>
          </div>
          <div className="">Ubicacion</div>
          <div className="">
            <h2>Contacto</h2>
            <ul>{vendedor.map((x) => x)}</ul>
          </div>
        </span>
      </footer>
    </>
  );
}

export default Footer;
