import axios from "axios";
import React, { useEffect, useState } from "react";
import "./MyWeatherApp.css";

const MyWeatherApp = () => {
  // 23c092994da589b5bce730061c43217c
  // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=23c092994da589b5bce730061c43217c
  // const [city, setCity] = useState(null);
  // const [search,setSearch] = useState('mumbai')
  // https://api.openweathermap.org/data/2.5/weather?q=

  // final
  // https://api.openweathermap.org/data/2.5/weather?q=Noida&appid=da8220c831158cf36b6856840d0c7acc

  const apiKey = "da8220c831158cf36b6856840d0c7acc";
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});

  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    //   // const apiUrl ="https://api.openweathermap.org/data/2.5/weather?q=" + cityname +"&appid=" + apiKey;

    //   // const apiUrl ="https://api.openweathermap.org/data/2.5/weather?q=" + cityname +"&appid=" + apiKey;
    const apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;

    axios
      .get(apiUrl)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const Submit = () => {
    getWeatherDetails(inputCity);
  };
  const MyInputCity = (e) => {
    setInputCity(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    getWeatherDetails("delhi");
  }, []);

  return (
    
    <div id="background">
    <div id="main">
      <div id="container">
        <img
          alt=":)"
          src="https://w7.pngwing.com/pngs/530/127/png-transparent-weather-forecasting-national-weather-service-weather-radar-weather-atmosphere-cloud-weather-forecasting-thumbnail.png"
        />
        {/* <img src="https://cdn.dribbble.com/users/915711/screenshots/5827243/media/8205a28b52d151c495298e0ead6b4f28.png"alt='hello' /> */}
        <h1>Weather Forecast</h1>
      </div>

      <div id="show">
        <div id="input">
          <input
            type="search"
            placeholder="Delhi"
            value={inputCity}
            onChange={MyInputCity}
          ></input>{" "}
          <br />
          <button id="btn" onClick={Submit}>
            Search 
          </button>
        </div>

        <div id="blank"></div>

          <div id="display">
            <h8>{data?.name} &emsp;</h8>
            {/* <h2>{data?.main?.temp} °F  </h2> */}
            <h2>{(data?.main?.temp - 273.15).toFixed(2)}°C </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWeatherApp;
