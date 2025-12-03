export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'coffee' | 'pastry' | 'breakfast' | 'dessert';
  image?: string;
  featured?: boolean;
}

export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span?: string; // class for grid spanning
}

export interface LocationItem {
  id: string;
  name: string;
  address: string[];
  hours: string;
}

export interface Article {
  title: string;
  desc: string;
  image: string;
}

export interface SignatureDrink {
  name: string;
  desc: string;
  price: string;
  image: string;
}

export type Region = 'US' | 'UK' | 'AU' | 'AE';

export interface RegionContent {
  region: Region;
  currency: string;
  tagline: string;
  hero: {
    headline: string;
    subheadline: string;
  };
  signatureDrinks: SignatureDrink[];
  menuItems: MenuItem[];
  locations: LocationItem[];
  journal: Article[];
}