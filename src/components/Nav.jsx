import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">App Test</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link to='/' class="nav-link" aria-current="page">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/form" class="nav-link">Formulario</Link>
                        </li>
                        
                        </ul>
                        <div>
                            <form>
                                <Link to="/login">iniciar sesion</Link>
                            </form>
                        </div>
                </div>
            </div>
        </nav> 
    )
}

export default Nav