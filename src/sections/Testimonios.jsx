import "./Testimonios.css";

function Testimonios() {
  const testimonios = [
    {
      texto:
        "UNO A UNO cambió mi forma de entrenar y mi relación con mi progreso. Siempre hay alguien del otro lado acompañándome.",
      autor: "Mateo, 28 años",
    },
    {
      texto:
        "El seguimiento constante hace toda la diferencia. Nunca sentí que estaba entrenando solo, a pesar de hacerlo desde casa.",
      autor: "Lucía, 34 años",
    },
    {
      texto:
        "La app es súper fácil de usar y los ajustes en el plan siempre llegan justo cuando los necesito. Muy recomendable.",
      autor: "Nicolás, 41 años",
    },
  ];

  return (
    <section className="testimonios" id="testimonios">
      <div className="ts-container">

        <h2 className="ts-title">NUESTROS ALUMNOS</h2>

        <div className="ts-card">
          <span className="ts-quote">“</span>
          <p className="ts-text">{testimonios[0].texto}</p>
          <p className="ts-autor">– {testimonios[0].autor}</p>
        </div>

        <div className="ts-dots">
          {testimonios.map((_, i) => (
            <span key={i} className={`ts-dot ${i === 0 ? "active" : ""}`}></span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonios;
