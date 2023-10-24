import waveSVG from "../../assets/wave.svg";

function Bridge() {
  return (
    <section id="bridge" className="relative w-full -mt-7">
      <img src={waveSVG} alt="" className="w-full h-14" />
      <article className="bg-sanAndresBg h-72">
        <div>
          <h4>
            <span>326</span> <br /> SOCIOS BODEGUEROS
          </h4>
        </div>
        <div>
          <h4>CLIENTES SATISFECHOS</h4>
        </div>
        <div>
          <h4>AÑOS DE EXPERIENCIA</h4>
        </div>
      </article>
      <img src={waveSVG} alt="" className="w-full h-14 rotate-180" />
    </section>
  );
}

export default Bridge;
