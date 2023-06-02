import React from 'react'
import '../estilos/Project.css'
import { useTranslation } from 'react-i18next'

function Project(props) {

  const [t, i18n] = useTranslation("global");

  return (
    <div className='project__container'>
      <h1 className='project__title'>{props.titulo}</h1>
      <p className='project__text'>{props.p}</p>
      <a href={props.link} target='_blank' className='project__button button'>{t("project.text")}</a>
    </div>
  )
}

export default Project