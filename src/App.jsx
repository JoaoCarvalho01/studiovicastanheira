import "./App.css";
import vitoriacapa from "./imgs/vitoriacapa.jpeg";
import placeholder from "./imgs/placeholder.png";
import whatsapp from "./imgs/image.png";
function App() {
  return (
    <>
      <div className="cabeca">
        <img src={vitoriacapa} alt="Imgagem da vitoria castanheira " />
        <p>VITORIA CASTANHEIRA | LASH DESIGN</p>
      </div>
      <div className="corpo">
        <p>Agende o seu horário aqui ✨⬇️ </p>
        <p className="botao">
          <img src={whatsapp} alt="image-icon do whatsApp" id="icon" />{" "}
          <a href="https://wa.me/+555511989037092?text=Oi,%20quero%20agendar%20um%20horario!">
            Marque seu horario
          </a>
        </p>
        <br />
        <p className="botao">
          {" "}
          <img src={placeholder} alt="icon map" id="iconmap" />
          <a href="https://wa.me/+555511989037092?text=Quero%20saber%20onde%20você%20atende!">
            Como chegar
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
