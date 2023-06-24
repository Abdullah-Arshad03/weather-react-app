import React from "react";
import { WiDaySunnyOvercast } from "weather-icons-react";
function Navbar(){
return(<>
<div className="Nav">
<div className="contain">
      <h1 className="Nav-heading" >ReactWeather  </h1>
      <span className="weather_icon" > <WiDaySunnyOvercast size={40} color='#002D62'/></span>
      </div>
      {/* <h4 className="Nav-subheading">(DevelopedBy-Abdullah)</h4> */}
      </div>
</>)
}
export default Navbar;