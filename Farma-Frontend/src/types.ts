export interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  image: string;
  stock: number;
}

export interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  tag: string;
}

export interface UserSession {
  token: string;
  username: string;
  email: string;
  role: string;
}
