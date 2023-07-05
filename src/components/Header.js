import React from 'react';
import Logo from '../assets/logo.svg';
const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div>
        <a href='#'>
          <img src={Logo} alt='heya'/>
        </a>
        <button className='btn btn-sm'>WORK IN PROGRESS: Nota: todavía sigo encontrando los archivos</button>
      </div>
    </div>
  </header>;
};

export default Header;
