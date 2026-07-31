import "./ContactModal.css";

function ContactModal({ open, onClose }) {
    if (!open) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>

                <button className="modal-close" onClick={onClose} aria-label="Cerrar">
                    ✕
                </button>

                <h2 className="modal-title">Hacé tu consulta</h2>
                <p className="modal-subtitle">
                    Contanos tu objetivo y te respondemos a la brevedad.
                </p>

                <form
                    className="modal-form"
                    action="https://formspree.io/f/mbdnbooe"
                    method="POST"
                >
                    <label htmlFor="nombre">Nombre y Apellido</label>
                    <input type="text" id="nombre" name="nombre" required />

                    <label htmlFor="email">Correo electrónico</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="telefono">Teléfono</label>
                    <input type="tel" id="telefono" name="telefono" required />

                    <label htmlFor="mensaje">Mensaje de consulta</label>
                    <textarea id="mensaje" name="mensaje" rows="4" required></textarea>

                    <button type="submit" className="modal-submit">
                        Enviar
                    </button>
                </form>

            </div>
        </div>
    );
}

export default ContactModal;
