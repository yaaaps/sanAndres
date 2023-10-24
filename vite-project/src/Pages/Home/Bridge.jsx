import waveSVG from "../../assets/wave.svg";

function Bridge() {
  let tittle = [
    { titulo: "SOCIOS BODEGUEROS", cantidad: 326 },
    { titulo: "CLIENTES SATISFECHOS", cantidad: "1,123" },
    { titulo: "AÑOS DE EXPERIENCIA", cantidad: "+ 12" },
  ];

   function cards(cardsArray) {
    return cardsArray.map((x, index) => (
      <div key={index} className="">
        <h4 className="text-white font-sans text-2xl flex flex-col justify-center items-center">
          <span className="font-dosis font-semibold text-5xl">{x.cantidad}</span> <br />
          {x.titulo}
        </h4>
      </div>
    ));
  }

  return (
    <section id="bridge" className="relative w-full -mt-7">
      <img src={waveSVG} alt="" className="w-full h-14" />
      <article className="bg-sanAndresBg h-72 flex gap-40 justify-center items-center">
        {cards(tittle)}
      </article>
      <img src={waveSVG} alt="" className="w-full h-14 rotate-180" />
    </section>
  );
}

export default Bridge;
