import React from 'react';
import avatarImage from '../assets/avatar.svg';
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants.js';

const Banner = () => {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div>
          <div>
            <h1>
              Johan <span>Portilla Aguirre</span>
            </h1>
            <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>Soy un </span>
              <TypeAnimation sequence={[
                'Desarrollador',
                1000,
                'Gamer',
                1000,
                'Estudiante',
                1000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}/>
            </div>
            <p>
              Soy un desarrollador que vive en Piedecuesta, Santander, Colombia. Me gusta investigar y aprender cosas que nunca he pensado hacer.
            </p>
            <div>
              <button className='btn btn-lg'>Contáctame</button>
              <a href='#' className='text-gradient btn-link'>Mi Portafolio</a>
            </div>
          </div>
          <div>
            <img src={avatarImage} alt="Avatar" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
