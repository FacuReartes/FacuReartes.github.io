import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import React, { useState, useEffect } from 'react'
import '../estilos/Title.css'
import Icon from './Icon'

function Title() {

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
        <p className='title__p'>Desarrollador Web Front-end y Estudiante de Ingenieria en Sistemas</p>
      </div>
      {!scrolled && <Icon css='scroll-down arrow-bounce' icon={faChevronDown}/>}
    </div>
  )
}

export default Title