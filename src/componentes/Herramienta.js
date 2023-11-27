import React from 'react'
import Icon from './Icon'
import '../estilos/Herramienta.css'

function Herramienta(props) {

  return (
    <div className='herramienta__container'>
      {props.ig ?
       <Icon icon={props.ig} css='herramienta__icon'/> 
       : 
       <img src={props.svg} alt='mySvgImage' className='herramienta__icon'/>}
    </div>
  )
}

export default Herramienta