
import React, { createContext, useState, useEffect } from 'react';
import type { CartItem, Cake } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (cake: Cake) => void;
  removeFromCart: (cakeId: number) => void;
  updateQuantity: (cakeId: number, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  totalPrice: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const localData = localStorage.getItem('cartItems');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Could not parse cart items from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (cake: Cake) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === cake.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === cake.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...cake, quantity: 1 }];
    });
  };

  const removeFromCart = (cakeId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== cakeId));
  };

  const updateQuantity = (cakeId: number, quantity: number) => {
    setCartItems(prevItems => {
      if (quantity <= 0) {
        return prevItems.filter(item => item.id !== cakeId);
      }
      return prevItems.map(item =>
        item.id === cakeId ? { ...item, quantity } : item
      );
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };
  
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
