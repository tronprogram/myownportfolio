import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'
const Work = () => {
  return <div className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg-flex-row gap-x-10'>
        <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          {/* text */}
          <div>
            <h2 className='h2 leading-tight text-accent'>Mis trabajos más <br></br>recientes</h2>
            <p>Acá puedes ver los diferentes proyectos y trabajos que he realizado.</p>
            <button className='btn btn-sm'>Ver todos los proyectos</button>
          </div>
          {/* image */}
          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            {/* overlay */}
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
            {/* img */}
            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="heya1"></img>
            {/* pretitle */}
            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>PLACEHOL1</span></div>
            {/*title*/}
            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>projtitle</span></div>
          </div>
        </div>
        <div>2</div>
      </div>
    </div>
  </div>;
};

export default Work;
