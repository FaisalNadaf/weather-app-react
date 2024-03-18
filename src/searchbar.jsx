import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchbar.css";
import { useState } from "react";
import FmdBadIcon from "@mui/icons-material/FmdBad";

export default function Searchbar({ updateinfo }) {
  let [city, setcity] = useState("");
  let [error, seterror] = useState(false);

  let weather_url = "https://api.openweathermap.org/data/2.5/weather";
  let weather_api_key = "d062267dd22b8ad25aa61d948524e59c";

  let getWeatherInfo = async () => {
    let response = await fetch(
      `${weather_url}?q=${city}&appid=${weather_api_key}&units=metric`
    );
    let jsonresponce = await response.json();
    try {
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
    } catch (err) {
      throw err;
    }
  };

  let handelOnChangte = (event) => {
    return setcity(event.target.value);
  };

  let handelOnSubmit = async (event) => {
    try {
      event.preventDefault();
      setcity(" ");
      let info = await getWeatherInfo();
      updateinfo(info);
    } catch (err) {
      seterror(true);
    }
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
          {error && (
            <p style={{ color: "red" }}>
              <FmdBadIcon />
              that palce not exsist in our app
            </p>
          )}
        </form>
      </div>
    </>
  );
}
