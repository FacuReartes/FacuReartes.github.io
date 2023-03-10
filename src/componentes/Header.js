import { faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import '../estilos/Header.css'
import Icon from './Icon'

function Header(props) {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  const handleAboutClick = () => {
    props.onAboutClick();
  }

  const handleSkillsClick = () => {
    props.onSkillsClick();
  }

  const handleProjectsClick = () => {
    props.onProjectsClick();
  }

  const handleContactClick = () => {
    props.onContactClick();
  }

  return (
    <div className='header'>
      <nav className='header__div'>
        <button className='header__button' onClick={handleClick}>
          <Icon css='hamburger__button' icon={faBars}/>
        </button>
        <ul className={`header__list  ${clicked ? 'active' : ''}`}>
          <li className='header__item' id='button-item'><a></a></li>
          <li className='header__item'><a onClick={handleAboutClick}>Acerca de mi</a></li>
          <li className='header__item'><a onClick={handleSkillsClick}>Herramientas</a></li>
          <li className='header__item'><a onClick={handleProjectsClick}>Proyectos</a></li>
          <li className='header__item'><a onClick={handleContactClick}>Contacto</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header