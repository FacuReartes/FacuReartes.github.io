import React, { forwardRef } from 'react'
import Project from './Project'
import SubTitulo from './SubTitulo'
import '../estilos/Projectos.css'

const Proyectos = forwardRef((props, ref) => {

  const myProjects = [
    { id:1, titulo:'Wordle Clone', p:'Clon de el reconocido juego Wordle hecho usando React' },
    { id:2, titulo:'Conecta Cuatro', p:'El juego Conecta Cuatro hecho con Javascript'},
    { id:3, titulo:'Bar Website', p:'Simple Website usando HTML y CSS'}
  ];

  const ProjectComponent = myProjects.map((i) => (
      <Project id={i.id} titulo={i.titulo} p={i.p}/>
  ))

  return (
    <div ref={ref}>
      <SubTitulo titulo='Mis Proyectos'/>
      <div className='proyectos__container'>
        {ProjectComponent}
      </div>
    </div>
  )
})

export default Proyectos