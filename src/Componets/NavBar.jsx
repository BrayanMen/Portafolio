import React from 'react'
import './Navbar.css'

export default function NavBar() {
    return (
        <div className='navbarLoader'>
            <nav className='navbarDiv NavContainer'>
                {/* <a href="/">Logo</a> */}
                <input type="checkbox" id="toggler" />
                <label for="toggler"><i class="line"></i></label>
                <div className='menuDiv'>
                    <ul className='listNav'>
                        <li>
                            <a href="/">Inicio</a>
                        </li>
                        <li>
                            <a href="/about-me">Sobre mi</a>
                        </li>
                        <li>
                            <a href="/skill">Skills</a>
                        </li>
                        <li>
                            <a href="/projects">Proyectos</a>
                        </li>
                        <li>
                            <a href="/contact">Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
