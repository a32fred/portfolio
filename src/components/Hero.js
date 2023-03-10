import React from 'react';

import FredImage from '../assets/img/profilleIMG.jpg'

function Hero() {
  return <section id='home' className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'>
    <div className='container mx-auto h-full'>
      <div className='flex items-center h-full pt-8'>
        {/*left side*/}
        <div className='flex-1 flex flex-col items-center lg:items-start'>
          <p className='text-lg text-accent mb-[22px]'>Oi!!, Sou o Fred 🚀</p>
          <h1 className='text-4xl leading-[44px] md:text-5x1 md:leading-tight lg:text-7x1 lg:leading-[1.2] font-bold md:tracking-[-2px]'>
            Eu Desenvolvo Sites <br /> & Aplicações Web
          </h1>
          <p className='pt-6 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
          Meu nome é Frederico,
          e sou um Desenvolvedor Junior com experiência em React JS & Node JS.
          </p>

          <button className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg'>Trabalhe Comigo!</button>
        </div>
        {/*img side*/}
        <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
          <img src={FredImage} alt='fred' />
        </div>
      </div>
    </div>
  </section>;
}

export default Hero;