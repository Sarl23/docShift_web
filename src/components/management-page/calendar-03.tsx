import { Calendar } from '@/components/ui/calendar'
import { useEffect, useState } from 'react'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { getShiftTypes, Shift, createShiftType } from '@/lib/api/shift'
import { User } from '@/lib/api/user'
import { Button } from '../ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Textarea } from '../ui/textarea'
import { useAuthStore } from '@/store/useAuthStore'
import { toast } from 'sonner'
import { Calendar as CalendarIcon, Clock, FileText, Save } from 'lucide-react'
import { Badge } from '../ui/badge'

interface Calendar03Props {
	selectedUser: User | null
	shiftDate?: Date[]
}

export default function Calendar03({ selectedUser, shiftDate }: Calendar03Props) {
	const { company } = useAuthStore()
	const companyId = company?.id
	const [dates, setDates] = useState<Date[]>([new Date()])
	const [shiftTypesList, setShiftTypesList] = useState<Shift[] | null>(null)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const formSchema = z.object({
		shift_type: z.string().min(1, 'Debes seleccionar una jornada'),
		notes: z.string().max(500, 'Las notas no pueden exceder 500 caracteres').optional(),
	})

	useEffect(() => {
		async function fetchShiftTypes() {
			if (!companyId) return
			try {
				const fetchedShiftTypes = await getShiftTypes(companyId)
				setShiftTypesList(fetchedShiftTypes)
			} catch (error) {
				console.error('Error fetching shift types:', error)
				toast.error('Error al cargar los tipos de jornada')
			}
		}
		fetchShiftTypes()
	}, [companyId])

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	})

	const convertToLocalDates = (datesInput: any[]): Date[] => {
		return datesInput.map((dateVal) => {
			let date: Date;
			if (dateVal?._seconds) {
				date = new Date(dateVal._seconds * 1000);
			}
			else if (typeof dateVal === 'string') {
				date = new Date(dateVal);
			}
			else {
				date = dateVal;
			}

			return new Date(date.getFullYear(), date.getMonth(), date.getDate());
		});
	};

	useEffect(() => {
		if (shiftDate && shiftDate.length > 0) {
			const parsedDates = convertToLocalDates(shiftDate)
			setDates(parsedDates)
		} else {
			setDates([new Date()])
		}
	}, [shiftDate])

	async function onSubmit(values: z.infer<typeof formSchema>) {
		if (!companyId) {
			toast.error('No se ha seleccionado una compañía')
			return
		}
		if (!selectedUser) {
			toast.error('No se ha seleccionado un usuario')
			return
		}
		if (dates.length === 0) {
			toast.error('Debes seleccionar al menos una fecha')
			return
		}

		setIsSubmitting(true)
		try {
			await createShiftType(companyId, {
				shift_type_id: values.shift_type,
				user_id: selectedUser.userId,
				manager_id: 'tD8PIguDfgMeAAAAALUHtq', // TODO: Get from auth store
				notes: values.notes ?? '',
				date: dates,
			})
			toast.success(`Turno asignado exitosamente a ${selectedUser.name}`)
			form.reset()
			setDates([new Date()])
		} catch (error) {
			console.error('Error creating shift:', error)
			toast.error('Error al asignar el turno')
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<Card className="shadow-lg dark:bg-gray-800 border-none h-full">
			<CardHeader>
				<CardTitle className="flex items-center gap-2 text-lg">
					<CalendarIcon className="w-5 h-5 text-blue-600" />
					Asignar Turno
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="space-y-3">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-2">
							<Clock className="w-4 h-4 text-gray-600 dark:text-gray-400" />
							<p className="text-sm font-medium text-gray-700 dark:text-gray-300">
								Selecciona las fechas
							</p>
						</div>
						{dates.length > 0 && (
							<Badge variant="secondary" className="text-xs">
								{dates.length} {dates.length === 1 ? 'día' : 'días'}
							</Badge>
						)}
					</div>
					<Calendar
						mode="multiple"
						numberOfMonths={1}
						defaultMonth={dates[0]}
						required
						selected={dates}
						onSelect={setDates}
						max={10}
						className="rounded-lg border dark:border-gray-700 shadow-sm mx-auto"
					/>
				</div>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
						<FormField
							control={form.control}
							name="shift_type"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="flex items-center gap-2">
										<Clock className="w-4 h-4 text-blue-600" />
										Tipo de Jornada
									</FormLabel>
									<FormControl>
										<Select onValueChange={field.onChange} value={field.value}>
											<SelectTrigger className="w-full dark:bg-gray-700 dark:border-gray-600">
												<SelectValue placeholder="Selecciona una jornada" />
											</SelectTrigger>
											<SelectContent>
												{shiftTypesList?.map((shift, index) => (
													<SelectItem key={index} value={shift.id}>
														{shift.description}
													</SelectItem>
												))}
											</SelectContent>
										</Select>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="notes"
							render={({ field }) => (
								<FormItem>
									<FormLabel className="flex items-center gap-2">
										<FileText className="w-4 h-4 text-blue-600" />
										Notas (Opcional)
									</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Agrega observaciones o notas adicionales para este turno..."
											className="resize-none dark:bg-gray-700 dark:border-gray-600 min-h-[100px]"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button 
							type="submit" 
							className="w-full bg-blue-600 hover:bg-blue-700 text-white"
							disabled={isSubmitting || !selectedUser || dates.length === 0}
						>
							{isSubmitting ? (
								<>
									<Clock className="w-4 h-4 mr-2 animate-spin" />
									Asignando turno...
								</>
							) : (
								<>
									<Save className="w-4 h-4 mr-2" />
									Asignar Turno
								</>
							)}
						</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}
