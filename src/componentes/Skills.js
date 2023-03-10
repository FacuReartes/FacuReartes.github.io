import React, { forwardRef } from 'react'
import '../estilos/Skills.css'
import SubTitulo from './SubTitulo'
import Herramienta from './Herramienta'
import { faReact, faPython, faJsSquare, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';

const Skills = forwardRef((props, ref) => {

  const mySkills = [
    { id:1, icon:faReact },
    { id:2, icon:faJsSquare },
    { id:3, icon:faPython },
    { id:4, icon:faHtml5 },
    { id:5, icon:faCss3Alt },
  ];

  const SkillComponent = mySkills.map((i) => (
    <li>
      <Herramienta key={i.id} ig={i.icon}/>
    </li>
  ));

  return (
    <div ref={ref}>
      <SubTitulo titulo='Mis Herramientas'/>
      <ul className='skills__container'>
        {SkillComponent}
      </ul>
    </div>
  )
})

export default Skills