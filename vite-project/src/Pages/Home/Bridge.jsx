import waveSVG from "../../assets/wave.svg";
import waveBottom from "../../assets/waveBottom.svg";
import sociosSVG from "../../assets/socios.svg";
import consumerSVG from "../../assets/consumer.svg";
import starSVG from "../../assets/star.svg";

function Bridge() {
  let cards = [
    { titulo: "SOCIOS BODEGUEROS", cantidad: 326, image: sociosSVG },
    { titulo: "CLIENTES SATISFECHOS", cantidad: "1,123", image: consumerSVG },
    { titulo: "AÑOS DE EXPERIENCIA", cantidad: "+ 12", image: starSVG },
  ];

  function card(cardsArray) {
    return cardsArray.map((x, index) => (
      <>
        <div
          key={index}
          className="flex flex-col justify-center items-center gap-3"
        >
          <img src={x.image} alt="" className="w-20" />
          <p className="text-white font-dosis font-semibold text-5xl">
            {x.cantidad}
          </p>
          <p className="text-white font-montserrat text-lg">{x.titulo}</p>
        </div>
        <span className="h-2/6 border border-white"></span>
      </>
    ));
  }

  return (
    <section id="bridge" className="relative w-full -mt-7">
      <img
        src={waveSVG}
        alt=""
        className="w-full h-14"
        style={{
          fill: "linear-gradient(to right, #215FAA, rgba(33, 95, 170, 0.85)) !important",
        }}
      />
      <article
        id="bridge"
        className="h-72 flex gap-36 justify-center items-center"
        style={{
          backgroundImage:
            "linear-gradient(to right, #215FAA, rgba(33, 95, 170, 0.85))",
        }}
      >
        {card(cards)}
      </article>
      <img src={waveBottom} alt="" className="w-full h-14 rotate-180" />
    </section>
  );
}

export default Bridge;
