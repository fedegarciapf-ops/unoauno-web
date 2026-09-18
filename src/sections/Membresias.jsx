import "./Membresias.css";

function Membresias({ onAbrirConsulta }) {
  const planes = [
    {
      nombre: "BRONCE",
      subtitulo: "Planificación y seguimiento",
      descripcion: "",
      beneficios: [
        "Plan de entrenamiento según tu objetivo",
        "Acceso a la app desarrollada por el equipo UNO A UNO",
        "Biblioteca de videos para consultar la ejecución de cada ejercicio",
        "Registro de cargas y progreso dentro de la app",
        "Análisis de los videos que envíes y devolución personalizada",
        "Feedback detallado de cada sesión",
        "Respuesta garantizada dentro de las 24 hs",
      ],
      mensual: "$50.000",
      trimestral: "$127.500",
    },
    {
      nombre: "PLATA",
      subtitulo: "Acompañamiento cercano",
      descripcion: "Pensado para quienes necesitan un seguimiento más frecuente. Además de una planificación personalizada, vas a tener encuentros periódicos para revisar tu evolución, corregir detalles técnicos y trabajar sobre aquello que necesites mejorar.",
      beneficios: [
        "Todo lo incluido en Bronce",
        "Videollamada de 30 minutos cada 2 semanas",
        "Mayor acompañamiento durante el proceso",
      ],
      mensual: "$75.000",
      trimestral: "$190.000",
      destacado: true,
    },
    {
      nombre: "ORO",
      subtitulo: "Seguimiento integral",
      descripcion: "Para quienes buscan un acompañamiento continuo y personalizado. Pensado para quienes quieren analizar en profundidad su entrenamiento, trabajar sobre la técnica y medir su progreso de manera periódica.",
      beneficios: [
        "Todo lo incluido en Plata",
        "Videollamada semanal de 45 minutos",
        "Corrección técnica en vivo de ejercicios",
        "Evaluación física cada 8 semanas",
        "Seguimiento del progreso con datos concretos",
        "Prioridad de respuesta",
      ],
      mensual: "$120.000",
      trimestral: "$306.000",
    },
  ];

  return (
    <section className="membresias" id="membresias">
      <div className="mb-container">

        <h2 className="mb-title">MEMBRESÍAS</h2>

        <div className="mb-plans">
          {planes.map((p, i) => (
            <div key={i} className={`mb-card ${p.destacado ? "mb-card-featured" : ""}`}>
              {p.destacado && <span className="mb-badge">MÁS ELEGIDO</span>}

              <p className="mb-plan-name">{p.nombre}</p>
              <p className="mb-plan-subtitle">{p.subtitulo}</p>

              {p.descripcion && <p className="mb-plan-desc">{p.descripcion}</p>}

              <ul className="mb-list">
                {p.beneficios.map((b, j) => <li key={j}>✓ {b}</li>)}
              </ul>

              <div className="mb-price">
                <div className="mb-price-row"><span>Mensual</span><strong>{p.mensual}</strong></div>
                <div className="mb-price-row"><span>Trimestral</span><strong>{p.trimestral}</strong></div>
              </div>

              <button className={`mb-btn ${p.destacado ? "mb-btn-featured" : ""}`} onClick={onAbrirConsulta}>
                CONSULTAR
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Membresias;