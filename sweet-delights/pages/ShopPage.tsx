
import React, { useState, useMemo } from 'react';
import { CAKE_PRODUCTS } from '../constants';
import CakeCard from '../components/CakeCard';
import type { Cake } from '../types';

type Category = 'All' | Cake['category'];
type SortOption = 'default' | 'price-asc' | 'price-desc' | 'rating-desc';

const ShopPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [sortOption, setSortOption] = useState<SortOption>('default');

  const categories: Category[] = ['All', 'Chocolate', 'Fruit', 'Wedding', 'Specialty'];

  const filteredAndSortedCakes = useMemo(() => {
    let filtered = selectedCategory === 'All'
      ? CAKE_PRODUCTS
      : CAKE_PRODUCTS.filter(cake => cake.category === selectedCategory);

    switch (sortOption) {
      case 'price-asc':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-desc':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'rating-desc':
        return [...filtered].sort((a, b) => b.rating - a.rating);
      case 'default':
      default:
        return filtered;
    }
  }, [selectedCategory, sortOption]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary">Our Cake Collection</h1>
        <p className="mt-4 text-lg text-text-main max-w-2xl mx-auto">
          Explore our delightful range of cakes, baked to perfection for your special moments.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-secondary text-white'
                  : 'bg-white text-secondary hover:bg-primary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="relative">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value as SortOption)}
            className="appearance-none bg-white border border-gray-300 rounded-full py-2 pl-4 pr-10 text-text-main focus:outline-none focus:ring-2 focus:ring-accent"
          >
            <option value="default">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-desc">Rating: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredAndSortedCakes.map(cake => (
          <CakeCard key={cake.id} cake={cake} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
