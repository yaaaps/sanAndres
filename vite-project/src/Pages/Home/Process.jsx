import rectangulo from "../../assets/rectangle.png";
import glassOfWater from "../../assets/glassOfWater.png";

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

  function processItem(cardsArray, direction) {
    return cardsArray.map((x, index) => (
      <>
        <div
          key={index}
          className="flex flex-col justify-center items-center gap-1 w-80 relative"
        >
            <img src={glassOfWater} className={`absolute top-1/2 -translate-y-1/2 ${direction}`}/>
            <h2>{x.titulo}</h2>
          <p className="font-montserrat text-center">{x.descripcion}</p>
        </div>
      </>
    ));
  }

  return (
    <section>
      <article className="flex flex-col items-center gap-9 ">
        <h1 className="">Nuestro Proceso</h1>
        <span className="flex h-[50rem] gap-16">
          <div className="flex flex-col gap-32 pb-32 pt-12">
            {processItem(processCol1, 'right-[-5.5rem]')}
          </div>
          <div
            id="verticalSeparator"
            className="w-2 bg-[#D9D9D9] rounded-full overflow-hidden"
            style={{
              height: "calc(100% - 4rem)",
              backgroundImage: `url(${rectangulo})`,
              backgroundPosition: "center -32em",
              backgroundRepeat: "no-repeat",
              backgroundAttachment: "fixed",
            }}
          >
          </div>
          <div className="flex flex-col gap-32 pt-44">
            {processItem(processCol2, 'left-[-5.5rem]')}
          </div>
        </span>
      </article>
    </section>
  );
}

export default Process;
