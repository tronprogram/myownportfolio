import React from 'react';
// icons time
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs'
import {Link} from 'react-scroll'
const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
      <div className='w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2x1 text-white/50 items-center'>
        <Link to='home' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' smooth={true} spy={true}>
        <BiHomeAlt/>
        </Link>
        <Link to='about' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' smooth={true} spy={true}>
        <BiUser/>
        </Link>
        <Link to='services' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' smooth={true} spy={true}>
        <BsClipboardData/>
        </Link>
        <Link to='work' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' smooth={true} spy={true}>
        <BsBriefcase/>
        </Link>
        <Link to='contact' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center' smooth={true} spy={true}>
        <BsChatSquare/>
        </Link>
      </div>
    </div>
  </nav>;
};

export default Nav;
