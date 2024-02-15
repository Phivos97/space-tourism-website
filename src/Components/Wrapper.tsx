import { useState } from 'react';
import Home from '../pages/Home';
import Destination from '../pages/Destination';

const Wrapper = ({ children }) => {
  return (
    <div className='h-[calc(100vh-6.5rem)] child:animate-fade'>{children}</div>
  );
};

export default Wrapper;
