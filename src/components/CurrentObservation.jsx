import React, {useEffect, useState} from 'react';
import sunny from '../images/sunny.png';
import storm from '../images/storm.png';
import snow from '../images/rainy.png';
import rain from '../images/rainy.png';
import cloud from '../images/cloud.png';
import rainstorm from '../images/rain with storm.png';

export default function CurrentObservation({fetchWeather}) {

    const [forecastData, setForecastData] = useState(JSON.parse(localStorage.getItem('data')) || null);

    const handleClick = async () => {

        let city = document.getElementById("cityinput").value;
        const response = await fetchWeather(city);
        const dataString = JSON.stringify(response.data);
        console.log(dataString)
        localStorage.setItem('data', dataString);
        setForecastData(response.data)
    };


    return (
        <div className='Observation-container m-3 '>
                <div class="input-group mb-3 search-container">
                    <input type="text" class="form-control city-input" id='cityinput' placeholder="Search for cities" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    <button class="btn btn-outline-primary" type="button" id="button-addon2" onClick={handleClick}>Fetch</button>
                </div>
                <div className="currentObservation d-flex justify-content-between">
                    <div>
                        <h3>{forecastData?.address}</h3>
                        <p>{forecastData?.currentConditions?.datetime}</p>
                        <h1 className='fs-1 text-primary'>{forecastData?.currentConditions?.feelslike}&#176; F</h1>
                    </div>
                    <div>
                    {forecastData?.currentConditions?.conditions?.toLowerCase().includes('cloud') && (
                        <img src={cloud} alt='Cloudy' width='100' />
                    )}
                    {forecastData?.currentConditions?.conditions?.toLowerCase().includes('rainstorm') && (
                        <img src={rainstorm} alt='Cloudy' width='100' />
                    )}
                    {forecastData?.currentConditions?.conditions?.toLowerCase().includes('clear') && (
                        <img src={sunny} alt='Sunny' width='100' />
                    )}
                    {forecastData?.currentConditions?.conditions?.toLowerCase().includes('storm') && (
                        <img src={storm} alt='Storm' width='100' />
                    )}
                    {forecastData?.currentConditions?.conditions?.toLowerCase().includes('snow') && (
                        <img src={snow} alt='Snow' width='100' />
                    )}
                    {forecastData?.currentConditions?.conditions?.toLowerCase().includes('rain') && (
                        <img src={rain} alt='Rain' width='100' />
                    )}
                        <p className='text-center my-2'>{forecastData?.currentConditions?.conditions}</p>
                    </div>
                </div>
                <br />
                <div className='observationAddon d-flex flex-grow-1'>
                    <div className='col wind rounded-5'>
                        <h5 className='text-center my-3 text-primary'>wind</h5>
                        <ul className='wind-card list-unstyled'>
                            <li className='d-flex justify-content-between'>
                                <div>uv index</div>
                                <div className='fw-bold'>{forecastData?.currentConditions?.uvindex}</div>
                            </li>
                            <hr className='divider'/>
                            <li className='d-flex justify-content-between'>
                                <div>direction</div>
                                <div className='fw-bold'>{forecastData?.currentConditions?.winddir}</div>
                            </li>
                            <hr className='divider'/>
                            <li className='d-flex justify-content-between'>
                                <div>speed</div>
                                <div className='fw-bold'>{forecastData?.currentConditions?.windspeed}km/s</div>
                            </li>
                        </ul>
                    </div>
                    <div className='col atmos rounded-5'>
                    <h5 className='text-center my-3 text-primary'>atmosphere</h5>
                        <ul className='wind-card list-unstyled'>
                            <li className='d-flex justify-content-between'>
                                <div>humidity</div>
                                <div className='fw-bold'>{forecastData?.currentConditions?.humidity}</div>
                            </li>
                            <hr className='divider'/>
                            <li className='d-flex justify-content-between'>
                                <div>pressure</div>
                                <div className='fw-bold'>{forecastData?.currentConditions?.pressure}</div>
                            </li>
                            <hr className='divider'/>
                            <li className='d-flex justify-content-between'>
                                <div>visibility</div>
                                <div className='fw-bold'>{forecastData?.currentConditions?.visibility}</div>
                            </li>
                        </ul>
                    </div>
                
                    <div className='col astro rounded-5 '>
                    <h5 className='text-center my-3 text-primary'>astronomy</h5>
                        <ul className='wind-card list-unstyled'>
                            <li className='d-flex justify-content-between'>
                                <div>sunrise</div>
                                <div className='fw-bold'>{forecastData?.currentConditions?.sunrise}</div>
                            </li>
                            <hr className='divider'/>
                            <li className='d-flex justify-content-between'>
                                <div>sunset</div>
                                <div className='fw-bold'>{forecastData?.currentConditions?.sunset}</div>
                            </li>
                            <hr className='divider'/>
                            <li className='d-flex justify-content-between'>
                                <div>moonphase</div>
                                <div className='fw-bold'>{forecastData?.currentConditions?.moonphase}</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}
