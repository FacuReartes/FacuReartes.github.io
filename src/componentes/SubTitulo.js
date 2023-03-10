import React from 'react'
import '../estilos/SubTitulo.css'

function SubTitulo(props) {
  return (
    <div className='container__titulo'>
      <h1>{props.titulo}</h1>
    </div>
  )
}

export default SubTitulo