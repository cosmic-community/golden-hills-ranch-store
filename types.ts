// Cosmic object type definitions

export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    product_name: string;
    description: string;
    price: number;
    unit?: string;
    weight?: string;
    product_images?: Array<{
      url: string;
      imgix_url: string;
    }>;
    category?: Category;
    in_stock: boolean;
    featured: boolean;
    nutritional_info?: string;
  };
}

export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    category_name: string;
    description?: string;
    category_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    customer_name: string;
    rating: {
      key: string;
      value: string;
    };
    review_text: string;
    product?: Product;
    verified_purchase: boolean;
    review_date?: string;
  };
}

export interface Page extends CosmicObject {
  type: 'pages';
  metadata: {
    page_title: string;
    content: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name: string;
    role: string;
    bio?: string;
    photo?: {
      url: string;
      imgix_url: string;
    };
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}