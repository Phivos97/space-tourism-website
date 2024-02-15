import Logo from '../Logo';
import Burger from './Burger';
import MobileMenu from './MobileMenu';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(() => !isOpen);
  }

  return (
    <div className='p-8 flex justify-between items-center'>
      <Logo />
      <Burger toggleMenu={toggleMenu} />
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Nav;
