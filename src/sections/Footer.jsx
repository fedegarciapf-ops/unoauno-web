import "./Footer.css";

function Footer({ onAbrirLegal }) {
  return (
    <footer className="footer">

      {/* CTA */}
      <div className="footer-cta">
        <h2>LISTOS PARA TU MEJOR VERSIÓN</h2>
        <p>
          Entrenamiento personalizado, seguimiento real y una comunidad
          que te acompaña siempre.
        </p>
        <p className="footer-tagline">Donde estés, entrenamos con vos.</p>
      </div>

      {/* Columnas */}
      <div className="footer-columns">

        <div className="footer-col">
          <h3>CONTACTO</h3>
          <a href="https://www.instagram.com/unoauno.entrenamiento?igsh=MTV6bWx1ZXNiemk0eA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            📷 Instagram
          </a>
          <a href="mailto:fedegarcia.pf@gmail.com">✉️ fedegarcia.pf@gmail.com</a>
        </div>

        <div className="footer-col">
          <h3>ENLACES</h3>
          <a href="#sobre-nosotros">Sobre Nosotros</a>
          <a href="#que-es-uno-a-uno">Servicio</a>
          <a href="#app">App</a>
          <a href="#membresias">Membresías</a>
          <a href="#">Preguntas Frecuentes</a>
          <a href="#">Contacto</a>
        </div>

        <div className="footer-col">
          <h3>SEGUINOS</h3>
          <div className="footer-social">
            <a href="https://www.instagram.com/unoauno.entrenamiento?igsh=MTV6bWx1ZXNiemk0eA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              📷
            </a>
          </div>
        </div>

        <div className="footer-col footer-logo-col">
          <div className="footer-logo">UNO A UNO</div>
          <p>ENTRENAMIENTO PERSONALIZADO ONLINE</p>
        </div>

      </div>

      {/* Barra inferior */}
      <div className="footer-bottom">
        <p>© 2026 UNO A UNO. Todos los derechos reservados.</p>
        <div className="footer-legal">
          <a href="#" onClick={(e) => { e.preventDefault(); onAbrirLegal("terminos"); }}>
            Términos y Condiciones
          </a>
          <a href="#" onClick={(e) => { e.preventDefault(); onAbrirLegal("privacidad"); }}>
            Política de Privacidad
          </a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
