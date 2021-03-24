import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from "./Login.scss";
import { faChevronLeft, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    return (
        <>
            <div className="LogPage">
                <div className="Logo">
                    <FontAwesomeIcon icon={faChevronLeft} className="Back" />

                    <img src='./The-Point-Logo.svg' />

                    <div className="LogForm">
                            <i></i>
                            <h4 className="fb"> Ingresar con Facebook </h4>
                            <i></i>
                            <h4 className="google"> Ingresar con Google </h4>
                                <div className="hr">
                                    <span> Or </span>
                                </div>  
                            <input type="text" placeholder="Email" />
                            <input type="text" placeholder="Constraseña" />
                            <FontAwesomeIcon icon={faEyeSlash} />
                            <button type="submit"> Ingresar </button>
                            <h5> ¿Aún no tienes una cuenta? </h5>
                            <a> Registrate Aquí </a>
                    </div>
                </div>
            </div>    
        </>
    )
}

export default Login
