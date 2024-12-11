import React from 'react'
import "./about.css";
import Me from '../../assets/me-about.jpg';
import {BsAward} from 'react-icons/bs';
import {AiOutlineFolderOpen} from 'react-icons/ai';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        
        <div className='about__me'>
          <div className='about__me-image'>
            <img src= {Me} alt='about' />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about__card'>
              <AiOutlineFolderOpen className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
          I am seeking a job to build my career in the software industry. As a third-year Computer Science & Business Systems student, 
          I am a keen learner with hands-on experience in Flutter & Dart, C/C++, and Python programming. 
          I also have a basic understanding of database management and DevOps. 
          I am committed to delivering my best performance in every endeavor I undertake.

          </p>

          <a href='#contact' className='btn btn-primary'>Contact Me</a>

        </div>

      </div>

    </section>
  )
}

export default About