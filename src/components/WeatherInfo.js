import React,{useState} from "react";
import {WiCloud} from "weather-icons-react";
import {WiDaySunnyOvercast} from "weather-icons-react";
import {WiDayRain} from "weather-icons-react";
import {WiCloudy} from "weather-icons-react";
import {WiDayHaze} from "weather-icons-react";

function WeatherInfo(props){
  const [ time , settime] = useState('Today');

    const {city , Temperature , max , min , icon}  = props 
    return(<>
       <div className="information">
          <div className="location">
          <h1 className="today" > {time} </h1>
         <h1 className="city" >{city}</h1>
          </div>

        <div className="line">
               <h1 className="vertical_line" > </h1>
        </div>

        <div className="icon">
           {icon==='Clear'? (
            <>
           <WiCloud size={200}/>
           <h3 className="condition" >"{icon}"</h3>
           </>
           ) : icon === 'Clouds'? (
            <>
            <WiCloudy size={200} />
            <h3 className="condition" >"{icon}"</h3>
            </>
           ) : icon === 'Rain' ? (
            <>
            <WiDayRain size={200} />
            <h3 className="condition" >"{icon}"</h3>
            </>
           ) : icon === "Haze"? (
            <>
              <WiDayHaze size ={200} />
              <h3 className="condition">"{icon}"</h3>
            </>
           ) :(
            <>
            <WiDaySunnyOvercast size={200} />
            <h3 className="condition">"{icon}"</h3>
            </>
           )}
        </div>

          <div className="temp_info">
            <h3 className="temp">Temperature : {Temperature}°C</h3>
            <h3 className="max-min">Max : {max}°C  |   Min : {min}°C</h3>
          </div>
        </div>

    </>)
}

export {WeatherInfo}