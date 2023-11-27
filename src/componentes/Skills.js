import React, { forwardRef } from 'react'
import '../estilos/Skills.css'
import SubTitulo from './SubTitulo'
import Herramienta from './Herramienta'
import { faReact, faPython, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import node from '../imagenes/bxl-nodejs.svg'
import spring from '../imagenes/bxl-spring-boot.svg'
import tailwind from '../imagenes/bxl-tailwind-css.svg'
import typescript from '../imagenes/bxl-typescript.svg'

const Skills = forwardRef((props, ref) => {

  const [t, i18n] = useTranslation("global");

  const mySkills = [
    { id:1, icon:faReact},
    { id:2, svg:typescript},
    { id:3, svg:tailwind},
    { id:4, svg:node},
    { id:5, icon:faGitAlt},
    { id:6, icon:faPython},
    { id:7, svg:spring }
  ];

  const SkillComponent = mySkills.map((i) => (
    <li>
      <Herramienta key={i.id} ig={i.icon} svg={i.svg}/>
    </li>
  ));

  return (
    <div ref={ref}>
      <SubTitulo titulo={t("skills.subtitle")}/>
      <ul className='skills__container'>
        {SkillComponent}
      </ul>
    </div>
  )
})

export default Skills