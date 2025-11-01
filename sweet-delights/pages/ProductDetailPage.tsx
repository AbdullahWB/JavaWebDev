
import React from 'react';
import { useParams } from 'react-router-dom';
import { CAKE_PRODUCTS } from '../constants';
import StarRating from '../components/StarRating';
import { useCart } from '../hooks/useCart';
import CustomerReviews from '../components/CustomerReviews';
import WishlistButton from '../components/WishlistButton';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const cake = CAKE_PRODUCTS.find(p => p.id === Number(id));

  if (!cake) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-3xl font-bold">Product not found</h1>
      </div>
    );
  }
  
  const handleAddToCart = () => {
      addToCart(cake);
      // Can add a toast notification here for better UX
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div>
          <img src={cake.imageUrl} alt={cake.name} className="w-full h-auto object-cover rounded-lg shadow-xl" />
        </div>
        <div>
          <span className="inline-block bg-primary/30 text-accent font-semibold text-xs px-2 py-1 rounded-full mb-2">{cake.category}</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">{cake.name}</h1>
          <div className="flex items-center mb-4">
            <StarRating rating={cake.rating} />
            <span className="ml-2 text-text-main">({cake.rating.toFixed(1)})</span>
          </div>
          <p className="text-2xl font-semibold text-text-main mb-6">${cake.price.toFixed(2)}</p>
          <p className="text-lg text-gray-600 mb-8">{cake.description}</p>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={handleAddToCart}
              className="flex-grow bg-accent hover:bg-secondary text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
            >
              Add to Cart
            </button>
            <WishlistButton cake={cake} />
          </div>
          
          <div className="mt-10 border-t pt-6">
            <h3 className="text-xl font-semibold text-secondary mb-3">Product Details</h3>
            <ul className="space-y-2 text-text-main">
              <li><strong>Size:</strong> {cake.details.size}</li>
              <li><strong>Servings:</strong> {cake.details.servings}</li>
              <li><strong>Allergens:</strong> {cake.details.allergens.join(', ')}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-16 border-t pt-10">
        <CustomerReviews productId={cake.id} />
      </div>
    </div>
  );
};

export default ProductDetailPage;