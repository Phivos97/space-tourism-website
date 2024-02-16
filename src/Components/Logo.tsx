import { NavLink } from 'react-router-dom';
import LogoSvg from '../assets/shared/logo.svg';

const Logo = () => {
  return (
    <NavLink to={'/home'}>
      <img src={LogoSvg} className='w-10 h-auto' alt='Logo' />
    </NavLink>
  );
};

export default Logo;
