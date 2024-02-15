import burger from '../../assets/shared/icon-hamburger.svg';

const Burger = ({ toggleMenu }) => {
  return (
    <button onClick={toggleMenu} className='flex'>
      <img src={burger} className=' h-5 w-auto self-center' alt='Logo' />;
    </button>
  );
};

export default Burger;
