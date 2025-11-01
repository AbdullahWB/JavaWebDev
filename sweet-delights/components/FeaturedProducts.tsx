
import React from 'react';
import { Link } from 'react-router-dom';
import { CAKE_PRODUCTS } from '../constants';
import CakeCard from './CakeCard';

const FeaturedProducts: React.FC = () => {
  const featured = CAKE_PRODUCTS.slice(0, 3);

  return (
    <div className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">Our Featured Cakes</h2>
          <p className="mt-4 text-lg text-text-main">A selection of our most loved creations.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map(cake => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block bg-secondary hover:bg-accent text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
          >
            View All Cakes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
