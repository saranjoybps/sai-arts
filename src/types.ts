export interface Artwork {
  id: string;
  title: string;
  medium: string;
  year: number;
  category: 'Oil Paintings' | 'Portraits' | 'Nature' | 'Abstract' | 'Sketches';
  image: string;
  dimensions: string;
  featured: boolean;
  aspectRatio: '1:1' | '3:4' | '4:3' | '4:5' | '16:9';
  subtitle?: string;
  description: string;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
