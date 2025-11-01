
import React from 'react';
import { Link } from 'react-router-dom';
import type { Cake } from '../types';
import StarRating from './StarRating';
import WishlistButton from './WishlistButton';

interface CakeCardProps {
  cake: Cake;
}

const CakeCard: React.FC<CakeCardProps> = ({ cake }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group transition-transform duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative">
      <Link to={`/product/${cake.id}`} className="block">
        <div className="overflow-hidden relative">
          <img src={cake.imageUrl} alt={cake.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute top-3 right-3">
             <WishlistButton cake={cake} />
          </div>
        </div>
        <div className="p-6">
          <span className="inline-block bg-primary/30 text-accent font-semibold text-xs px-2 py-1 rounded-full mb-2">{cake.category}</span>
          <h3 className="text-xl font-serif font-bold text-secondary truncate">{cake.name}</h3>
          <div className="flex justify-between items-center mt-2">
            <p className="text-lg font-semibold text-text-main">${cake.price.toFixed(2)}</p>
            <StarRating rating={cake.rating} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CakeCard;