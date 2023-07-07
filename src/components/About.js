import { motion } from 'framer-motion';
import React from 'react';
import CountUp from 'react-countup';
import { fadeIn } from '../variants';
import { useInView } from 'react-intersection-observer';
import avatarImage from '../assets/about.png';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section id='about' ref={ref} className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          <motion.div variants={fadeIn('right', 0.5)}
            initial='hidden'
            animate={inView ? 'show' : 'hidden'}
            viewport={{once:false, amount:0.3}}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
            style={{ backgroundImage: `url(${avatarImage})` }}
          ></motion.div>
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            animate={inView ? 'show' : 'hidden'}
            viewport={{once:false, amount:0.3}}
            className='flex-1 '
          >
            <h2 className='text-accent text-3xl mb-4'>Sobre mí</h2>
            <h3 className='text-xl mb-6'>Soy un desarrollador freelancer con 2 años de experiencia.</h3>
            <p className='text-lg mb-8'>
              Me encanta descubrir cosas nuevas, probarlas y si es posible, mejorarlas.
            </p>
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div className='flex items-center gap-1'>
                <div className='text-4xl font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={2} duration={5} /> : null}+
                </div><br></br>
                <div className='font-primary text-base tracking-[2px]'>años de <br/>Experiencia</div>
              </div>
              <div className='flex items-center gap-1'>
                <div className='text-4xl font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={10} duration={5} /> : null}+
                </div> <br></br>
                <div className='font-primary text-base tracking-[2px]'> <br></br> Proyectos Realizados</div>
              </div>
              <div className='flex items-center gap-1'>
                <div className='text-4xl font-tertiary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={30} duration={5} /> : null}+
                </div> <br></br>
                <div className='font-primary text-base tracking-[2px]'>Clientes <br></br> Satisfechos</div>
              </div>
            </div>
            <div className='my-4 flex gap-x-14 items-center'>
              <button className='btn btn-lg'>Contáctame</button>
              <a href='#' className='text-gradient btn-link'>Mi Portafolio</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
