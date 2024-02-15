import { useEffect, useState } from 'react';

const Destination = ({ destinations }) => {
  const [destination, setDestination] = useState(destinations[0]);
  const [active, setActive] = useState(null);

  function destinationChange(selectedDestination) {
    setDestination(() =>
      destinations.find((dest) => dest.name === selectedDestination)
    );
    console.log(destination);
  }
  console.log('render');
  return (
    <div className=' flex flex-col items-center'>
      <h1 className='text-white font-barlow tracking-[2.7px]'>
        <span className='opacity-30 mr-4'>01</span> PICK YOUR DESTINATION
      </h1>
      <img
        key={destination.images.webp}
        className='animate-fade  w-44 h-auto pt-9 pb-7'
        src={`src/${destination.images.webp}`}
      />
      <div>
        <ul className='transition-all duration-1000 flex font-barlow text-sm  text-main-violet tracking-[2.36px] gap-6'>
          {destinations.map((dest, index) => (
            <li
              className={`relative`}
              onClick={() => destinationChange(dest.name)}
              key={dest.name}
            >
              {dest.name.toUpperCase()}
              {dest.name === destination.name && (
                <div className='absolute w-full bg-white h-[3px] animate-slideIn' />
              )}
            </li>
          ))}
        </ul>
      </div>
      <section className='child:animate-fade flex flex-col items-center px-7'>
        <h2
          key={destination.name}
          className='text-white text-6xl font-bellefair mt-5'
        >
          {destination.name.toUpperCase()}
        </h2>
        <p
          key={destination.description}
          className='text-main-violet font-barlow leading-relaxed text-center '
        >
          {destination.description}
        </p>
        <hr className='border-[#383B4B] w-full my-7 border-[0.1rem] rounded-full' />
        <dl className='flex flex-col gap-8 text-center pb-14'>
          <div className='child:animate-fade'>
            <p className=' text-main-violet font-barlow'>AVG. DISTANCE</p>
            <p
              key={destination.distance}
              className='text-white text-3xl font-bellefair'
            >
              {destination.distance.toUpperCase()}
            </p>
          </div>
          <div className='child:animate-fade'>
            <p className='text-main-violet font-barlow'>EST. TRAVEL TIME</p>
            <p
              key={destination.travel}
              className='text-white text-3xl font-bellefair'
            >
              {destination.travel.toUpperCase()}
            </p>
          </div>
        </dl>
      </section>
    </div>
  );
};

export default Destination;

// 01 Pick your destination

// Moon
// Mars
// Europa
// Titan
