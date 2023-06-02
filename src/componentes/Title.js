import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react'
import '../estilos/Title.css'
import Icon from './Icon'
import { useTranslation } from 'react-i18next'

function Title() {

  const [t, i18n] = useTranslation("global");

  const [scrolled, setScrolled] = useState(false);

  useEffect (() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);


  return (
    <div className='title'>
      <div className='title__container'>
        <h1 className='title__h1'>Reartes Facundo</h1>
        <p className='title__p'>{t("title.text")}</p>
      </div>
      {!scrolled && <Icon css='scroll-down arrow-bounce' icon={faChevronDown}/>}
    </div>
  )
}

export default Title