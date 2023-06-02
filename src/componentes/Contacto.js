import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import React, { forwardRef } from 'react'
import '../estilos/Contacto.css'
import Icon from './Icon'
import { useTranslation } from 'react-i18next'

const Contacto = forwardRef((props, ref) => {

  const [t, i18n] = useTranslation("global");

  return (
    <div className='contacto__container' ref={ref}>
      <div className='contacto__iconos'>
        <a href='https://github.com/FacuReartes' target='_blank'><Icon css='icon' icon={faGithub}/></a>
        <a href='https://www.linkedin.com/in/facundo-reartes-63168423a/' target='_blank'><Icon css='icon' icon={faLinkedinIn}/></a>
        <a href='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGLdbTbXhRNdBFnGJJsNGTcKDlMMshpBbClmkrQDTqdGPNDVfcScRNbqznZKgwwrwqbCzdB' target='_blank'><Icon css='icon' icon={faEnvelope}/></a>
      </div>
      <p className='contacto__texto'>{t("contacto.text")} Facundo Reartes</p>
    </div>
  )
})

export default Contacto