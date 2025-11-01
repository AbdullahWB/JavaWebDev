
import React from 'react';
import { useWishlist } from '../hooks/useWishlist';
import { useCart } from '../hooks/useCart';
import type { WishlistItem } from '../types';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WishlistModal: React.FC<WishlistModalProps> = ({ isOpen, onClose }) => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (!isOpen) return null;
  
  const handleMoveToCart = (item: WishlistItem) => {
    addToCart(item);
    removeFromWishlist(item.id);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end" onClick={onClose}>
      <div 
        className="w-full max-w-md h-full bg-background shadow-xl flex flex-col transform transition-transform duration-300 ease-in-out translate-x-0"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-primary">
          <h2 className="text-2xl font-serif font-bold text-secondary">Your Wishlist</h2>
          <button onClick={onClose} className="text-text-main hover:text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-4">
          {wishlistItems.length === 0 ? (
            <p className="text-center text-text-main">Your wishlist is empty.</p>
          ) : (
            wishlistItems.map((item: WishlistItem) => (
              <div key={item.id} className="flex items-center space-x-4">
                <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                <div className="flex-grow">
                  <h3 className="font-semibold text-secondary">{item.name}</h3>
                  <p className="text-sm text-text-main">${item.price.toFixed(2)}</p>
                  <button onClick={() => handleMoveToCart(item)} className="text-sm text-accent hover:underline mt-2">Move to Cart</button>
                </div>
                <button onClick={() => removeFromWishlist(item.id)} className="text-gray-400 hover:text-red-500">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistModal;
