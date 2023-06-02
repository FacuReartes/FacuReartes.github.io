import React, { forwardRef } from 'react'
import '../estilos/Skills.css'
import SubTitulo from './SubTitulo'
import Herramienta from './Herramienta'
import { faReact, faPython, faJsSquare, faHtml5, faCss3Alt, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const Skills = forwardRef((props, ref) => {

  const [t, i18n] = useTranslation("global");

  const mySkills = [
    { id:1, icon:faReact },
    { id:2, icon:faJsSquare },
    { id:3, icon:faPython },
    { id:4, icon:faHtml5 },
    { id:5, icon:faCss3Alt },
    { id:6, icon:faGitAlt}
  ];

  const SkillComponent = mySkills.map((i) => (
    <li>
      <Herramienta key={i.id} ig={i.icon}/>
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