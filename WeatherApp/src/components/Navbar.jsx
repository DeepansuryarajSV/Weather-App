import React from 'react';
import {Link} from 'react-router-dom';


export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" ><span className='text-primary'>Weather</span> App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <Link className="nav-link" aria-current="page" to='/'>Home</Link>
                    <Link className="nav-link" to='/checkweather'>Check Weather</Link>
                    <Link className="nav-link">About</Link>
                </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
