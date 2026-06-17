import { useState } from 'react'
import style from "../styles/Homepage.module.css";

function navBar() {
    return (
        <Header>  
            <div className={style.navBar}>
                <nav>
                    <div className={style.logo}>
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className={style['menu-links']}>
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
