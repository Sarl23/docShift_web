import { api } from "./utils";
export interface User {
  userId: string;
  companyId: string;
  email: string;
  name: string;
  status: string;
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

export const getGLobalUser = async (userId: string): Promise<User> => {
  const res = await api<{ success: boolean; data: User }>(
    `${import.meta.env.VITE_API_URL}/api/globalUserWithId/${userId}/`
  )
  return res.data
}