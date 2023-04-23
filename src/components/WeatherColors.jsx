import "./WeatherColors.css";

const WeatherColors = () => {
  return (
    <>
    <div className="line"></div>
    <div className="weatherAndColorContainer">
      <div className="colorContainerSunny">
        <div className="weatherColorsSunny"></div>
        <div className="weatherText">Soleado</div>
      </div>
      <div className="colorContainerRainy">
        <div className="weatherColorsRainy"></div>
        <div className="weatherText">Lluvias</div>
      </div>
      <div className="colorContainerUnstable">
        <div className="weatherColorsUnstable"></div>
        <div className="weatherText">Inestable</div>
      </div>
    </div>
    </>
  );
};

export default WeatherColors;
