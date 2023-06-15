import React, {useState} from 'react';
import axios from 'axios';
import '../css/common.css';
import CurrentObservation from './CurrentObservation';
import ForecastingDetails from './ForecastingDetails';

export default function WeatherDashboard() {

  const [forecastData, setForecastData] = useState(null);
  const [isActive,setIsActive] = useState(false);

  const fetchWeather = async(city) => {
    if(city === ""){
      city = "Chennai"
    }
    try {
      setIsActive(true);
      const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=A4KT7JK4NTAPCJTFT48SNZHQE`)
      // console.log(response.data);
      setIsActive(false);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

  const handleFetchWeather = async () => {
    let city = document.getElementById("cityinput").value;
    return fetchWeather(city)
      .then((response) => {
        // console.log(typeof(response));
        setForecastData(response.data);
        return response;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  


  return (
    <div className='WeatherDashboardContainer d-flex bg-dark'>
      {isActive && (
        <div className="loading-icon position-absolute top-50 start-50 translate-middle">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
        <CurrentObservation handleFetchWeather={handleFetchWeather} />
        <ForecastingDetails data={forecastData}/>   
    </div>
  )
}
