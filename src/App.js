import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CityInput from "./component/cityInput";
import CityWeather from "./component/cityweather";
import { useState } from "react";

function App() {
  let [City, changeCity] = useState("");
  let fetchdata = () => {
    let promise = fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${City}&appid=4c496af33d732297c30b641b3b235e47`
    );
    promise
      .then((res) => {
        let data = res.json();
        data
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <CityInput
      fetchdata={fetchdata}
      City={City}
      changeCity={changeCity}
    ></CityInput>
  );
}

export default App;
