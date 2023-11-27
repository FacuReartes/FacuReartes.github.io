import React, { forwardRef } from 'react'
import Project from './Project'
import SubTitulo from './SubTitulo'
import '../estilos/Projectos.css'
import { useTranslation } from 'react-i18next'

const Proyectos = forwardRef((props, ref) => {

  const [t, i18n] = useTranslation("global");

  const myProjects = [
    { id:1, titulo:t("proyectos.p1-title"), p:t("proyectos.p1-text"), link: 'https://noise-chill.vercel.app/'},
    { id:4, titulo:t("proyectos.p4-title"), p:t("proyectos.p4-text"), link:'https://user-authenticator-topaz.vercel.app/home'},
    { id:2, titulo:t("proyectos.p2-title"), p:t("proyectos.p2-text"), link: 'https://shoe-store-swart.vercel.app/'},
    { id:3, titulo:t("proyectos.p3-title"), p:t("proyectos.p3-text"), link: 'https://facureartes.github.io/connect-four/'},
    { id:5, titulo:t("proyectos.p5-title"), p:t("proyectos.p5-text"), link:'https://facureartes.github.io/portfolio/'}
  ];

  const ProjectComponent = myProjects.map((i) => (
      <Project id={i.id} titulo={i.titulo} p={i.p} link={i.link}/>
  ))

  return (
    <div ref={ref}>
      <SubTitulo titulo={t("proyectos.subtitle")}/>
      <div className='proyectos__container'>
        {ProjectComponent}
      </div>
    </div>
  )
})

export default Proyectos