import nacelleImg from "./assets/nacelleImg.jpg";
import camionbenneImg from "./assets/camionbenneImg.jpg";
import betionniereImg from "./assets/betionniereImg.jpg";
import "./App.css";
import { Equipment } from "./components/Equipment";

const equipments = [
  {
    name: "nacelle",
    image: nacelleImg,
  },
  {
    name: "camion benne",
    image: camionbenneImg,
  },
  {
    name: "betionniere",
    image: betionniereImg,
  },
];

function App() {
  return (
    <div>
      <Equipment {...equipments[0]} />
      <Equipment {...equipments[1]} />
      <Equipment {...equipments[2]} />
    </div>
  );
}

export default App;
