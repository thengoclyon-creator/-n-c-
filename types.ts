
export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  description: string;
  isHot?: boolean;
  isNew?: boolean;
  sizes: number[];
  colors: string[];
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  size: number;
  color: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  category: string;
  imageUrl: string;
  readTime: string;
  date: string;
  tag?: string;
}
