import React, { useState, useEffect } from 'react';
import type { Review } from '../types';
import StarRating from './StarRating';
import StarInput from './StarInput';

interface CustomerReviewsProps {
  productId: number;
}

const STORAGE_KEY = 'product_reviews';

const CustomerReviews: React.FC<CustomerReviewsProps> = ({ productId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  
  // Form state
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const storedReviewsJSON = localStorage.getItem(STORAGE_KEY);
      if (storedReviewsJSON) {
        const allReviews: Record<string, Review[]> = JSON.parse(storedReviewsJSON);
        setReviews(allReviews[productId] || []);
      }
    } catch (e) {
      console.error("Failed to load or parse reviews from localStorage", e);
      setReviews([]);
    }
  }, [productId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0 || !name.trim() || !comment.trim()) {
      setError('Please fill in all fields and select a rating.');
      return;
    }
    
    const newReview: Review = {
      id: `${Date.now()}-${name}`,
      productId,
      name,
      rating,
      comment,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    };

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);

    // Update localStorage
    try {
        const storedReviewsJSON = localStorage.getItem(STORAGE_KEY);
        const allReviews: Record<string, Review[]> = storedReviewsJSON ? JSON.parse(storedReviewsJSON) : {};
        allReviews[productId] = updatedReviews;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(allReviews));
    } catch (e) {
        console.error("Failed to save review to localStorage", e);
    }
    
    // Reset form
    setName('');
    setRating(0);
    setComment('');
    setError('');
    setIsFormVisible(false);
  };

  return (
    <section aria-labelledby="reviews-heading">
      <div className="flex justify-between items-center mb-8">
        <h2 id="reviews-heading" className="text-3xl font-serif font-bold text-secondary">Customer Reviews</h2>
        <button 
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="bg-accent hover:bg-secondary text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
        >
          {isFormVisible ? 'Cancel' : 'Leave a Review'}
        </button>
      </div>

      {isFormVisible && (
        <div className="mb-10 bg-white p-8 rounded-lg shadow-md transition-all duration-500">
            <form onSubmit={handleSubmit}>
                <h3 className="text-xl font-semibold text-secondary mb-4">Write Your Review</h3>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                        <label htmlFor="name" className="block text-text-main font-semibold mb-2">Your Name</label>
                        <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent" />
                    </div>
                    <div>
                        <label className="block text-text-main font-semibold mb-2">Your Rating</label>
                        <StarInput rating={rating} setRating={setRating} />
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="comment" className="block text-text-main font-semibold mb-2">Your Review</label>
                    <textarea id="comment" value={comment} onChange={e => setComment(e.target.value)} required rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
                </div>
                <div className="text-right">
                    <button type="submit" className="bg-secondary hover:bg-accent text-white font-bold py-2 px-8 rounded-full shadow-lg transition-colors duration-300">
                        Submit Review
                    </button>
                </div>
            </form>
        </div>
      )}

      {reviews.length > 0 ? (
        <div className="space-y-8">
          {reviews.map(review => (
            <div key={review.id} className="border-b pb-6">
              <div className="flex items-center mb-2">
                <StarRating rating={review.rating} />
                <h4 className="font-bold text-secondary ml-4">{review.name}</h4>
              </div>
              <p className="text-gray-500 text-sm mb-3">{review.date}</p>
              <p className="text-text-main">{review.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-text-main text-center py-8">Be the first to review this product!</p>
      )}
    </section>
  );
};

export default CustomerReviews;
