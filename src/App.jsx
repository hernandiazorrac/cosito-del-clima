import Figure1 from "./components/Figure1.jsx";
import moment from "moment";
import { useState } from "react";

moment.updateLocale("es", {
  months: [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ],
  weekdays: [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ],
});

const date = moment();
const api = {
  key: "53e10a870f84fa5d6b5b7ea38e463069",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
        });
    }
  };

  return (
    <div className="app">
      <main>
        <div className="searchBox">
          <input
            type="text"
            className="searchBar"
            placeholder="Buscar ciudad..."
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyDown={search}
          />
        </div>

        {typeof weather.main != "undefined" ? (
          <div>
            <div id="temp-figure">
            <div className="locationBox">
              <div className="location">
                {weather.name}, {weather.sys.country}
              </div>
            </div>

              <div className="figureContainer">
                <Figure1
                  className={
                    typeof weather.main != "undefined"
                      ? weather.weather[0].main == "Rain" ||
                        weather.weather[0].main == "Drizzle" ||
                        weather.weather[0].main == "Snow" ||
                        weather.weather[0].main == "Thunderstorm" ||
                        weather.weather[0].main == "Tornado"
                        ? "rainy"
                        : weather.weather[0].main == "Clear"
                        ? "sunny"
                        : weather.weather[0].main == "Clouds" ||
                          weather.weather[0].main == "Mist" ||
                          weather.weather[0].main == "Smoke" ||
                          weather.weather[0].main == "Fog"
                        ? "unstable"
                        : "app"
                      : "app"
                  }
                />
              </div>

                <div className="weatherContainer">
                  <div className="temp">
                    {Math.round(weather.main.temp)}
                    <sup className="celciusDegrees">°C</sup>
                  </div>
                  <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} id="icon" />
                </div>

                
            </div>
          </div>
        ) : (
          ""
        )}
      </main>
    </div>
  );
}

export default App;
