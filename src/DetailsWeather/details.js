import React from "react";
import './weather.css';

function Details(props){
    return <div className="threedays_details">
        <div className="item">
            <p>{props.details.list[0].dt_txt.slice(0,10)}</p>
            <div className="firstRow">
                <img src={"http://openweathermap.org/img/wn/" + props.details.list[0].weather[0].icon + ".png"} alt=""/>
                <span>{props.details.list[0].weather[0].main}</span>
            </div>
            <p className="temp">{(props.details.list[0].main.temp-273.15).toFixed(1)} °C</p>
        </div>
        <div className="item">
            <p>{props.details.list[8].dt_txt.slice(0,10)}</p>
            <div className="firstRow">
                <img src={"http://openweathermap.org/img/wn/" + props.details.list[8].weather[0].icon + ".png"} alt=""/>
                <span>{props.details.list[8].weather[0].main}</span>
            </div>
            <p className="temp">{(props.details.list[8].main.temp-273.15).toFixed(1)} °C</p>
        </div>
        <div className="item">
            <p>{props.details.list[16].dt_txt.slice(0,10)}</p>
            <div className="firstRow">
                <img src={"http://openweathermap.org/img/wn/" + props.details.list[16].weather[0].icon + ".png"} alt=""/>
                <span>{props.details.list[16].weather[0].main}</span>
            </div>
            <p className="temp">{(props.details.list[16].main.temp-273.15).toFixed(1)} °C</p>
        </div>
    </div>;  
}

export default Details;