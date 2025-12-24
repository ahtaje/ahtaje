export interface Service {
  id: string;
  name: string;
  description: string;
}

export interface ServiceCategory {
  id: string;
  name: string[];
  services: Service[];
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface BookingDetails {
  location: string;
  date: string;
  time: string;
  notes: string;
  photo?: File;
  photoPreview?: string;
}

export interface Quote {
    price: number;
    timeframe: string;
}

export type Language = 'en' | 'fr' | 'ar';
