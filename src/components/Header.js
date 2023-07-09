import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <Logo alt='heya' />
          </a>
          <button className='btn btn-sm'>
            <Link to="contact" smooth={true} duration={800}>
              Trabaja conmigo!
            </Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
