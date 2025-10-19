import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Mail, Phone, MapPin, User as UserIcon, Calendar, Clock, Search, Briefcase } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getUsers, User } from '@/lib/api/user'
import Calendar03 from '@/components/management-page/calendar-03'
import { Shift, getShiftByUserId } from '@/lib/api/shift'
import { SummaryShift } from '@/components/management-page/summary-shift'
import { Input } from '@/components/ui/input'
import { useAuthStore } from '@/store/useAuthStore'

export default function ManagementPage() {
	const { company} = useAuthStore()
	const companyId = company?.id
	const [users, setUsers] = useState<User[] | null>(null)
	const [selectedUser, setSelectedUser] = useState<User | null>(null)
	const [shiftList, setShiftList] = useState<Shift[] | null>(null)
	const [searchTerm, setSearchTerm] = useState('')
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		async function fetchUsers() {
			if (!companyId) return
			try {
				setLoading(true)
				const fetchedUsers = await getUsers(companyId)
				setUsers(fetchedUsers)
			} catch (error) {
				console.error('Error fetching users:', error)
			} finally {
				setLoading(false)
			}
		}
		fetchUsers()
	}, [companyId])

	const handleAssignShifts = async (user: User) => {
		if (!companyId) return
		setSelectedUser(user)
		try {
			const fetchedShiftsByUser = await getShiftByUserId(companyId, user.userId)
			if (fetchedShiftsByUser) {
				setShiftList(fetchedShiftsByUser)
			}
		} catch (error) {
			console.error('Error fetching shifts:', error)
		}
	}

	const filteredUsers = users?.filter(user => 
		`${user.name} ${user.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
		user.rol?.toLowerCase().includes(searchTerm.toLowerCase())
	)

	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-screen bg-background">
				<div className="text-center">
					<Clock className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
					<p className="text-muted-foreground">Cargando personal...</p>
				</div>
			</div>
		)
	}

	return (
		<div className="min-h-screen bg-background p-4 sm:p-6 lg:p-8">
			<div className="mb-8">
				<div className="flex items-center gap-3 mb-2">
					<div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
						<Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
					</div>
					<h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
						Gestión de Turnos
					</h1>
				</div>
				<p className="text-gray-600 dark:text-gray-400">
					Asigna y gestiona los turnos del personal médico
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
				<div className="lg:col-span-4 xl:col-span-3">
					<Card className="shadow-lg dark:bg-gray-800 border-none">
						<CardHeader className="pb-4">
							<CardTitle className="flex items-center gap-2 text-lg">
								<UserIcon className="w-5 h-5 text-blue-600" />
								Personal Médico
							</CardTitle>
							<div className="relative mt-4">
								<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
								<Input
									placeholder="Buscar por nombre o rol..."
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className="pl-10 dark:bg-gray-700 dark:border-gray-600"
								/>
							</div>
						</CardHeader>
						<CardContent className="space-y-3 max-h-[calc(100vh-280px)] overflow-y-auto">
							{filteredUsers?.length === 0 ? (
								<div className="text-center py-12">
									<UserIcon className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
									<p className="text-gray-500 dark:text-gray-400">No se encontraron usuarios</p>
								</div>
							) : (
								filteredUsers?.map((user, index) => (
									<Card
										key={index}
										className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
											selectedUser?.userId === user.userId
												? 'border-2 border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-md'
												: 'hover:border-blue-300 dark:hover:border-blue-700 dark:bg-gray-700'
										}`}
										onClick={() => handleAssignShifts(user)}
									>
										<CardContent className="p-4">
											<div className="flex items-center gap-3">
												<div className="relative">
													<div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
														{user.name.charAt(0)}{user.last_name.charAt(0)}
													</div>
													<div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white dark:border-gray-700 ${
														user.status === 'active' ? 'bg-green-500' : 'bg-gray-400'
													}`} />
												</div>
												<div className="flex-1 min-w-0">
													<p className="font-semibold text-gray-900 dark:text-white truncate">
														{user.name} {user.last_name}
													</p>
													<div className="flex items-center gap-2 mt-1">
														<Briefcase className="w-3 h-3 text-gray-400" />
														<p className="text-sm text-gray-600 dark:text-gray-400 truncate">
															{user.rol || 'Sin rol'}
														</p>
													</div>
												</div>
											</div>
										</CardContent>
									</Card>
								))
							)}
						</CardContent>
					</Card>
				</div>

				<div className="lg:col-span-8 xl:col-span-9">
					{selectedUser ? (
						<div className="space-y-6">
							<Card className="shadow-lg dark:bg-gray-800 border-none">
								<CardHeader>
									<CardTitle className="flex items-center gap-2">
										<UserIcon className="w-5 h-5 text-blue-600" />
										Información del Personal
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
										<div className="relative">
											<div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-lg">
												{selectedUser.name.charAt(0)}{selectedUser.last_name.charAt(0)}
											</div>
											<div className={`absolute -bottom-2 -right-2 px-3 py-1 rounded-full text-xs font-medium ${
												selectedUser.status === 'active' 
													? 'bg-green-500 text-white' 
													: 'bg-gray-400 text-white'
											}`}>
												{selectedUser.status === 'active' ? 'Activo' : 'Inactivo'}
											</div>
										</div>
										<div className="flex-1 space-y-4 text-center sm:text-left">
											<div>
												<h2 className="text-2xl font-bold text-gray-900 dark:text-white">
													{selectedUser.name} {selectedUser.last_name}
												</h2>
												<p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
													{selectedUser.rol || 'Sin rol asignado'}
												</p>
											</div>
											<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
												<div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
													<Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
													<div className="min-w-0">
														<p className="text-xs text-gray-500 dark:text-gray-400">Email</p>
														<p className="text-sm font-medium text-gray-900 dark:text-white truncate">
															{selectedUser.email}
														</p>
													</div>
												</div>

												<div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
													<Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
													<div className="min-w-0">
														<p className="text-xs text-gray-500 dark:text-gray-400">Teléfono</p>
														<p className="text-sm font-medium text-gray-900 dark:text-white truncate">
															{selectedUser.phone}
														</p>
													</div>
												</div>

												<div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
													<MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
													<div className="min-w-0">
														<p className="text-xs text-gray-500 dark:text-gray-400">Ciudad</p>
														<p className="text-sm font-medium text-gray-900 dark:text-white truncate">
															{selectedUser.city}
														</p>
													</div>
												</div>

												<div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
													<MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
													<div className="min-w-0">
														<p className="text-xs text-gray-500 dark:text-gray-400">Dirección</p>
														<p className="text-sm font-medium text-gray-900 dark:text-white truncate">
															{selectedUser.address}
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</CardContent>
							</Card>
							<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
								<div className="xl:col-span-1">
									<SummaryShift shiftList={shiftList ?? []} />
								</div>
								<div className="xl:col-span-2">
									<Calendar03
										selectedUser={selectedUser}
										shiftDate={shiftList ? shiftList.flatMap((shift) => shift.date) : []}
									/>
								</div>
							</div>
						</div>
					) : (
						<Card className="shadow-lg dark:bg-gray-800 border-none">
							<CardContent className="flex flex-col items-center justify-center py-20">
								<div className="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
									<UserIcon className="w-10 h-10 text-gray-400" />
								</div>
								<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
									Selecciona un miembro del personal
								</h3>
								<p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
									Elige un usuario de la lista para ver su información y gestionar sus turnos
								</p>
							</CardContent>
						</Card>
					)}
				</div>
			</div>
		</div>
	)
}
