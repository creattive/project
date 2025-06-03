// Types for stored data
export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  videoUrl?: string;
  client?: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  text: string;
  image?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social?: {
    linkedin?: string;
    instagram?: string;
  };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

// Local storage helper functions
const STORAGE_KEYS = {
  PORTFOLIO: 'indevice_portfolio',
  TESTIMONIALS: 'indevice_testimonials',
  TEAM: 'indevice_team',
  SERVICES: 'indevice_services',
  AUTH: 'indevice_auth',
};

// Generic function to get data from localStorage
export const getFromStorage = <T>(key: string, defaultValue: T): T => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error(`Error getting ${key} from localStorage:`, error);
    return defaultValue;
  }
};

// Generic function to save data to localStorage
export const saveToStorage = <T>(key: string, value: T): void => {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Error saving ${key} to localStorage:`, error);
  }
};

// Portfolio items
export const getPortfolioItems = (): PortfolioItem[] => 
  getFromStorage<PortfolioItem[]>(STORAGE_KEYS.PORTFOLIO, []);

export const savePortfolioItems = (items: PortfolioItem[]): void => 
  saveToStorage(STORAGE_KEYS.PORTFOLIO, items);

// Testimonials
export const getTestimonials = (): Testimonial[] => 
  getFromStorage<Testimonial[]>(STORAGE_KEYS.TESTIMONIALS, []);

export const saveTestimonials = (items: Testimonial[]): void => 
  saveToStorage(STORAGE_KEYS.TESTIMONIALS, items);

// Team members
export const getTeamMembers = (): TeamMember[] => 
  getFromStorage<TeamMember[]>(STORAGE_KEYS.TEAM, []);

export const saveTeamMembers = (items: TeamMember[]): void => 
  saveToStorage(STORAGE_KEYS.TEAM, items);

// Services
export const getServices = (): Service[] => 
  getFromStorage<Service[]>(STORAGE_KEYS.SERVICES, []);

export const saveServices = (items: Service[]): void => 
  saveToStorage(STORAGE_KEYS.SERVICES, items);

// Authentication for admin
export const isAuthenticated = (): boolean => {
  const auth = getFromStorage<{ authenticated: boolean }>(STORAGE_KEYS.AUTH, { authenticated: false });
  return auth.authenticated;
};

export const setAuthenticated = (value: boolean): void => {
  saveToStorage(STORAGE_KEYS.AUTH, { authenticated: value });
};