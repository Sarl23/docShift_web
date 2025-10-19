import { Shift } from '@/lib/api/shift'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Calendar, Clock, AlertCircle } from 'lucide-react'
import { Badge } from '../ui/badge'

interface SummaryShiftProps {
	shiftList: Shift[]
}

export const SummaryShift = ({ shiftList }: SummaryShiftProps) => {
	const formatter = new Intl.DateTimeFormat('es-CO', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	})

	const totalShifts = shiftList.length
	const totalDays = shiftList.reduce((acc, shift) => acc + shift.date.length, 0)

	return (
		<Card className="shadow-lg dark:bg-gray-800 border-none h-full">
			<CardHeader>
				<CardTitle className="flex items-center gap-2 text-lg">
					<Clock className="w-5 h-5 text-blue-600" />
					Resumen de Turnos
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				{/* Estadísticas */}
				<div className="grid grid-cols-2 gap-3">
					<div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
						<p className="text-sm text-gray-600 dark:text-gray-400">Total Jornadas</p>
						<p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{totalShifts}</p>
					</div>
					<div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
						<p className="text-sm text-gray-600 dark:text-gray-400">Total Días</p>
						<p className="text-2xl font-bold text-green-600 dark:text-green-400">{totalDays}</p>
					</div>
				</div>

				{/* Lista de turnos */}
				{shiftList.length === 0 ? (
					<div className="text-center py-8">
						<AlertCircle className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
						<p className="text-gray-500 dark:text-gray-400 text-sm">
							No hay turnos asignados
						</p>
					</div>
				) : (
					<div className="space-y-3 max-h-[400px] overflow-y-auto">
						{shiftList.map((shift, index) => (
							<div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg space-y-2">
								<div className="flex items-center justify-between">
									<p className="font-semibold text-gray-900 dark:text-white">
										{shift?.name}
									</p>
									<Badge variant="secondary" className="text-xs">
										{shift?.date.length} días
									</Badge>
								</div>
								<div className="space-y-1">
									{Array.isArray(shift?.date) && shift.date.map((date, index_date) => (
										<div key={index_date} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
											<Calendar className="w-3 h-3" />
											{formatter.format(new Date(date))}
										</div>
									))}
									{shift?.date.length > 3 && (
										<p className="text-xs text-gray-500 dark:text-gray-500 pl-5">
											+{shift.date.length - 3} días más
										</p>
									)}
								</div>
							</div>
						))}
					</div>
				)}
			</CardContent>
		</Card>
	)
}
