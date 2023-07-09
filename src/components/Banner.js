import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants.js';
import { Link } from 'react-scroll';
import avatarImage from '../assets/avatar.svg';
import { FaGithub, FaWhatsapp, FaDiscord } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
  return (
    <section className="min-h-[65vh] lg:min-h-[78vh] flex items-center" id="home">
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}} className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
              JOHAN <span>PORTILLA</span>
            </motion.h1>
            <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}}  className='mb-6 text-[36px] lg:text-[60px] font-secondary font semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>Soy un </span>
              <TypeAnimation sequence={[
                'Desarrollador',
                1000,
                'Diseñador',
                1000,
                'Estudiante',
                1000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}/>
            </motion.div>
            <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false, amount:0.7}}  className='mb-8 max-w-lg mx-auto lg:mx-0 '>
              Soy un desarrollador que vive en Piedecuesta, Santander, Colombia. Me gusta investigar y aprender cosas que nunca he pensado hacer.
            </motion.p>
            <div className='flex max-w-max gap-x-12 items-center mb-12 mx-auto lg:mx-0'>
              <Link to="contact" smooth={true} duration={800}>
                <button className='btn btn-lg'>Contáctame</button>
              </Link>
              <Link to="work" smooth={true} duration={800}>
                <a href='#' className='text-gradient btn-link'>Mi Portafolio</a>
              </Link>
            </div>
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href="discord.gg/EaWYdSht">
                <FaDiscord/>
              </a>
              <a href="https://api.whatsapp.com/send?phone=573204295175&text=🦊">
                <FaWhatsapp/>
              </a>
              <a href="https://github.com/tronprogram">
                <FaGithub/>
              </a>
            </div>
          </div>
          <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[428px]'>
            <img src={avatarImage} alt="Avatar" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
