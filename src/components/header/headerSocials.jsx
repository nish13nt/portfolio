import React from 'react';
import {BsLinkedin, BsGithub, BsInstagram} from 'react-icons/bs';

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://github.com/nish13nt' target='_blank' rel="noreferrer"><BsGithub /></a>
        <a href='https://www.linkedin.com/in/nishant-survase-771884251/' target='_blank' rel="noreferrer"><BsLinkedin /></a>
        <a href='https://www.instagram.com/nish13nt/' target='_blank' rel="noreferrer"><BsInstagram /></a>
    </div>
  )
}

export default headerSocials;