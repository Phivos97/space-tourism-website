import { useState } from 'react';

const Destination = ({ destinations }) => {
  const [destination, setDestination] = useState(destinations[0]);

  function destinationChange(selectedDestination) {
    setDestination(() =>
      destinations.find((dest) => dest.name === selectedDestination)
    );
    console.log(destination);
  }
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-white font-barlow tracking-[2.7px]'>
        <span className='opacity-30 mr-4'>01</span> PICK YOUR DESTINATION
      </h1>
      <img
        className='w-44 h-auto pt-9 pb-7'
        src={`src/${destination.images.webp}`}
      />
      <div>
        <ul className='flex font-barlow text-sm  text-main-violet tracking-[2.36px] gap-6'>
          {destinations.map((destination, index) => (
            <li onClick={() => destinationChange(destination.name)} key={index}>
              {destination.name.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
      <section className='flex flex-col items-center px-7'>
        <h2 className='text-white text-6xl font-bellefair mt-5'>
          {destination.name.toUpperCase()}
        </h2>
        <p className='text-main-violet font-barlow leading-relaxed text-center '>
          {destination.description}
        </p>
        <hr className='border-[#383B4B] w-full my-7 border-[0.1rem] rounded-full' />
        <dl className='flex flex-col gap-8 text-center pb-14'>
          <div>
            <p className=' text-main-violet font-barlow'>AVG. DISTANCE</p>
            <p className='text-white text-3xl font-bellefair'>
              {destination.distance.toUpperCase()}
            </p>
          </div>
          <div>
            <p className='text-main-violet font-barlow'>EST. TRAVEL TIME</p>
            <p className='text-white text-3xl font-bellefair'>
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
