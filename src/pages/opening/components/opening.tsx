import React from 'react'; 

const Opening = () => { 
  return (
    <div className = 'px-10 bg-gradient-to-r flex flex-wrap lg:bg-gradient-to-r from-cyan-700 content-center justify-center min-h-screen w-full lg:pt-10 sm:py-10'>
      <div className='bg-white sm:max-w-md px-12 py-14 w-auto lg:bg-white from-cyan-700 shadow-xl rounded-xl'> 
        <div className=''>
          <h1 className='font-bold pb-2'>Yesterday</h1> 
          
          <p>Bagaimana kategorisasi tingkat keamanan siber?</p>
          <p>Apa yang dimaksud dengan keamanan siber?</p>
          
          
        </div>
        <div className='py-5'>     
          <h1 className='font-bold pb-2'>Previous 7 days</h1>
          <p>Apa yang dimaksud dengan laporan insiden siber?</p>
          <p>Apa yang dilakukan Bank untuk menjaga ketahanan siber?</p>
        </div>
        
      <div className='flex flex-col items-center justify-center '>
          <h1 className='text-l font-bold pt-3 pb-6'>Do you want to create a new chat? </h1>
          <button className=' right-0 mt-2 w-40 text-white bg-primary-best hover:bg-primary-team focus:ring-4 
          focus:outline-none focus:ring-primary-300 font-medium text-sm  rounded-3xl py-1 text-center 
          dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>Yes</button> 
      </div>
      
      </div>
      
    </div>
  );
};

export default Opening;