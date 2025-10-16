import { api } from "./utils";
export interface User {
  userId: string;
  companyId: string;
  email: string;
  name: string;
  last_name: string;
  image: string;
  phone: string;
  address: string;
  status: string;
  city: string;
  rol: string;
}

export const getUserById = async ( companyId: string, userId: string): Promise<User> => {
  const res = await api<{ success: boolean; data: User }>(
    `${import.meta.env.VITE_API_URL}/api/company/${companyId}/users/${userId}/`
  )
  return res.data
}

export const getUsers = async (companyId: string): Promise<User[]> => {
  const res = await api<{ success: boolean; data: User[] }>(
    `${import.meta.env.VITE_API_URL}/api/company/${companyId}/users/`
  )
  return res.data
}

export const getGlobalUSer = async (userId: string): Promise<User> => {
  console.log(userId)
  const res = await api<{ success: boolean; data: User }>(
    `${import.meta.env.VITE_API_URL}/api/globalUserWithId/${userId}/`
  )
  return res.data
}