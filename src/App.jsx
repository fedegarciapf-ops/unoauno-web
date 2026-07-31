import { useState } from "react";
import "./App.css";
import Hero from "./sections/Hero";
import QueEsUnoAUno from "./sections/QueEsUnoAUno";
import SobreNosotros from "./sections/SobreNosotros";
import AsiTrabajamos from "./sections/AsiTrabajamos";
import AppShowcase from "./sections/AppShowcase";
import Membresias from "./sections/Membresias";
import Testimonios from "./sections/Testimonios";
import Footer from "./sections/Footer";
import ContactModal from "./components/ContactModal";
import LegalModal from "./components/LegalModal";

function App() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [legalAbierto, setLegalAbierto] = useState(null);

  return (
    <>
      <Hero onAbrirConsulta={() => setModalAbierto(true)} />
      <QueEsUnoAUno />
      <SobreNosotros />
      <AsiTrabajamos />
      <AppShowcase />
      <Membresias onAbrirConsulta={() => setModalAbierto(true)} />
      <Testimonios />
      <Footer onAbrirLegal={(tipo) => setLegalAbierto(tipo)} />

      <ContactModal
        open={modalAbierto}
        onClose={() => setModalAbierto(false)}
      />

      <LegalModal
        tipo={legalAbierto}
        onClose={() => setLegalAbierto(null)}
      />
    </>
  );
}

export default App;