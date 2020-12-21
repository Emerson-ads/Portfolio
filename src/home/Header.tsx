import React from 'react'
import Imagem from 'next/image'

export default function Header (){
    return (
        <header>
          <div className="log">
            <Imagem 
              src="/photo.jpg"
              alt=" my picture"
              width={300}
              height={300}
            
            />
          </div>
          <button className="nav-toggle">
            <span className="hambuger"></span>
          </button>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item"><a href="#">Home</a></li>
              <li className="nav__item"><a href="#">Meus Serviços</a></li>
              <li className="nav__item"><a href="#">Sobre mim</a></li>
              <li className="nav__item"><a href="#">Meus trabalhos</a></li>

            </ul>
          </nav>

        </header>
    )
}