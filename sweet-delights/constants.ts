import type { Cake } from './types';

export const CAKE_PRODUCTS: Cake[] = [
  {
    id: 1,
    name: "Velvet Chocolate Dream",
    description: "A rich and moist chocolate cake with a silky smooth ganache, perfect for any chocoholic.",
    price: 45.99,
    imageUrl: "https://plus.unsplash.com/premium_photo-1681276170915-9af53d552f4a?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    category: "Chocolate",
    details: {
      size: "8-inch round",
      servings: "8-12",
      allergens: ["Wheat", "Dairy", "Eggs"]
    }
  },
  {
    id: 2,
    name: "Summer Berry Bliss",
    description: "A light vanilla sponge layered with fresh seasonal berries and a delicate whipped cream frosting.",
    price: 52.50,
    imageUrl: "https://plus.unsplash.com/premium_photo-1713920190117-d49688696e35?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    category: "Fruit",
    details: {
      size: "9-inch round",
      servings: "10-14",
      allergens: ["Wheat", "Dairy", "Eggs"]
    }
  },
  {
    id: 3,
    name: "Elegant Ivory Wedding Cake",
    description: "A stunning three-tiered almond cake with raspberry filling and a classic ivory buttercream finish.",
    price: 350.00,
    imageUrl: "https://images.unsplash.com/photo-1582133928071-d237b08ebd8c?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    category: "Wedding",
    details: {
      size: "6, 8, 10-inch tiers",
      servings: "50-60",
      allergens: ["Wheat", "Dairy", "Eggs", "Nuts"]
    }
  },
  {
    id: 4,
    name: "Caramel Macchiato Tower",
    description: "Coffee-infused sponge cake with layers of salted caramel buttercream, topped with a caramel drizzle.",
    price: 48.00,
    imageUrl: "https://plus.unsplash.com/premium_photo-1716484895310-9bb1828d5632?q=80&w=1808&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    category: "Specialty",
    details: {
      size: "8-inch round",
      servings: "8-12",
      allergens: ["Wheat", "Dairy", "Eggs"]
    }
  },
  {
    id: 5,
    name: "Decadent Fudge Delight",
    description: "An intensely rich fudge cake, dense and chewy, with a dark chocolate glaze.",
    price: 49.99,
    imageUrl: "https://images.unsplash.com/photo-1695649912701-e8431668040f?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    category: "Chocolate",
    details: {
      size: "9-inch square",
      servings: "12-16",
      allergens: ["Wheat", "Dairy", "Eggs"]
    }
  },
  {
    id: 6,
    name: "Lemon Zest Sponge",
    description: "A bright and airy lemon sponge cake with a tangy lemon curd filling and a light cream cheese frosting.",
    price: 42.00,
    imageUrl: "https://plus.unsplash.com/premium_photo-1714942934723-118f2b4dd6dc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4,
    category: "Fruit",
    details: {
      size: "8-inch round",
      servings: "8-12",
      allergens: ["Wheat", "Dairy", "Eggs"]
    }
  },
  {
    id: 7,
    name: "Rustic Floral Wedding Cake",
    description: "A beautiful semi-naked cake adorned with fresh seasonal flowers, available in various flavors.",
    price: 280.00,
    imageUrl: "https://images.unsplash.com/photo-1586120317459-da8bab18f337?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    category: "Wedding",
    details: {
      size: "6, 9-inch tiers",
      servings: "30-40",
      allergens: ["Wheat", "Dairy", "Eggs"]
    }
  },
  {
    id: 8,
    name: "Pistachio Rosewater Cake",
    description: "An exotic and fragrant cake with ground pistachios and a hint of rosewater, topped with crushed nuts.",
    price: 55.00,
    imageUrl: "https://images.unsplash.com/photo-1683989416377-95907bd36efe?q=80&w=1843&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 5,
    category: "Specialty",
    details: {
      size: "8-inch round",
      servings: "8-12",
      allergens: ["Wheat", "Dairy", "Eggs", "Nuts"]
    }
  }
];