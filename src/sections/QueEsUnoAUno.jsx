import "./QueEsUnoAUno.css";

import {
  FaHandshake,
  FaMobileAlt,
  FaGlobeAmericas,
  FaTrophy,
} from "react-icons/fa";
function QueEsUnoAUno() {
  const items = [
  {
    icono: <FaHandshake />,
    titulo: "ENTRENAMIENTO PERSONALIZADO",
    texto: "Planes adaptados a tus objetivos y necesidades.",
  },
  {
    icono: <FaMobileAlt />,
    titulo: "ACOMPAÑAMIENTO REAL",
    texto: "Seguimiento, ajustes y comunicación constante.",
  },
  {
    icono: <FaGlobeAmericas />,
    titulo: "DESDE CUALQUIER LUGAR",
    texto: "Entrená desde donde estés con nuestra aplicación.",
  },
  {
    icono: <FaTrophy />,
    titulo: "RESULTADOS SOSTENIBLES",
    texto: "Un proceso pensado para durar en el tiempo.",
  },
];

  return (
    <section className="que-es" id="que-es-uno-a-uno">
      <div className="qe-container">

        <h2 className="qe-title">¿QUÉ ES UNO A UNO?</h2>

        <p className="qe-text">
          UNO A UNO es una empresa de entrenamiento personalizado que
          acompaña a las personas en cada etapa de su proceso, utilizando
          planificación individual, seguimiento profesional y tecnología
          propia para brindar un servicio cercano, sin importar la
          distancia.
        </p>

        <p className="qe-text">
          Creemos que cada persona tiene una historia, un objetivo y un
          punto de partida diferente. Por eso diseñamos planes de
          entrenamiento adaptados a sus necesidades y los ajustamos según
          su evolución.
        </p>

        <p className="qe-tagline">
          Tu proceso. Nuestra guía. Mejores resultados.
        </p>

        <div className="qe-grid">
          {items.map((item, index) => (
            <div className="qe-item" key={index}>
              <div className="qe-icon">{item.icono}</div>
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default QueEsUnoAUno;
