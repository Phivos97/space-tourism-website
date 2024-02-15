const ImageSlider = ({ images }) => {
  const indicatorWidthPercent = images.length > 0 ? 100 / images.length : 100;

  return (
    <div className='w-full'>
      <div className='w-full flex flex-row overflow-x-scroll snap-x snap-mandatory'>
        {images.map((url, index) => {
          console.log(url);
          return (
            <div
              className='flex justify-center w-full flex-shrink-0 snap-start'
              key={index}
              id={url}
            >
              <img className='h-52 w-auto' src={url} />
            </div>
          );
        })}
        <div className='w-full h-0.5 relative bg-gray-300'>
          <div
            className='h-0.5 absolute top-0 left-0 bg-gray-500'
            style={{ width: `${indicatorWidthPercent}%` }}
          />
        </div>
      </div>
      <div className='flex justify-center mt-2'>
        {images.map((_, index) => (
          <button
            key={index}
            // onClick={() => handleImageChange(index)}
            className={`w-4 h-4 mx-1 rounded-full 
                 'bg-blue-500'  bg-gray-300
              `}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

// import React, { useState } from 'react';

// const ImageSlider = ({ images }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const indicatorWidthPercent = images.length > 0 ? 100 / images.length : 100;

//   const handleImageChange = (index) => {
//     setActiveIndex(index);
//   };

//   return (
//     <div className='w-full'>
//       <div className='w-full flex flex-row overflow-x-scroll snap-x snap-mandatory'>
//         {images.map((url, index) => (
//           <div
//             className='flex justify-center w-full flex-shrink-0 snap-start'
//             key={index}
//             id={url}
//             style={{ scrollSnapAlign: 'start' }}
//           >
//             <img className='h-52 w-auto' src={url} />
//           </div>
//         ))}
//       </div>

// <div className='w-full h-0.5 relative bg-gray-300'>
//   {images.map((_, index) => (
//     <div
//       key={index}
//       className='h-0.5 absolute top-0 left-0 bg-gray-500'
//       style={{
//         width: `${indicatorWidthPercent}%`,
//         transform: `translateX(${indicatorWidthPercent * activeIndex}%)`,
//         transition: 'transform 0.3s ease-in-out',
//       }}
//     />
//   ))}
// </div>

// <div className='flex justify-center mt-2'>
//   {images.map((_, index) => (
//     <button
//       key={index}
//       onClick={() => handleImageChange(index)}
//       className={`w-4 h-4 mx-1 rounded-full ${
//         index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'
//       }`}
//     />
//   ))}
// </div>
//     </div>
//   );
// };

// export default ImageSlider;
