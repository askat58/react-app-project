import './App.css';
import Footer from "./Footer.js";
import Search from "./Search.js";
import Today from "./Today.js";
import Description from "./Description.js";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <Search />
          <Today />
          <Description />
        </div>
        <Footer />
      </div>
    </div>
  );
}


