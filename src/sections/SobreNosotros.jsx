import "./SobreNosotros.css";
import { useState } from "react";
import fotoEquipo from "../assets/images/foto-equipo.png";

function SobreNosotros() {
  const [verFormaciones, setVerFormaciones] = useState(false);

  const formaciones = [
    "Profesor de Educación Física — IPEF - UPC (2015-2019)",
    "Diplomatura en Entrenamiento de Fuerza — UCC 2022",
    "12ª Jornada de Actualización en Ciencias del Ejercicio y el Deporte — UCC 2022",
    "11ª Jornada de Actualización en Ciencias del Ejercicio y el Deporte — UCC 2021",
    "Curso Kettlebell — Jerónimo Milo 2021",
    "Diplomatura Universitaria en Evaluación y Prescripción del Entrenamiento Físico — UCC 2021",
    "2º Congreso Argentino de Actividades Funcionales — Tecnofits 2019",
    "Entrenamiento Funcional Mario Di Santo — Tecnofits 2019",
    "2º Congreso Internacional de Deporte Paralímpico y Adaptado — 2018",
    "Formación Profesional en Entrenamiento Físico — UNC, Facultad de Ciencias Médicas, Cátedra de Fisiología Humana — 2017",
  ];

  const valores = [
    "La persona está por encima del entrenamiento.",
    "Cada planificación es única.",
    "Trabajamos con evidencia científica y actualización constante.",
    "La confianza se construye con profesionalismo y cercanía.",
    "El progreso requiere tiempo, constancia y seguimiento.",
    "Preferimos la excelencia en el servicio antes que la cantidad de alumnos.",
  ];

  return (
    <section className="sobre-nosotros" id="sobre-nosotros">
      <div className="sn-container">

        <p className="sn-tag">LA EMPRESA</p>
        <h2 className="sn-title">¿Quiénes somos?</h2>

        <p className="sn-text">
          UNO A UNO es una empresa de entrenamiento personalizado que
          acompaña a las personas en cada etapa de su proceso, utilizando
          planificación individual, seguimiento profesional y tecnología
          propia para brindar un servicio cercano, sin importar la
          distancia.
        </p>

        <p className="sn-text">
          Creemos que cada persona tiene una historia, un objetivo y un
          punto de partida diferente. Por eso diseñamos planes de
          entrenamiento adaptados a sus necesidades y los ajustamos según
          su evolución.
        </p>

        <p className="sn-text">
          Nuestro compromiso no termina cuando entregamos una
          planificación; comienza ahí. Acompañamos, evaluamos, corregimos
          y guiamos para que cada alumno avance de manera segura y
          sostenible.
        </p>

        <h3 className="sn-valores-title">Nuestros valores</h3>

        <ul className="sn-valores-list">
          {valores.map((valor, index) => (
            <li key={index}>
              <span className="sn-check">✓</span>
              {valor}
            </li>
          ))}
        </ul>

        {/* Equipo */}
        <h3 className="sn-valores-title" style={{ marginTop: 70 }}>Equipo</h3>

        <div className="sn-equipo">
          <img src={fotoEquipo} alt="Federico García" className="sn-equipo-foto" />
          <div className="sn-equipo-info">
            <h4 className="sn-equipo-nombre">Federico García</h4>
            <p className="sn-equipo-rol">Profesor de Educación Física</p>
            <p className="sn-equipo-desc">
              Profesional dedicado al entrenamiento personalizado, con especial interés en
              el entrenamiento de fuerza y las evaluaciones funcionales. Mi objetivo es diseñar
              procesos de entrenamiento adaptados a cada persona, combinando planificación,
              seguimiento y formación continua.
            </p>

            <button className="sn-equipo-btn" onClick={() => setVerFormaciones(!verFormaciones)}>
              {verFormaciones ? "Ver menos ▲" : "Saber más ▼"}
            </button>

            {verFormaciones && (
              <div className="sn-formaciones">
                <p className="sn-formaciones-title">Formaciones</p>
                <ul>
                  {formaciones.map((f, i) => (
                    <li key={i}><span className="sn-check">✓</span> {f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

export default SobreNosotros;