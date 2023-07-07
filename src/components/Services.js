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
    <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
      <h2 className='h2 text-accent mb-6'>Lo que hago.</h2>
      <h3 className='h3 max-w-[455px] mb-16'>Soy un desarrollador freelancer con 2 años de experiencia.</h3>
      <button className='btn btn-sm'>Mira mis proyectos</button>
    </div>
    
    <div>{/* services */}</div>
    <div className='flex-1'>
      {/* serviceslist */}
      <div>
        {services.map((service, index)=>{
          // otra vez destructuring
          const {name, description, link} = service;
          return (
          <div key={index}>
            <div className='max-w-[476px]'>
              <h4>{name}</h4>
              <p>{description}</p>
            </div>
            <div>links</div>
          </div>
          );
          
        })}
      </div>
      </div>    
      </div>
    </div>
  </section>;
};

export default Services;
