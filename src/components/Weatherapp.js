import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { WeatherInfo } from "./WeatherInfo";
import { useState } from "react";
import { Footer } from "./Footer";

function Weatherapp() {
  const [city, setcity] = useState(null);
  const [searchTerm, setSearchTerm] = useState();
  const [data , setdata] = useState(null)
  const [Temp, setTemp] = useState('');
  const [max, setmax] = useState('');
  const [min, setmin] = useState('');
  const [icon , seticon] = useState();

  useEffect(() => {
    const fetchapi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=10356812d90c74f7cd5ef3a78be57d4d`;
      const response = await fetch(url)
      const jsonData = await response.json();
      console.log('Fetched data:', jsonData.name);
     
      setcity(jsonData.name);
      console.log(jsonData.main.temp)
      setTemp(jsonData.main.temp)
      setmax(jsonData.main.temp_max)
      setmin(jsonData.main.temp_min)

      seticon(jsonData.weather[0].main)
      
    };

    fetchapi();
  });

  return (
    <>
      
      
      <div className="Container">
      <Navbar></Navbar>
        <div className="search_weather">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              
            }}
          >
            <input
              type="search"
              className="input_feild"
              placeholder="Weather In :"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
            {/* <button className="submit_button" type="submit">Search</button> */}
          </form>
        </div>
{!city ? (
  <>
  <div className="intro_info">
  
  <h1 className="checks">GET FORECAST <span className="checks_span" > AROUND THE GLOBE </span></h1>
   <h4 className="sub_intro">JUST ENTER CITY NAME</h4>
  </div>

  </>
) : (
  <WeatherInfo
          city={city}
          Temperature={Temp}
          max={max}
          min={min}
          icon = {icon}
        />
)
}
       <Footer/>
      </div>
    </>
  );
}

export { Weatherapp };
