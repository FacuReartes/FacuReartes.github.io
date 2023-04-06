import React, { forwardRef } from 'react'
import Project from './Project'
import SubTitulo from './SubTitulo'
import '../estilos/Projectos.css'

const Proyectos = forwardRef((props, ref) => {

  const myProjects = [
    { id:1, titulo:'Noise & Chill', p:'Generador de Sonidos Relajantes hecho con React', link: 'https://noise-chill.vercel.app/'},
    { id:2, titulo:'Conecta Cuatro', p:'El juego Conecta Cuatro hecho con Javascript', link: 'https://facureartes.github.io/connect-four/'},
    { id:3, titulo:'Email Signature', p:'Plantilla de Email. Responsive, estatico. Hecho solo con CSS', link:'https://facureartes.github.io/email-signature/'},
    { id:4, titulo:'Wordle Clone', p:'Clon de el reconocido juego Wordle hecho usando React', link:'https://facureartes.github.io/portfolio/'}
  ];

  const ProjectComponent = myProjects.map((i) => (
      <Project id={i.id} titulo={i.titulo} p={i.p} link={i.link}/>
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