import React from 'react';
import {BsArrowUpRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
// servdata
const services=[
  {
    name:'Diseño de UI/UX',
    description:'Puedo realizar diseños llamativos y modernos para sitios con React y NextJS.',
    link:'Conoce más'
  },
  {
    name:'Desarrollo',
    description:'Tengo habilidades para realizar aplicaciones con JavaScript y C#.',
    link:'Conoce más'
  },
  {
    name:'Modelaje 3D',
    description:'Me desarrollo bastante bien en el ámbito del diseño y modelaje 3D con Blender.',
    link:'Conoce más'
  }
]
const Services = () => {
  return <section className='section' id='services'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
    {/* text and img*/}
    <motion.div variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.3}} className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
      <h2 className='h2 text-accent mb-6'>Lo que hago.</h2>
      <h3 className='h3 max-w-[455px] mb-16'>Soy un desarrollador freelancer con más 2 años de experiencia.</h3>
      <button className='btn btn-sm'>Mira mis proyectos</button>
    </motion.div>
    
    <div>{/* services */}</div>
    <motion.div variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.3}} className='flex-1'>
      {/* serviceslist */}
      <div>
        {services.map((service, index)=>{
          // otra vez destructuring
          const {name, description, link} = service;
          return (
          <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
            <div className='max-w-[476px]'>
              <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
              <p className='font-secondary leading-tight'>{description}</p>
            </div>
            <div className='flex flex-col flex-1 items-end'><a href='#' className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
              <BsArrowUpRight/>
              </a>
              <a href='#' className='text-gradient text-sm'>{link}</a></div>
          </div>
          );
          
        })}
      </div>
      </motion.div>    
      </div>
    </div>
  </section>;
};

export default Services;
