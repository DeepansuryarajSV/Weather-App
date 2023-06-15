import React from 'react';
import img from '../images/homebg.png';
import '../css/common.css';


export default function Home() {
  return (
    <div className='weatherHomecontainer container-fluid d-flex justify-content-between bg-dark'>
        <div className='greet'>
            <h1 className='fw-bold'>Welcome</h1>
            <p>This is a React App for the weather forecasting using <span className='text-primary' >Yahoo Weather API.</span></p>
            <br />
            <button type="button" class="btn btn-primary">Weather Page</button>
        </div>
        <div>
            <img src={img} alt="Nackground" width="400"/>
        </div>
        
    </div>
  )
}
