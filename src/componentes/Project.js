import React from 'react'
import '../estilos/Project.css'

function Project(props) {
  return (
    <div className='project__container'>
      <h1 className='project__title'>{props.titulo}</h1>
      <p className='project__text'>{props.p}</p>
      <button className='project__button'>Abrir Proyecto</button>
    </div>
  )
}

export default Project