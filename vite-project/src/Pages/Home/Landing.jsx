import Button from "../../Components/Button";
import fontPage from "../../assets/fontPage.png";
import truckSVG from "../../assets/truckSVG.svg";

function Landing() {
  return (
    <section
      className="relative flex justify-center overflow-hidden"
      style={{
        width: "100%",
        height: "calc(100vh - 124px)",
        backgroundColor: "black",
      }}
    >
      <img src={fontPage} alt="" className="w-full h-full object-cover" />
      <div className="absolute text-white left-[5%] top-[7.5%]">
        <span>
          <h1 className="text-8xl text-white">Agua de mesa</h1>
          <h1 className="text-9xl text-white">San Andres</h1>
        </span>
        <p className="text-4xl font-tittle pb-4">
          La mejor calidad al mejor precio para ti y los tuyos.
        </p>
        <Button text="Comprar" width="120px" />
      </div>
      <div className="absolute bottom-0 left-[25%] flex items-center gap-3">
        <img src={truckSVG} alt="Delivery"/>
        <p className="font-tittle text-4xl text-white">Delivery GRATIS</p>
      </div>
    </section>
  );
}

export default Landing;
