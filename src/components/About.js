import React from 'react';

import Image from '../assets/img/about.jpg'

function About() {
    return (
        <section id='about' className='section bg-secondary'>
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-24'>
                    <img className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl' src={Image} />
                    <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
                        <div className='flex flex-col'>
                            <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                                Frederico Carlos
                            </h2>
                            <p className='mb-4 text-accent'>Desenvolvedor Web BackEnd Junior</p>
                            <hr className='mb-8 opacity-5' />
                            <p className='mb-8'>
                                Desenvolvedor iniciante com experiência em React JS, Next JS, Node JS, e com foco no backend. Eu estou cursando Análise e Desenvolvimento de Sistemas pela Estácio EAD.<br />
                                ㅤAo longo da minha vida, eu adquiri habilidades em sistemas linux, e desenvolvimento de aplicações web. Eu sou um Observador e estou comprometido com a excelência no meu trabalho. Eu gosto de ajudar as pessoas e acredito ajudar é um ato simples que muda o dia de alguém.<br />
                                ㅤEm minha carreira, eu já trabalhei com o Instituto IDEAR e tenho orgulho em ser resposável pelo desenvolvimento do sistema de monitoração de computadores da empresa. No meu tempo livre, gosto de praticar esportes como o Basquete e me sinto motivado a ter mais conhecimento. Espero ter a oportunidade de trazer minhas habilidades e experiências para contribuir para o desenvolvimento de TI e continuar aprendendo e crescendo como profissional e indivíduo.
                            </p>
                        </div>
                        <button className='btn btn-md bg-accent hover:bg-accent-hover md:btn-lg'>Entre em Contato</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;