import { useState, useEffect } from "react";
import "./Testimonios.css";

function Testimonios() {
  const testimonios = [
    {
      texto:
        "Antes me sentía desmotivado, haciendo siempre lo mismo y sin rumbo. Lo que más valoro es la dedicación, la precisión en los ejercicios y saber que voy con un profesional instruido en la disciplina. Hoy me siento mejor conmigo mismo, mi cuerpo mejoró y disfruto cada actividad que hago.",
      autor: "Fabrizio",
    },
    {
      texto:
        "Soy deportista desde los 5 años y compito en distintas disciplinas. Lo que más valoro de Uno a Uno es la personalización del entrenamiento y lo actualizado que está. Gracias a su profesionalismo pude recuperarme de varias lesiones y seguir con una vida activa. Lo recomiendo totalmente.",
      autor: "Francisco, 37 años",
    },
    {
      texto:
        "Hacía 10 años que no pisaba un gimnasio y me costaba arrancar. Con UNO A UNO encontré el impulso que necesitaba: seguimiento personalizado, paciencia para adaptarse a mis tiempos y mucho profesionalismo. Hoy tengo muchísima más energía y constancia. ¡Un 1.000! 💪",
      autor: "Facundo",
    },
    {
      texto:
        "Venimos trabajando juntos hace muchos años. Valoro muchísimo el acompañamiento, las correcciones y las planificaciones que me hace Fede. Los resultados los noté a nivel físico, mental y emocional — me hicieron sentir mejor como persona. Siempre recomiendo su trabajo.",
      autor: "Rodrigo",
    },
  ];

  const [actual, setActual] = useState(0);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    if (pausado) return;

    const intervalo = setInterval(() => {
      setActual((prev) => (prev + 1) % testimonios.length);
    }, 6000);

    return () => clearInterval(intervalo);
  }, [pausado, testimonios.length]);

  return (
    <section className="testimonios" id="testimonios">
      <div className="ts-container">

        <h2 className="ts-title">NUESTROS ALUMNOS</h2>

        <div
          className="ts-card"
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
        >
          <span className="ts-quote">“</span>
          <p className="ts-text">{testimonios[actual].texto}</p>
          <p className="ts-autor">– {testimonios[actual].autor}</p>
        </div>

        <div className="ts-dots">
          {testimonios.map((_, i) => (
            <span
              key={i}
              className={`ts-dot ${i === actual ? "active" : ""}`}
              onClick={() => setActual(i)}
            ></span>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonios;