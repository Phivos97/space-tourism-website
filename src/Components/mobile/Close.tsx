import close from '../../assets/shared/icon-close.svg';

const Close = ({ toggleMenu }) => {
  return (
    <button className='flex items-center self-end ' onClick={toggleMenu}>
      <img
        onClick={toggleMenu}
        src={close}
        className='h-5 w-auto '
        alt='Logo'
      />
    </button>
  );
};

export default Close;
