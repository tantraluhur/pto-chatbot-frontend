import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { CarouselSection, LoginForm } from '@/pages/login/components';
import React from 'react';
import { useMediaQuery } from '@mui/material';

const LoginSection = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 767px)');

  // Directly determine isMobile without setting state
  const isMobile = !isDesktop && !isTablet;

  return (

    <div className=' flex flex-wrap lg:bg-gradient-to-r from-cyan-700 content-center justify-center min-h-screen w-full pt-10 sm:py-10'>
      <div className="bg-white rounded-xl md:shadow-lg w-4/5 h-full h-full ">
        <div className=" grid grid-cols-1 gap-4 ">
      {isMobile ? (
        <>
          
          <div className="flex flex-col h-full w-full rounded-xl">
          <div className='basis-4/12 '>
            <CarouselSection />
          </div>
          <div className='basis-8/12'>
            <LoginForm />

          </div>
        </div>
        </>
      ) : (
        <div className="flex h-full w-full">
          <div className='basis-3/5 '>
            <CarouselSection />
          </div>
          <div className='basis-2/5'>
            <LoginForm />

          </div>
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default LoginSection;
