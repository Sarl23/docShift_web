import { Card, CardContent } from '@/components/ui/card'
import { Settings } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { useEffect, useState } from 'react'
import { getUsers, User } from '@/lib/api/user'
import Calendar03 from '@/components/management-page/calendar-03'
import { Shift, getShiftByUserId } from '@/lib/api/shift'
import { SummaryShift } from '@/components/management-page/summary-shift'

export default function ManagementPage() {
	const [users, setUsers] = useState<User[] | null>(null)
	const [selectedUser, setSelectedUser] = useState<User | null>(null)
	const [shiftList, setShiftList] = useState<Shift[] | null>(null)

	useEffect(() => {
		async function fetchUsers() {
			try {
				const fetchedUsers = await getUsers('XkoILa79OBMKs9QAp1qh') //TODO: Replace with actual company ID
				setUsers(fetchedUsers)
			} catch (error) {
				console.error('Error fetching users:', error)
			}
		}
		fetchUsers()
	}, [])

	const handleAssignShifts = async (user: User) => {
		setSelectedUser(user)
		const fetchedShiftsByUser = await getShiftByUserId('XkoILa79OBMKs9QAp1qh', user.userId) //TODO: Replace with actual company ID
		if (fetchedShiftsByUser) {
			setShiftList(fetchedShiftsByUser)
		}
	}

	return (
		<div className="bg-background p-4 sm:p-8 lg:p-12">
			<h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Asignación de turnos</h1>
			<div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8">
				{/* Lista de usuarios */}
				<div className="flex flex-col space-y-4 w-full lg:w-auto">
					{users?.map((user, index) => (
						<Card
							key={index}
							className={`w-full sm:w-72 md:w-80 h-[7rem] cursor-pointer transition-all ${
								selectedUser?.userId === user.userId
									? 'border-2 border-blue-500 bg-blue-100'
									: 'hover:border-2 hover:border-blue-300'
							}`}
							onClick={() => handleAssignShifts(user)}
						>
							<CardContent>
								<div className="flex items-center gap-2.5">
									<img
										src="/src/assets/sarl-sticker.png"
										alt="Doctor"
										className="w-20 h-20 sm:w-24 sm:h-24 rounded-full"
									/>
									<div className="ml-2">
										<Badge variant="secondary">{user.status}</Badge>
										<div className="truncate">
											{user.name} {user.last_name}
										</div>
										<div className="truncate">{user.rol ?? ''}</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Separador */}
				<Separator orientation="vertical" className="hidden lg:block" />
				<Separator orientation="horizontal" className="block lg:hidden" />

				{/* Panel derecho */}
				{selectedUser ? (
					<div className="flex flex-col xl:flex-row items-start gap-6 lg:gap-6 w-full">
						<Card className="w-full h-auto">
							<CardContent>
								<div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-2.5 mt-4">
									<img
										src="/src/assets/sarl-sticker.png"
										alt="Doctor"
										className="w-32 h-32 sm:w-48 sm:h-48 rounded-full"
									/>
									<div>
										<Badge variant="secondary">{selectedUser.status}</Badge>
										<div className="mt-2">
											<h2>
												{selectedUser.name} {selectedUser.last_name}
											</h2>
											<p>{selectedUser.rol}</p>
										</div>
									</div>
								</div>
								<div className="mt-4">
									<div className="flex flex-col sm:flex-row items-start sm:items-center p-2 bg-gray-100 rounded-lg justify-between mb-2">
										<div className="flex items-center gap-3">
											<Settings className="w-5 h-5" />
											<p className="text-sm">Correo electronico</p>
										</div>
										<p className="text-sm break-all">{selectedUser.email}</p>
									</div>
									<div className="flex flex-col sm:flex-row items-start sm:items-center p-2 bg-gray-100 rounded-lg justify-between mb-2">
										<div className="flex items-center gap-3">
											<Settings className="w-5 h-5" />
											<p className="text-sm">Numero de contacto</p>
										</div>
										<p className="text-sm break-all">{selectedUser.phone}</p>
									</div>
									<div className="flex flex-col sm:flex-row items-start sm:items-center p-2 bg-gray-100 rounded-lg justify-between mb-2">
										<div className="flex items-center gap-3">
											<Settings className="w-5 h-5" />
											<p className="text-sm">Ciudad</p>
										</div>
										<p className="text-sm break-all">{selectedUser.city}</p>
									</div>
									<div className="flex flex-col sm:flex-row items-start sm:items-center p-2 bg-gray-100 rounded-lg justify-between mb-2">
										<div className="flex items-center gap-3">
											<Settings className="w-5 h-5" />
											<p className="text-sm">Direccion</p>
										</div>
										<p className="text-sm break-all">{selectedUser.address}</p>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Sección resumen y calendario */}
						<div className="flex flex-col space-y-4 w-full">
							<SummaryShift shiftList={shiftList ?? []} />
							<Calendar03
								selectedUser={selectedUser}
								shiftDate={shiftList ? shiftList.flatMap((shift) => shift.date) : []}
							/>
						</div>
					</div>
				) : (
					<div className="w-full text-center py-8">Selecciona un usuario</div>
				)}
			</div>
		</div>
	)
}
