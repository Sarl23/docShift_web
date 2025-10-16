import { Shift } from '@/lib/api/shift'
import { Card, CardContent } from '../ui/card'

interface SummaryShiftProps {
	shiftList: Shift[]
}

export const SummaryShift = ({ shiftList }: SummaryShiftProps) => {
	const formatter = new Intl.DateTimeFormat('es-CO', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
	})
	return (
		<Card>
			<CardContent>
				{shiftList.length === 0 && (
					<>
						<h2 className="mt-6 text-lg font-semibold">Turnos ya asignados</h2>
						<ul className="list-disc pl-5">
							{shiftList.map((shift, index) => (
								<div key={index}>
									<li key={index}>Jornada {shift?.name}</li>
									{shift?.date.map((date, index_date) => (
										<li key={index_date}>{formatter.format(new Date(date))}</li>
									))}
								</div>
							))}
						</ul>
					</>
				)}
			</CardContent>
		</Card>
	)
}
