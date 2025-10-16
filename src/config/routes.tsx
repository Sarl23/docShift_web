import { Home, Search, Settings } from 'lucide-react'

export const ROUTES = {
	DASHBOARD: '/dashboard',
	MANAGEMENT_SHIFTS: '/dashboard/management_shifts',
	MANAGEMENT_NOTES: '/dashboard/management',
	SETTINGS: '/dashboard/settings',
}

export const ItemsRoutes = [
	{
		title: 'Home',
		url: ROUTES.DASHBOARD,
		icon: Home,
	},
	{
		title: 'Asignacion de turnos',
		url: ROUTES.MANAGEMENT_SHIFTS,
		icon: Search,
	},
	{
		title: 'Jornadas laborales',
		url: ROUTES.MANAGEMENT_NOTES,
		icon: Search,
	},
	{
		title: 'Notas pendientes',
		url: ROUTES.MANAGEMENT_NOTES,
		icon: Search,
	},
	{
		title: 'Ajustes',
		url: ROUTES.SETTINGS,
		icon: Settings,
	},
]
