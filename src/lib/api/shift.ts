import { api } from "./utils";
import { Timestamp } from 'firebase/firestore'

export interface Shift {
        id: string,
        description: string,
        name: string,
        start_time: Timestamp,
        end_time: Timestamp
        date: Date[],
}

export interface ShiftCreate {
        shift_type_id: string,
        user_id: string,
        manager_id: string,
        notes: string,
        date: Date[]
}

export const getShiftTypes = async (companyId: string): Promise<Shift[]> => {
    const res = await api<{ success: boolean; data: Shift[] }>(
        `${import.meta.env.VITE_API_URL}/api/companies/${companyId}/shift_type/`
    );
    return res.data;
}

export const createShiftType = async (companyId: string, shift: ShiftCreate): Promise<ShiftCreate > => {
    const res = await api<{ success: boolean; data: ShiftCreate }>(
        `${import.meta.env.VITE_API_URL}/api/companies/${companyId}/shift`,
        {
            method: 'POST',
            body: JSON.stringify(shift),
        }
    );
    return res.data;
}

export const getShiftByUserId = async (companyId: string, userId: string): Promise<Shift[]> => {
    const res = await api<{ success: boolean; data: Shift[] }>(
        `${import.meta.env.VITE_API_URL}/api/companies/${companyId}/shift_by_user/${userId}`
    );
    return res.data;
}