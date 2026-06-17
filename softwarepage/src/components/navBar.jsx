import { useState } from 'react'

function navBar() {
    return (
        <Header>  
            <div className="navBar">
                <nav>
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="menu-links">
                        <ul>
                            <li><a href="#home">Inicio</a></li>
                            <li><a href="#about">Sobre SPS</a></li>
                            <li><a href="#products">Productos</a></li>
                            <li><a href="#dgii">Exigencias DGII</a></li>
                            <li><a href="#news">Noticias</a></li>   
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </Header>
    )
}

export default navBar
