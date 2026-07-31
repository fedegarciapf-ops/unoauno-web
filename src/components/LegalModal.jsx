import "./LegalModal.css";

function LegalModal({ tipo, onClose }) {
  if (!tipo) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="legal-box" onClick={(e) => e.stopPropagation()}>

        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          ✕
        </button>

        {tipo === "terminos" && (
          <>
            <h2 className="legal-title">Términos y Condiciones</h2>
            <p className="legal-updated">Última actualización: julio 2026</p>

            <h3>1. Sobre este sitio</h3>
            <p>
              Este sitio web es un espacio informativo de UNO A UNO,
              entrenamiento personalizado online. A través de él podés
              conocer nuestro servicio, planes y forma de trabajo, y
              contactarnos para hacer consultas.
            </p>

            <h3>2. El servicio</h3>
            <p>
              Los planes y precios mostrados en este sitio son de
              carácter informativo. El inicio efectivo del servicio de
              entrenamiento personalizado se coordina de forma directa
              con nosotros a través del formulario de contacto, y puede
              estar sujeto a disponibilidad y a una evaluación previa de
              tu situación y objetivos.
            </p>

            <h3>3. Uso del sitio</h3>
            <p>
              Al usar este sitio te comprometés a brindar información
              real y a no utilizarlo con fines distintos a informarte
              sobre nuestros servicios o contactarnos.
            </p>

            <h3>4. Propiedad del contenido</h3>
            <p>
              Los textos, imágenes y diseño de este sitio pertenecen a
              UNO A UNO. No está permitida su reproducción sin
              autorización.
            </p>

            <h3>5. Cambios</h3>
            <p>
              Estos términos pueden actualizarse en el futuro. Te
              recomendamos revisarlos de tanto en tanto.
            </p>

            <h3>6. Contacto</h3>
            <p>
              Ante cualquier duda sobre estos términos, podés
              escribirnos a{" "}
              <a href="mailto:fedegarcia.pf@gmail.com">
                fedegarcia.pf@gmail.com
              </a>
              .
            </p>
          </>
        )}

        {tipo === "privacidad" && (
          <>
            <h2 className="legal-title">Política de Privacidad</h2>
            <p className="legal-updated">Última actualización: julio 2026</p>

            <h3>1. Qué datos recolectamos</h3>
            <p>
              Cuando completás nuestro formulario de consulta,
              recolectamos tu nombre, correo electrónico, teléfono y el
              mensaje que nos escribís.
            </p>

            <h3>2. Para qué usamos tus datos</h3>
            <p>
              Usamos estos datos únicamente para responder tu consulta y,
              si avanzás con nuestro servicio, para coordinar tu proceso
              de entrenamiento. No usamos tus datos con fines
              publicitarios ni los vendemos.
            </p>

            <h3>3. Con quién compartimos tus datos</h3>
            <p>
              Tu consulta se procesa a través de Formspree, un servicio
              externo que nos permite recibir los formularios de este
              sitio por correo electrónico. No compartimos tus datos con
              ningún otro tercero.
            </p>

            <h3>4. Tus derechos</h3>
            <p>
              Podés pedirnos en cualquier momento que te digamos qué
              datos tenemos tuyos, que los corrijamos, o que los
              eliminemos, escribiéndonos a{" "}
              <a href="mailto:fedegarcia.pf@gmail.com">
                fedegarcia.pf@gmail.com
              </a>
              .
            </p>

            <h3>5. Cambios</h3>
            <p>
              Esta política puede actualizarse en el futuro. Te
              recomendamos revisarla de tanto en tanto.
            </p>
          </>
        )}

      </div>
    </div>
  );
}

export default LegalModal;
