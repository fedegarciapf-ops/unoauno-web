import "./SobreNosotros.css";

function SobreNosotros() {
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

        <div className="sn-grid">

          <div className="sn-card">
            <h3>Nuestra misión</h3>
            <p>
              Ayudar a las personas a mejorar su salud, su rendimiento
              físico y su calidad de vida mediante un entrenamiento
              personalizado, basado en evidencia científica y acompañado
              por un seguimiento profesional constante.
            </p>
          </div>

          <div className="sn-card">
            <h3>Nuestra visión</h3>
            <p>
              Ser una empresa referente en entrenamiento personalizado
              online, reconocida por la calidad del servicio, la
              innovación tecnológica y el compromiso con cada alumno,
              demostrando que el acompañamiento profesional puede
              trascender cualquier distancia.
            </p>
          </div>

        </div>

        <h3 className="sn-valores-title">Nuestros valores</h3>

        <ul className="sn-valores-list">
          {valores.map((valor, index) => (
            <li key={index}>
              <span className="sn-check">✓</span>
              {valor}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}

export default SobreNosotros;