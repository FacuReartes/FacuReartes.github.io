import React, { forwardRef } from 'react'
import '../estilos/About.css'
import SubTitulo from './SubTitulo'
import img from '../imagenes/avatar.svg'
import { useTranslation } from 'react-i18next'

const About = forwardRef((props, ref) => {

  const [t, i18n] = useTranslation("global");

  return(
    <div ref={ref}>
    <SubTitulo titulo={t("about.subtitle")}/>
    <div className='about__image'>
      <img src={img} alt='pfp-image'/>
    </div>
    <div className='about__paragraph'>
      <p>{t("about.text1")}</p>
      <p>{t("about.text2")}</p>
      <p>{t("about.text3")}</p>
    </div>
  </div>
  )
})

export default About