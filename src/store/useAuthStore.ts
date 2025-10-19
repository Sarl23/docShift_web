import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserData {
  userId: string;
  email: string;
  name: string;
  last_name: string;
  image: string;
  phone: string;
  city: string;
  address: string;
  rol: string;
  status: string;
}

interface CompanyData {
  address: string;
  city: string;
  code: string;
  description: string;
  id: string;
  name: string;
  nit: string;
  roles: string[];
}

interface AuthState {
  user: UserData | null;
  company: CompanyData | null;
  isAuthenticated: boolean;
  setUser: (user: UserData) => void;
  setCompany (company: CompanyData) : void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      company: null,
      isAuthenticated: false,
      
      setUser: (user) => set({ 
        user, 
        isAuthenticated: true 
      }),
      
      setCompany: (company ) => set({company}),
      
      clearAuth: () => set({ 
        user: null, 
        company: null, 
        isAuthenticated: false 
      }),
    }),
    {
      name: 'auth-storage', // localStorage name
    }
  )
);
