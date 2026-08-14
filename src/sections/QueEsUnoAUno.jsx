import "./QueEsUnoAUno.css";
import { FaHandshake, FaMobileAlt, FaGlobeAmericas, FaTrophy } from "react-icons/fa";

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
          Somos un servicio de entrenamiento personalizado 100% virtual,
          creado para acompañar a personas que quieren comenzar o
          retomar la actividad física, mejorar su calidad de vida y
          sentirse mejor, así como también a deportistas que buscan
          mejorar su rendimiento o volver progresivamente a la actividad
          después de una lesión.
        </p>

        <p className="qe-text">
          Creemos que entrenar no debería significar recibir una rutina
          y simplemente cumplirla. Por eso, en UNO A UNO construimos un
          vínculo cercano entre alumno y entrenador: conocemos tu punto
          de partida, tus objetivos y tus necesidades, planificamos tu
          entrenamiento y acompañamos tu evolución.
        </p>

        <p className="qe-text">
          Evaluamos, controlamos las cargas, analizamos tu progreso y
          realizamos los ajustes necesarios a medida que avanzás.
        </p>

        <p className="qe-text">
          Porque tu entrenamiento no debería ser una planificación
          estática. Es un proceso que evoluciona con vos.
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