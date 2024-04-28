import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        temp: 25.05,
        tempMax: 25.05,
        tempMin: 25.05,
        humidity: 50,
        speed :3.09,
        weather: "haze",
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }


    return(
    <div ><h3> Weather Dashboard Application</h3>
    <SearchBox updateInfo={updateInfo}/>
    <InfoBox info={weatherInfo}/>
    </div>
    );
}