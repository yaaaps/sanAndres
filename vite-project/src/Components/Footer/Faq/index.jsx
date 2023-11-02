import { useEffect } from "react";
import "./faq.css";

function Faq() {
  let preguntas = [
    { titulo: "¿Llegan hasta mi hogar?", respuesta: "respuesta" },
    { titulo: "¿Entregan factura?", respuesta: "respuesta" },
    { titulo: "¿Pregunta3?", respuesta: "respuesta" },
    { titulo: "¿Pregunta4?", respuesta: "respuesta" },
  ];

  let pregunta = preguntas.map((x) => (
    <li className="question">
      <h4 className="question-h4 relative">{x.titulo}</h4>
      <p>{x.respuesta}</p>
    </li>
  ));
  useEffect(() => {
    let questionButton = document.querySelectorAll(".question");

    questionButton.forEach((x) => {
      x.addEventListener("click", () => {
        x.style.height = "200px";
        x.style.overflow = "none ";
      });
    });
    }, []);
  


  return (
    <div className="flex flex-col gap-2">
      <h2>Preguntas frecuentes</h2>
      <ul className="flex flex-col gap-1">{pregunta.map((x) => x)}</ul>
    </div>
  );
}

export default Faq;
