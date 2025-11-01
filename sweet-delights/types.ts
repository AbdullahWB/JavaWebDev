export interface Cake {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  rating: number;
  category: 'Chocolate' | 'Fruit' | 'Wedding' | 'Specialty';
  details: {
    size: string;
    servings: string;
    allergens: string[];
  };
}

export interface CartItem extends Cake {
  quantity: number;
}

export interface Review {
  id: string;
  productId: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface WishlistItem extends Cake {}

export interface User {
    id: string;
    name: string;
    email: string;
}
