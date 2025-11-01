
import React from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';

const OrderConfirmationPage: React.FC = () => {
  const location = useLocation();
  const order = location.state?.order;

  if (!order) {
    // Redirect to home if there's no order data, e.g., direct navigation to this page
    return <Navigate to="/" replace />;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-xl text-center">
        <svg className="w-16 h-16 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">Thank you for your order!</h1>
        <p className="text-lg text-text-main mb-8">
          Your order has been placed successfully. A confirmation has been sent to your email (not really!).
        </p>
        
        <div className="text-left border-t border-b py-6 my-6">
          <h2 className="text-2xl font-semibold text-secondary mb-4">Order Summary</h2>
          {order.items.map((item: any) => (
            <div key={item.id} className="flex justify-between items-center mb-3">
              <span className="text-text-main">{item.name} x {item.quantity}</span>
              <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between text-xl font-bold text-secondary mt-4 pt-4 border-t">
            <span>Total Paid</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
        </div>

        <Link 
          to="/shop" 
          className="inline-block bg-accent hover:bg-secondary text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
