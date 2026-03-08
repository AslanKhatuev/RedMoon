export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  category: "video" | "photo";
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface Testimonial {
  id: string;
  name: string;
  date: string;
  text: string;
  rating: number;
  service: string;
}
