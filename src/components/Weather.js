import React from 'react';

const Weather = (props) => {
    return(
        <div className="info">
            {
                props.city &&
                <p className="info_key"> City : {props.city}</p>
            }
            {
                props.time &&
                <p className="info_key"> Time : {props.time}</p>
            }
            {
                props.icon &&
                <img src={`http://openweathermap.org/img/wn/${props.icon}.png`}alt = "weather icon"/>
            }
            {
                props.temperature && 
                <p className="info_key"> Temperature : {props.temperature} °C</p>
            }           
             {
                props.max &&
                <p className="info_key"> About : {props.min}°C ~ {props.max}°C</p>
             }
             
               
              
            
             {
                props.description &&
                <p className="info_key"> Description : {props.description}</p>
            }
             {
                props.humidity &&
                <p className="info_key"> Humidity : {props.humidity}</p>
            }
             {
                props.error &&
                <p className="info_key"> Error : {props.error}</p>
            }
         
        </div>
    )  
}      
export default Weather;