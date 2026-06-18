export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  price: string;
  image: string | null;
  category: number;
  category_detail?: Category;
  is_available: boolean;
  author: string | null;
  created_at: string;
  updated_at: string;
}
