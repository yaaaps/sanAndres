import rectangulo from "../../assets/rectangle.png";
import glassOfWater from "../../assets/glassOfWater.png";
import './assets/process.css';

function Process() {
  let processCol1 = [
    {
      titulo: "Filtro Multimedia",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod tellus sit amet pulvinar iaculis. Vestibulum non odio odio. Duis a lacinia nibh. ",
    },
    {
      titulo: "Filtro Carbon Activado",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod tellus sit amet pulvinar iaculis. Vestibulum non odio odio. Duis a lacinia nibh. ",
    },
    {
      titulo: "Osmosis Inversa",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod tellus sit amet pulvinar iaculis. Vestibulum non odio odio. Duis a lacinia nibh. ",
    },
  ];
  let processCol2 = [
    {
      titulo: "Filtro Ablandador",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod tellus sit amet pulvinar iaculis. Vestibulum non odio odio. Duis a lacinia nibh. ",
    },
    {
      titulo: "Ultravioleta",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod tellus sit amet pulvinar iaculis. Vestibulum non odio odio. Duis a lacinia nibh. ",
    },
    {
      titulo: "Ozonizacion",
      descripcion:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod tellus sit amet pulvinar iaculis. Vestibulum non odio odio. Duis a lacinia nibh. ",
    },
  ];

  function processItem(cardsArray, directionRem, direction) {
    return cardsArray.map((x, index) => (
      <div
        key={index}
        className="flex flex-col justify-center items-center gap-1 w-80 relative text-center"
      >
        <span id="process" className={`p-4 ${direction}`}>
          <h2>{x.titulo}</h2>
          <p className="font-montserrat text-center">{x.descripcion}</p>
        </span>
        <img
          src={glassOfWater}
          id="processImage"
          className={`absolute top-[1.12rem] ${directionRem}`}
        />
      </div>
    ));
  }

  window.addEventListener("scroll", () => {
    let processContainer = document.querySelectorAll("#process");
    let processImage = document.querySelectorAll("#processImage");

    processContainer.forEach((x) => {
      let y = x.getBoundingClientRect();
      if (y.top < window.innerHeight * 0.5) {
        x.classList.add("processActivado");
        x.classList.contains("left") ? x.classList.add("processActivadoIzquierda") : x.classList.add("processActivadoDerecha")
      } else {
        x.classList.remove("processActivado");

      }
    });
    processImage.forEach((x) => {
      let y = x.getBoundingClientRect();
      if (y.top > window.innerHeight * 0.52) {
        x.classList.add("processImageActivado");
      } else {
        x.classList.remove("processImageActivado");
      }
    });

  });

  return (
    <section className="">
      <article className="flex flex-col items-center gap-9">
        <h1 className="">Nuestro Proceso</h1>
        <span className="flex h-[70rem] gap-16">
          <div className="flex flex-col gap-[12rem] pb-32 pt-16">
            {processItem(processCol1, "right-[-5.5rem]")}
          </div>
          <div
            id="verticalSeparator"
            className="w-2 bg-[#D9D9D9] rounded-full overflow-hidden"
            style={{
              height: "calc(100% - 8rem)",
              backgroundImage: `url(${rectangulo})`,
              backgroundPosition: "center -25rem",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          ></div>
          <div className="flex flex-col gap-[12rem] pt-60">
            {processItem(processCol2, "left-[-5.5rem]", 'left')}
          </div>
        </span>
      </article>
    </section>
  );
}

export default Process;
