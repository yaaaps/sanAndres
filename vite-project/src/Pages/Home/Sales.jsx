import Button from '../../Components/Button';
import uno from "../../assets/1.svg";
import dos from "../../assets/2.svg";
import tres from "../../assets/3.svg";
import cuatro from "../../assets/4.svg";
import sirviendo from "../../assets/sirviendo.jpeg";
import map from "../../assets/map.jpg";
import enviando from "../../assets/enviando.jpeg";
import delivery from "../../assets/delivery.jpg";

function Sales() {
  let steps = [
    {
      step: uno,
      tittle: "Elige el/los producto(s) que deseas comprar",
      description: "Elije el/los producto(s) y conoce su precio.",
      background: sirviendo,
      button: <Button text='Empezar' width='105px'/>
    },
    {
      step: dos,
      tittle: "Ingresa la dirección de envío",
      description:
        "Rellena el formulario con tus datos para verificar la cobertura y coordinar el día de entrega",
      background: map,
    },
    {
      step: tres,
      tittle: "Envíanos la información",
      description:
        "Al finalizar el 2do paso, haz click en el botón “enviar” del formulario para mandarnos tu información y coordinar la entrega de tu pedido.",
      background: enviando,
    },
    {
      step: cuatro,
      tittle: "Recibe tu pedido",
      description:
        "Espera en tu hogar hasta que nuestro equipo de entrega se encuentre cerca para entregarte tu pedido. Recuerda que el delivery es GRATIS.",
      background: delivery,
    },
  ];
  let stepArr = steps.map((x, index) => {
    return (
      <div
        key={x.step}
        className="basis-1/4"
        style={{
          backgroundImage: `url(${x.background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <span className="flex flex-col justify-center items-center text-center w-full h-full px-10 gap-2 text-white bg-black/50 hover:bg-black/30 ">
          <img src={x.step} className="w-16" />
          <h3 className="text-2xl">{x.tittle}</h3>
          <p>{x.description}</p>
          {x.button}
        </span>
      </div>
    );
  });

  return (
    <section
      className="flex flex-col items-center content-center max-w-full gap-16 border"
      style={{
        height: "calc(95vh)",
      }}
    >
      <h1 className="">Realiza Tu Pedido</h1>
      <article id="buySteps" className="flex h-full ">
        {stepArr.map((x) => x)}
      </article>
    </section>
  );
}
export default Sales;
