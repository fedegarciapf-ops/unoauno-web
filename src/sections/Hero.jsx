import { useState } from "react";
import logo from "../assets/images/Logo.png";
import fotoHero from "../assets/images/foto-hero.png";
function Hero({ onAbrirConsulta }) {
    const [menuAbierto, setMenuAbierto] = useState(false)
    return (
       <section className="hero" id="hero">

            {/* Barra de navegación */}
            <header className="navbar">
                <img src={logo} alt="Uno a Uno" className="logo-img" />

                <nav className={`menu ${menuAbierto ? "menu-abierto" : ""}`}>
                    <a href="#hero" onClick={() => setMenuAbierto(false)}>Inicio</a>
                    <a href="#sobre-nosotros" onClick={() => setMenuAbierto(false)}>Sobre Nosotros</a>
                    <a href="#que-es-uno-a-uno" onClick={() => setMenuAbierto(false)}>Servicio</a>
                    <a href="#app" onClick={() => setMenuAbierto(false)}>App</a>
                    <a href="#membresias" onClick={() => setMenuAbierto(false)}>Membresías</a>
                    <a href="#testimonios" onClick={() => setMenuAbierto(false)}>Contacto</a>
                </nav>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuAbierto(!menuAbierto)}
                    aria-label="Abrir menú"
                >
                    {menuAbierto ? "✕" : "☰"}
                </button>
            </header>

            {/* Contenido principal */}
            <div className="hero-content">

                <div className="hero-left">

                    <p className="hero-tag">
                        ENTRENAMIENTO PERSONALIZADO
                    </p>

                    <h1>
                        Entrená con un propósito.
                    </h1>

                    <p className="hero-description">
                        Planificaciones personalizadas, seguimiento profesional y una
                        aplicación diseñada para acompañarte en cada etapa de tu proceso.
                    </p>

                    <div className="hero-buttons">

                        <button className="btn-primary" onClick={onAbrirConsulta}>
                            Consultar
                        </button>

                        <button className="btn-secondary">
                            Conocer más
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;