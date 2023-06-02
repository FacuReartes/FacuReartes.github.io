import { faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import '../estilos/Header.css'
import Icon from './Icon'
import { useTranslation } from 'react-i18next'

function Header(props) {

  const [t, i18n] = useTranslation("global");

  const [clicked, setClicked] = useState(false)

  const [active, setActive] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }

  const handleEsClick = () => {
    setActive(true);
    i18n.changeLanguage("es");
  }

  const handleEnClick = () => {
    setActive(false);
    i18n.changeLanguage("en");
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
        <button className={`translate__button es ${active ? 't_active' : ''}`} onClick={handleEsClick}>es</button>
        <button className={`translate__button en ${active ? '' : 't_active'}`} onClick={handleEnClick}>en</button>
        <button className='header__button' onClick={handleClick}>
          <Icon css='hamburger__button' icon={faBars}/>
        </button>
        <ul className={`header__list  ${clicked ? 'active' : ''}`}>
          <li className='header__item' id='button-item'><a></a></li>
          <li className='header__item'><a onClick={handleAboutClick}>{t("header.about")}</a></li>
          <li className='header__item'><a onClick={handleSkillsClick}>{t("header.tools")}</a></li>
          <li className='header__item'><a onClick={handleProjectsClick}>{t("header.projects")}</a></li>
          <li className='header__item'><a onClick={handleContactClick}>{t("header.contact")}</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header