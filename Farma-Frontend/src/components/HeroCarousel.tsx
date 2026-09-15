import React, { useState, useEffect } from 'react';
import type { CarouselSlide } from '../types';

const defaultSlides: CarouselSlide[] = [
  {
    id: 1,
    title: 'Medicamentos y Salud Integral',
    subtitle: 'Contamos con un amplio catálogo de productos farmacéuticos certificados al mejor precio.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80',
    tag: 'Salud y Bienestar',
  },
  {
    id: 2,
    title: 'Atención Farmacéutica Personalizada',
    subtitle: 'Orientación profesional de químicos farmacéuticos las 24 horas del día.',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1200&q=80',
    tag: 'Profesionales',
  },
  {
    id: 3,
    title: 'Servicio de Entrega Rápida y Segura',
    subtitle: 'Llevamos tus medicamentos directo a la puerta de tu hogar con los más altos estándares.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    tag: 'Delivery 24/7',
  },
  {
    id: 4,
    title: 'Innovación y Tecnología en Farmacia',
    subtitle: 'Gestión moderna y control digital de recetas para una experiencia segura.',
    image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80',
    tag: 'Tecnología',
  },
];

export const HeroCarousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % defaultSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % defaultSlides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + defaultSlides.length) % defaultSlides.length);
  };

  return (
    <section
      id="inicio"
      className="w-full h-[320px] md:h-[460px] rounded-2xl overflow-hidden shadow-lg relative group bg-gray-900"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {defaultSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-12 text-white">
            <span className="inline-block bg-blue-600 text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full uppercase tracking-wider w-max mb-2 shadow">
              {slide.tag}
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-2 leading-tight">
              {slide.title}
            </h2>
            <p className="text-sm md:text-lg text-gray-200 max-w-2xl">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Flecha Anterior */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-blue-600 text-white flex items-center justify-center transition opacity-80 hover:opacity-100 shadow-md backdrop-blur-sm"
        aria-label="Anterior slide"
      >
        <i className="fa-solid fa-chevron-left text-lg"></i>
      </button>

      {/* Flecha Siguiente */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-blue-600 text-white flex items-center justify-center transition opacity-80 hover:opacity-100 shadow-md backdrop-blur-sm"
        aria-label="Siguiente slide"
      >
        <i className="fa-solid fa-chevron-right text-lg"></i>
      </button>

      {/* Indicadores / Paginación */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {defaultSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === current ? 'w-8 bg-blue-500' : 'w-2.5 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
