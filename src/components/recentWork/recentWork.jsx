import React from 'react';
import "./recentWork.css";
import IMG1 from '../../assets/project1.webp';
import IMG2 from '../../assets/project2.webp';
import IMG3 from '../../assets/project3.webp';

const projects = [
  {
    id: 1,
    image: IMG1,
    title: 'Sneakers Shopping App',
    github: 'https://github.com/nish13nt/Sneakers-Shopping-App',
    //demo: 'https://miniontranslatesite.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'E-Commerce App',
    github: 'https://github.com/nish13nt/e_commerce_app',
    //demo: 'https://emoji-interpreter-site.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Weather App',
    github: 'https://github.com/nish13nt/Weather-App',
    //demo: 'https://exceptional-books-site.netlify.app/'
  }
];

const RecentWork = () => {
  return (
    <section id='recentWork'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container recentWork__container'>
        
        {
          projects.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='recentWork__item'>
                <div className='recentWork__item-image'>
                  <img src={image} alt='title'/>
                </div>
                <h3>{title}</h3>
                <div className='recentWork__item-cta'>
                  <a href={github} className='btn' target='_blank' rel="noreferrer">GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default RecentWork