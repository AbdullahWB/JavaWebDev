
import React, { createContext, useState, useEffect } from 'react';
import type { WishlistItem, Cake } from '../types';

interface WishlistContextType {
  wishlistItems: WishlistItem[];
  addToWishlist: (cake: Cake) => void;
  removeFromWishlist: (cakeId: number) => void;
  isInWishlist: (cakeId: number) => boolean;
  wishlistCount: number;
}

export const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(() => {
    try {
      const localData = localStorage.getItem('wishlistItems');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Could not parse wishlist items from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (cake: Cake) => {
    setWishlistItems(prevItems => {
      if (!prevItems.find(item => item.id === cake.id)) {
        return [...prevItems, cake];
      }
      return prevItems;
    });
  };

  const removeFromWishlist = (cakeId: number) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== cakeId));
  };

  const isInWishlist = (cakeId: number) => {
    return wishlistItems.some(item => item.id === cakeId);
  };
  
  const wishlistCount = wishlistItems.length;

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist, wishlistCount }}>
      {children}
    </WishlistContext.Provider>
  );
};