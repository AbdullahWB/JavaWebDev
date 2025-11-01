
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import CartModal from './CartModal';
import { useWishlist } from '../hooks/useWishlist';
import WishlistModal from './WishlistModal';
import { useAuth } from '../hooks/useAuth';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const { currentUser, logout } = useAuth();

  const navLinkClasses = "text-text-main hover:text-accent transition-colors duration-300 font-medium";
  const activeNavLinkClasses = "text-accent";

  return (
    <>
      <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <NavLink to="/" className="text-2xl font-serif font-bold text-secondary">
                Sweet Delights
              </NavLink>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>Home</NavLink>
              <NavLink to="/shop" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>Shop</NavLink>
              <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>About</NavLink>
            </nav>
            <div className="flex items-center">
              {currentUser ? (
                <div className="hidden md:flex items-center space-x-4">
                  <span className="text-text-main">Welcome, {currentUser.name}!</span>
                  <button onClick={logout} className="text-sm font-medium text-accent hover:underline">Logout</button>
                </div>
              ) : (
                <div className="hidden md:flex items-center space-x-4">
                   <Link to="/login" className={navLinkClasses}>Login</Link>
                   <Link to="/signup" className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary transition-colors">Sign Up</Link>
                </div>
              )}
               <div className="flex items-center ml-4">
                <button onClick={() => setIsWishlistOpen(true)} className="relative text-text-main hover:text-accent transition-colors duration-300 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{wishlistCount}</span>
                  )}
                </button>
                <button onClick={() => setIsCartOpen(true)} className="relative text-text-main hover:text-accent transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>
                  )}
                </button>
              </div>
              <div className="md:hidden ml-4">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text-main hover:text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <nav className="flex flex-col space-y-2">
                <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
                <NavLink to="/shop" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>Shop</NavLink>
                <NavLink to="/about" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`} onClick={() => setIsMenuOpen(false)}>About</NavLink>
                 {currentUser ? (
                    <>
                     <p className="px-1 pt-2 text-text-main">Welcome, {currentUser.name}!</p>
                     <button onClick={() => { logout(); setIsMenuOpen(false); }} className="text-left px-1 text-accent hover:underline">Logout</button>
                    </>
                ) : (
                    <>
                    <NavLink to="/login" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}>Login</NavLink>
                    <NavLink to="/signup" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}>Sign Up</NavLink>
                    </>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <WishlistModal isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
    </>
  );
};

export default Header;