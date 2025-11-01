
import React from 'react';
import { useWishlist } from '../hooks/useWishlist';
import type { Cake } from '../types';

interface WishlistButtonProps {
  cake: Cake;
}

const WishlistButton: React.FC<WishlistButtonProps> = ({ cake }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(cake.id);

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWishlisted) {
      removeFromWishlist(cake.id);
    } else {
      addToWishlist(cake);
    }
  };

  return (
    <button
      onClick={handleToggleWishlist}
      className="p-2 rounded-full bg-white/70 backdrop-blur-sm hover:bg-white transition-colors duration-300 text-accent"
      aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={isWishlisted ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    </button>
  );
};

export default WishlistButton;
