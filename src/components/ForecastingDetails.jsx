import React, {useEffect, useState} from 'react';
import sunny from '../images/sunny.png';
import storm from '../images/storm.png';
import snow from '../images/rainy.png';
import rain from '../images/rainy.png';
import cloud from '../images/cloud.png';
import rainstorm from '../images/rain with storm.png';

export default function ForecastingDetails({data}) {
  
  const [forecastData, setForecastData] = useState(null);
  const [days, setDays] = useState([]);

  useEffect(() => {
    if (data && data.data) {
      setForecastData(data);
      setDays(data.data.days);
    }
  }, [data]);

  
//  console.log("hello mumbai" + JSON.stringify(data))

  return (
    <div className="Forecasting rounded-5 flex-grow-1 p-3  overflow-y-scroll element">

       <h5 className='text-center forecast-title'>15-days Forecast</h5> 
        {
          days.map(day => (
            <div key={day.datetime} className='forecast-card rounded-4 px-3'>
              <div className='fw-bold day'>{day.datetime}</div>
              <div className='image'>
                
                {day.icon.toLowerCase().includes('cloud') && (
                    <img src={cloud} alt='Cloudy' width='35' />
                )}
                {day.icon.toLowerCase().includes('rainstorm') && (
                    <img src={rainstorm} alt='Cloudy' width='35' />
                )}
                {day.icon.toLowerCase().includes('clear') && (
                    <img src={sunny} alt='Sunny' width='35' />
                )}
                {day.icon.toLowerCase().includes('storm') && (
                    <img src={storm} alt='Storm' width='35' />
                )}
                {day.icon.toLowerCase().includes('snow') && (
                    <img src={snow} alt='Snow' width='35' />
                )}
                {day.icon.toLowerCase().includes('rain') && (
                    <img src={rain} alt='Rain' width='35' />
                )}

              </div>
              <div className='fw-bold desc'>{day.icon}</div>
            </div>
          ))
        }

    </div>
  )
}
