import { useState } from "react";
import InfoBox from "./infobox";
import Searchbar from "./searchbar";
import './weatherApp.css'



export default function WeatherApp(){

    const [weatherinfo, setweatherinfo]=useState({
        city:'belgaum',
        humidity: 29.36,
        maxtemp: 28.95,
        mintemp: 28.95,
        temp: 28.95,
        weather: "scattered clouds",
    });

    let updateinfo=(result)=>{
        setweatherinfo(result);
    }

    return(
        <div className="weatherBox">

            <Searchbar updateinfo={updateinfo}/>
            <InfoBox info={weatherinfo}/>

        </div>
    )
}