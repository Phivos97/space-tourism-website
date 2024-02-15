import { useState } from 'react';
import FlickitySlider from './FlickitySlider';
import ImageSlider from '../Components/common/ImageSlider';

const Crew = ({ crew }) => {
  const [crewMember, setCrewMember] = useState(crew[0]);
  // console.log(crewMember);
  // console.log(crew.map((cr) => cr.images.webp));
  // const images = crew.map((cr) => 'src/' + cr.images.webp);
  // console.log(crewMember.images.webp);
  // function destinationChange(selectedDestination) {
  //   setDestination(() =>
  //     destinations.find((dest) => dest.name === selectedDestination)
  //   );
  //   console.log(destination);
  // }

  const handleButtonClick = (index) => {
    console.log('Clicked index:', index);
    console.log('Crew member:', crew[index]);
    setCrewMember(() => crew[index]);
  };
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-white font-barlow tracking-[2.7px]'>
        <span className='opacity-30 mr-4'>02</span> MEET YOUR CREW
      </h1>
      {/* <div className='mt-7 w-full max-w-xl mx-auto'>
        <ImageSlider images={images} />
      </div> */}
      <div className='pt-7'>
        {crewMember && (
          <img className=' w-auto h-64' src={`src/${crewMember.images.webp}`} />
        )}
      </div>
      <section className=' flex flex-col items-center w-full px-7 pb-10'>
        <hr className='border-[#383B4B] w-full  border-[0.1rem] rounded-full' />
        <div className='space-x-6 mt-3'>
          {crew.map((_, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`rounded-full bg-slate-100 w-3 h-3 opacity-10 transition-all duration-200 ${
                index === crew.indexOf(crewMember) && 'opacity-100'
              }`}
            />
          ))}
        </div>
        <div className='text-center mt-8'>
          <h2 className='text-white uppercase opacity-50 font-bellefair'>
            {crewMember.role}
          </h2>
          <p className='text-white text-2xl uppercase  font-bellefair'>
            {crewMember.name}
          </p>
        </div>
        <p className='mt-4 leading-7 font-barlow text-main-violet'>
          {crewMember.bio}
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
          {crew.bio}
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

export default Crew;

// 01 Pick your destination

// Moon
// Mars
// Europa
// Titan
