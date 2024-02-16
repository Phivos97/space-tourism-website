import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ children, toggleMenu, isOpen }) => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    const curName = location.pathname.slice(1);
    setCurrentPage(curName);
    console.log('Changed:', curName);
  }, [location]);

  return (
    <>
      {currentPage.length > 1 && (
        <div
          onClick={isOpen && toggleMenu}
          className={`bg-${currentPage}-mobile h-screen bg-cover overflow-scroll`}
        >
          {/* <h1 className='text-4xl text-black'>{currentPage}</h1> */}
          {children}
        </div>
      )}
    </>
  );
};

export default Layout;
