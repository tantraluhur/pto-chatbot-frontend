import { CarouselSection, LoginForm } from '@/components/login/components';
import React from 'react';
import { useMediaQuery } from '@mui/material';
import { EmblaOptionsType } from 'embla-carousel'

const LoginSection = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 640px) and (max-width: 767px)');

  const items = [
    "/images/login-icon1.png",
    "/images/login-icon2.png",
    "/images/login-icon3.png"
  ]
  const OPTIONS: EmblaOptionsType = {loop:true}


  // Directly determine isMobile without setting state
  const isMobile = !isDesktop && !isTablet;

  return (
  <div className='gradient flex flex-wrap content-center justify-center min-h-screen w-full pt-10 sm:py-10'>
    <div className="bg-white rounded-xl md:shadow-lg w-4/6 h-full">
        <div className=" grid grid-cols-1 gap-4 h-full">
          {isMobile ? (
            <>
              <div className="flex flex-col h-full w-full rounded-xl">
                <div className='basis-4/12 '>
                  <CarouselSection 
                  slides={items}
                  options={OPTIONS}
                  />
                </div>
                <div className='basis-8/12'>
                  <LoginForm />
                </div>
              </div>
            </>
          ) : (
            <div className="flex w-full">
              <div className='basis-3/5'>
                <CarouselSection 
                  slides={items}
                  options={OPTIONS}
                  />              
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
