import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'
import Img4 from '../assets/img4.png'
import Img5 from '../assets/img5.png'
import Img6 from '../assets/img6.png'
const Work = () => {
  return <div className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.3}} className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-accent'>Mis trabajos más <br></br>recientes</h2>
            <p>Acá puedes ver los proyectos más recientes que he hecho.</p>
            <button className='btn btn-sm mt-10 mb-24'>Ver todos los proyectos</button>
          </div>
          {/* image */}
          <a href='https://crud-seven-rho.vercel.app'><div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="heya1"></img>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>CRUD en NextJS</span></div>
            {/*title*/}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>App para crear tareas en NextJS</span></div>
          </div></a>
          <div><h2 className='h2 leading-tight text-accent'>Mis trabajos <br></br>antiguos</h2>
            <p>Acá puedes ver los diferentes proyectos y trabajos que he realizado.</p></div>
          <a href='https://crud-seven-rho.vercel.app'><div className='group relative overflow-hidden border-2 h-40 border-white/50 rounded-xl'>
            {/* ay chatgpt check over 'ere */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="heya1"></img>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>h</span></div>
            {/*title*/}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>App para crear tareas en NextJS</span></div>
          </div></a>
        </motion.div>
        <motion.div variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.3}}
            className='flex-1 flex flex-col gap-y-10'>
          {/* image */}
          <a href='https://teamtbd-site.vercel.app'><div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="heya2"></img>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>SITIO TEAMTBD</span></div>
            {/*title*/}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Sitio creado para mi empresa TeamTBD</span></div>
          </div></a>
          {/* image  start copying over again on 'ere*/}
          <a href='https://teal-scone-eea30c.netlify.app'><div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="heya3"></img>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>FRASES DE BREAKING BAD</span></div>
            {/*title*/}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Sitio que genera frases de Breaking Bad</span></div>
          </div>
          </a>
          <a href='https://incredible-bubblegum-6b9318.netlify.app' className=''><div className='group relative overflow-hidden border-2 border-white/50 rounded-xl h-40 mt-52'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="heya3"></img>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>SITIO DE PRESUPUESTO</span></div>
            {/*title*/}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>App para manejo de presupuesto</span></div>
          </div>
          </a>

        </motion.div>
      </div>
    </div>
  </div>;
};

export default Work;
