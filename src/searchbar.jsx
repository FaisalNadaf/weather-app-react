import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchbar.css";
import { useState } from "react";

export default function Searchbar({ updateinfo }) {
  let [city, setcity] = useState("");

  let weather_url = "https://api.openweathermap.org/data/2.5/weather";
  let weather_api_key = "d062267dd22b8ad25aa61d948524e59c";

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${weather_url}?q=${city}&appid=${weather_api_key}&units=metric`
    );
    let jsonresponce = await response.json();

    let result = {
      city: city,
      temp: jsonresponce.main.temp,
      mintemp: jsonresponce.main.temp_min,
      maxtemp: jsonresponce.main.temp_max,
      humidity: jsonresponce.main.feels_like,
      weather: jsonresponce.weather[0].description,
    };
    console.log(result);
    return result;
  };

  let handelOnChangte = (event) => {
    return setcity(event.target.value);
  };

  let handelOnSubmit = async (event) => {
    event.preventDefault();
    setcity(" ");
    let info = await getWeatherInfo();
    updateinfo(info);
  };
  return (
    <>
      <div className="searchbar">
        <form onSubmit={handelOnSubmit}>
          <TextField
            label="city name"
            variant="outlined"
            value={city}
            id="city"
            required
            onChange={handelOnChangte}
          />
          <br />
          <br />
          <Button className="search-btn" variant="contained" type="submit">
            search
          </Button>
        </form>
      </div>
    </>
  );
}
