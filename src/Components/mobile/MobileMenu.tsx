import Close from './Close';
import { NavLink } from 'react-router-dom';

const MobileMenu = ({ toggleMenu, isOpen }) => {
  return (
    <nav
      className={` ${
        !isOpen && 'z-50 transform-gpu will-change-transform translate-x-full '
      } h-full  transition-transform  duration-700 ease-in-out p-8 flex flex-col fixed top-0 right-0 w-[65vw]  backdrop-blur-2xl bg-slate-300 bg-opacity-5 gap-12`}
    >
      <Close toggleMenu={toggleMenu} />
      <menu>
        <ul className='text-left flex flex-col gap-8 z-1 font-barlow text-white tracking-widest'>
          <li>
            <NavLink onClick={toggleMenu} to='/home'>
              <strong className='mr-3'>00</strong> HOME
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleMenu} to='destination'>
              <strong className='mr-3'>01</strong> DESTINATION
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleMenu} to='crew'>
              <strong className='mr-3'>02</strong> CREW
            </NavLink>
          </li>
          <li>
            <NavLink onClick={toggleMenu} to='technology'>
              <strong className='mr-3'>03</strong> TECHNOLOGY
            </NavLink>
          </li>
        </ul>
      </menu>
    </nav>
  );
};

export default MobileMenu;
