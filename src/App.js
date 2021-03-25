import './App.css';
import Footer from "./Footer.js";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Weather defaultCity="London" />
          </div>
          <Footer />
        </div>
      </div>
    </div>

  );
}


