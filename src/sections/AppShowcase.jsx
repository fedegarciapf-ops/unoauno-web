import captura1 from "../assets/images/captura1.png";
import captura2 from "../assets/images/captura2.png";
import captura3 from "../assets/images/captura3.png";
import {
  FaClipboardList,
  FaChartLine,
  FaVideo,
  FaSlidersH,
  FaComments,
  FaGlobeAmericas,
} from "react-icons/fa";
import "./AppShowcase.css";

function AppShowcase() {
    const features = [
    { icono: <FaClipboardList />, texto: "Planificación personalizada" },
    { icono: <FaChartLine />, texto: "Seguimiento del progreso" },
    { icono: <FaVideo />, texto: "Corrección técnica en video" },
    { icono: <FaSlidersH />, texto: "Ajustes cuando se necesiten" },
    { icono: <FaComments />, texto: "Comunicación directa con el entrenador" },
    { icono: <FaGlobeAmericas />, texto: "Acceso a la app desde cualquier lugar" },
];

    return (
        <section className="app-showcase" id="app">
            <div className="as-container">

                {/* Columna izquierda: features */}
                <div className="as-left">
                    <h2>
                        TODO LO QUE NECESITÁS,
                        <br />
                        EN UN SOLO LUGAR
                    </h2>

                    <div className="as-features">
                        {features.map((f, i) => (
                            <div className="as-feature" key={i}>
                                <span className="as-feature-icon">{f.icono}</span>
                                <span>{f.texto}</span>
                            </div>
                        ))}
                    </div>

                    <p className="as-tagline">
                        Basado en evidencia. Pensado para vos.
                    </p>
                </div>

                {/* Columna centro: mockups de celular */}
                <div className="as-center">
                    <div className="phone-mockup">
                        <div className="phone-screen">
                            <img src={captura1} alt="Entrenamiento de hoy" className="phone-img" />
                        </div>
                    </div>
                    <div className="phone-mockup phone-mockup-mid">
                        <div className="phone-screen">
                            <img src={captura2} alt="Tu progreso" className="phone-img" />
                        </div>
                    </div>

                    <div className="phone-mockup">
                        <div className="phone-screen">
                            <img src={captura3} alt="Ejercicio" className="phone-img" />
                        </div>
                    </div>
                </div>

                {/* Columna derecha: texto + descarga */}
                <div className="as-right">
                    <h2>
                        NUESTRA APP, TU ENTRENAMIENTO
                        <br />
                        SIEMPRE CONTIGO
                    </h2>

                    <p className="as-description">
                        Diseñada para que registres, consultes y hagas seguimiento
                        de tu progreso en un solo lugar.
                    </p>
                </div>

            </div>
        </section>
    );
}

export default AppShowcase;
