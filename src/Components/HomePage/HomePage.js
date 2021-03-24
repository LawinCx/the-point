import React, { Fragment } from 'react'
import { } from './HomePage.css';
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <div className="container">
                <p> Logo Canchero </p>
                <img className="Img" src=""></img>
                <Link to="/login" className="LoginButton">Login</Link>
            </div>
        </>
    )
}

export default HomePage
