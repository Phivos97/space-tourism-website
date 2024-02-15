import { useState } from 'react';

const Technology = ({ technology }) => {
  const [tech, setTech] = useState(technology[0]);

  const handleButtonClick = (index) => {
    console.log('Clicked index:', index);
    console.log('Crew member:', technology[index]);
    setTech(() => technology[index]);
  };
  console.log(tech);
  return (
    <div className='child:animate-fade flex flex-col items-center'>
      <h1 className='text-white font-barlow tracking-[2.7px]'>
        <span className='opacity-30 mr-4'>03</span> SPACE LAUNCH 101
      </h1>
      {/* <div className='mt-7 w-full max-w-xl mx-auto'>
        <ImageSlider images={images} />
      </div> */}
      <div className='pt-7'>
        {tech && (
          <img
            key={tech.images.landscape}
            className='animate-fade'
            src={`src/${tech.images.landscape}`}
          />
        )}
      </div>
      <section className=' flex flex-col items-center w-full px-7 pb-10'>
        {/* <hr className='border-[#383B4B] w-full  border-[0.1rem] rounded-full' /> */}
        <div className='space-x-6 mt-10'>
          {technology.map((_, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`rounded-full bg-white w-10 h-10  transition-all duration-200  border bg-opacity-0 border-white ${
                index === technology.indexOf(tech)
                  ? 'bg-opacity-100 text-black'
                  : 'text-white'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className='text-center space-y-2 mt-8'>
          <h2 className='text-main-violet uppercase  font-barlow'>
            THE TERMINOLOGY...
          </h2>
          <p
            key={tech.name}
            className='animate-fade text-white text-2xl uppercase  font-bellefair'
          >
            {tech.name}
          </p>
        </div>
        <p
          key={tech.description}
          className='animate-fade mt-4 leading-7 font-barlow text-main-violet'
        >
          {tech.description}
        </p>
      </section>
      <div>
        {/* <ul className='flex font-barlow text-sm  text-main-violet tracking-[2.36px] gap-6'>
          {crew.map((crew, index) => (
            <li onClick={() => destinationChange(destination.name)} key={index}>
              {destination.name.toUpperCase()}
            </li>
          ))}
        </ul> */}
      </div>
      <section className='flex flex-col items-center px-7'>
        <h2 className='text-white text-6xl font-bellefair mt-5'>
          {/* {crew.name.toUpperCase()} */}
        </h2>
        <p className='text-main-violet font-barlow leading-relaxed text-center '>
          {tech.bio}
        </p>
        {/* <hr className='border-[#383B4B] w-full my-7 border-[0.1rem] rounded-full' />
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
        </dl> */}
      </section>
    </div>
  );
};

export default Technology;

// 01 Pick your destination

// Moon
// Mars
// Europa
// Titan
