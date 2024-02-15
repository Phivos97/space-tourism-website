import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className=' flex flex-col justify-between h-full items-center '>
      <div className='text-center text-main-violet px-7'>
        <h2 className='  tracking-[5px] break-words font-barlow '>
          SO, YOU WANT TO TRAVEL TO
        </h2>
        <h1 className='text-7xl  text-white font-bellefair pt-5 pb-10'>
          SPACE
        </h1>
        <p className='text-base '>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className='h-full w-full flex justify-center items-center'>
        <button className='font-bellefair text-xl w-36 h-36  rounded-full bg-white'>
          <NavLink to='/destination'>EXPLORE</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Home;
