import "./AsiTrabajamos.css";

import {
  FaComments,
  FaCalendarAlt,
  FaClipboardList,
  FaMobileAlt,
  FaChartLine,
} from "react-icons/fa";

function AsiTrabajamos() {
  const pasos = [
  {
    numero: 1,
    icono: <FaComments />,
    titulo: "Nos contactás",
    texto: "Por WhatsApp, Instagram o desde la web.",
  },
  {
    numero: 2,
    icono: <FaCalendarAlt />,
    titulo: "Entrevista inicial",
    texto: "Conocemos tu historia, tus objetivos y tu situación actual.",
  },
  {
    numero: 3,
    icono: <FaClipboardList />,
    titulo: "Planificación personalizada",
    texto: "Diseñamos un plan adaptado a tus necesidades y a tu realidad.",
  },
  {
    numero: 4,
    icono: <FaMobileAlt />,
    titulo: "Entrenás con nuestra app",
    texto: "Accedés a tu plan, registrás y seguís tu proceso.",
  },
  {
    numero: 5,
    icono: <FaChartLine />,
    titulo: "Te acompañamos siempre",
    texto: "Seguimiento, ajustes y motivación constante.",
  },
];

  return (
    <section className="asi-trabajamos" id="asi-trabajamos">
      <div className="at-container">

        <h2 className="at-title">ASÍ TRABAJAMOS</h2>
        <p className="at-subtitle">
          Un proceso claro, profesional y 100% personalizado.
        </p>

        <div className="at-pasos">
          {pasos.map((paso) => (
            <div className="at-paso" key={paso.numero}>
              <div className="at-numero">{paso.numero}</div>
              <div className="at-icono">
                {paso.icono}
              </div>
              <h3>{paso.titulo}</h3>
              <p>{paso.texto}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default AsiTrabajamos;