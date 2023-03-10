import React from 'react'
import Icon from './Icon'
import '../estilos/Herramienta.css'

function Herramienta(props) {
  return (
    <div className='herramienta__container'>
      <Icon icon={props.ig} css='herramienta__icon'/>
    </div>
  )
}

export default Herramienta