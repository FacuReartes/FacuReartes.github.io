import React, { forwardRef } from 'react'
import '../estilos/About.css'
import SubTitulo from './SubTitulo'
import img from '../imagenes/avatar.svg'

const About = forwardRef((props, ref) => {
  return(
    <div ref={ref}>
    <SubTitulo titulo='Acerca de Mi'/>
    <div className='about__image'>
      <img src={img} alt='pfp-image'/>
    </div>
    <div className='about__paragraph'>
      <p>A fines de 2019 decidi aprender por mi cuenta programacion con Python mientras cursaba el secundario y me di cuenta que queria seguir aprendiendo programacion. Por lo que en 2020 me gradue y decidi estudiar Ingenieria en Sistemas de Informacion.</p>
      <p>A mediados de 2021 comence a interesarme por el desarrollo web y empece aprendiendo por mi cuenta HTML y CSS hasta llegar a React. Actualmente sigo aprendiendo mas sobre el desarrollo web mientras continuo con mi carrera de Universidad.</p>
      <p>Soy autodidacta, apasionado por la tecnologia. Siempre dispuesto a tomar nuevos desafios.</p>
    </div>
  </div>
  )
})

export default About