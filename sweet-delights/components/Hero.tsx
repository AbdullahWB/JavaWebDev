import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary leading-tight mb-4">
            Artisan Cakes for Every Occasion
          </h1>
          <p className="text-lg text-text-main mb-8">
            Handcrafted with love and the finest ingredients. Discover a world of flavor that makes every celebration sweeter.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-accent hover:bg-secondary text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            Shop Our Cakes
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
            <img src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?q=80&w=500&h=500&auto=format&fit=crop" alt="Beautifully decorated cake" className="rounded-full shadow-2xl w-3/4 md:w-full max-w-md"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;