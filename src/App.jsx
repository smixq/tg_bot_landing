import "./App.css";
import heroImage from "./assets/img/cropped_image.jpeg"; // замени на своё название файла

export default function App() {
  return (
    <div className="container">
      <div className="card fade-in">
        <h1 className="title">Добро пожаловать в наш BDSМ Dating бот</h1>
        <img src={heroImage} alt="dating illustration" className="hero-image fade-in-up" />
        <p className="description">
          Познакомься с людьми, разделяющими твои интересы. Общайся, находи
          партнёров и открывай новые грани общения.
        </p>
        <button
          className="btn fade-in-up"
          onClick={() => window.open("https://t.me/bdsmfindbot", "_blank")}
        >
          Перейти в Telegram бот
        </button>
      </div>
    </div>
  );
}
