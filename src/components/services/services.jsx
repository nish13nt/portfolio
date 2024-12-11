import React from 'react';
import './services.css';
import {BsCheck2All} from 'react-icons/bs';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer?</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Flutter & App Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BsCheck2All className='service__list-icon'/>
              <p>Attention to details.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>Logical approach to work and assignments.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>A keen interest for in-demand technologies.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>Excellent in Problem-solving.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>Ensuring seamless cross-platform performance and user experience.</p>
            </li>
            <li>
              <BsCheck2All className='service__list-icon' />
              <p>Testing and refining app functionality for optimal efficiency.</p>
            </li>
          </ul>

          
        </article>
      </div>
      

    </section>
  )
}

export default Services