export type Product = {
    id: number;
    sku: string;
    title: string;
    category: string;
    tags: string[];
    normalPrice: number;
    salePrice: number;
    discountPercentage: number;
    new: boolean;
    slug: string;
    description: {
      short: string;
      long: string;
    };
    colors: {
      name: string;
      hex: string;
    }[];
    sizes: string[];
    rating: number;
    images: {
      mainImage: string;
      gallery: string[];
    };
  };

