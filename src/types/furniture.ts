export interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  description: string;
  category: string;
  images: string[];
  specifications: Specification[];
  inStock: boolean;
  rating: number;
  reviewsCount: number;
}

export interface Specification {
  name: string;
  value: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface Filter {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
}