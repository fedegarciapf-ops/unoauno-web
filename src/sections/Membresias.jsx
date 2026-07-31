import "./Membresias.css";

function Membresias({ onAbrirConsulta }) {
  return (
    <section className="membresias" id="membresias">
      <div className="mb-container">

        <h2 className="mb-title">MEMBRESÍAS</h2>

        <div className="mb-plans">

          {/* Plan Mensual */}
          <div className="mb-card">
            <p className="mb-plan-name">MENSUAL</p>

            <p className="mb-price">
              <span>$...</span> <small>/ MES</small>
            </p>

            <ul className="mb-list">
              <li>✓ Planificación personalizada</li>
              <li>✓ Seguimiento constante</li>
              <li>✓ Acceso a la App</li>
              <li>✓ Ajustes según tu progreso</li>
            </ul>

            <button className="mb-btn" onClick={onAbrirConsulta}>EMPEZAR AHORA</button>
          </div>

          {/* Plan Trimestral */}
          <div className="mb-card mb-card-featured">
            <span className="mb-badge">AHORRÁ 17%</span>

            <p className="mb-plan-name">TRIMESTRAL</p>

            <p className="mb-price">
              <span>$...</span> <small>/ 3 MESES</small>
            </p>

            <ul className="mb-list">
              <li>✓ Mismo servicio</li>
              <li>✓ Ahorro significativo</li>
              <li>✓ Acompañamiento continuo</li>
            </ul>

            <button className="mb-btn mb-btn-featured" onClick={onAbrirConsulta}>ELEGIR PLAN</button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Membresias;
