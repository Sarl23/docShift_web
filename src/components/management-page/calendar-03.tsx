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
import { Card, CardContent } from '../ui/card'
import { Textarea } from '../ui/textarea'

interface Calendar03Props {
	selectedUser: User | null
	shiftDate?: Date[]
}

export default function Calendar03({ selectedUser, shiftDate }: Calendar03Props) {
	const [dates, setDates] = useState<Date[]>([new Date()])
	const [shiftTypesList, setShiftTypesList] = useState<Shift[] | null>(null)
	const formSchema = z.object({
		shift_type: z.string(),
		notes: z.string().min(2).max(500).optional(),
	})

	useEffect(() => {
		async function fetchShiftTypes() {
			try {
				const fetchedShiftTypes = await getShiftTypes('XkoILa79OBMKs9QAp1qh')
				setShiftTypesList(fetchedShiftTypes)
			} catch (error) {
				console.error('Error fetching users:', error)
			}
		}
		fetchShiftTypes()
	}, [])

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	})

	const convertToLocalDates = (datesInput: (string | Date)[]): Date[] => {
		return datesInput.map((dateVal) => {
			const date = typeof dateVal === 'string' ? new Date(dateVal) : dateVal
			return new Date(date.getFullYear(), date.getMonth(), date.getDate())
		})
	}

	useEffect(() => {
		if (shiftDate && shiftDate.length > 0) {
			const parsedDates = convertToLocalDates(shiftDate)
			setDates(parsedDates)
		} else {
			setDates([new Date()])
		}
	}, [shiftDate])

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values, dates, selectedUser)
		createShiftType('XkoILa79OBMKs9QAp1qh', {
			shift_type_id: values.shift_type,
			user_id: selectedUser?.userId ?? '',
			manager_id: 'tD8PIguDfgMeAAAAALUHtq',
			notes: values.notes ?? '',
			date: dates,
		})
	}

	return (
		<Card>
			<CardContent>
				<h2 className="mt-6 text-lg font-semibold">Calendario</h2>
				<Calendar
					mode="multiple"
					numberOfMonths={1}
					defaultMonth={dates[0]}
					required
					selected={dates}
					onSelect={setDates}
					max={10}
					className="rounded-lg border shadow-sm"
				/>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FormField
							control={form.control}
							name="shift_type"
							render={({ field }) => (
								<FormItem className="mt-6">
									<FormLabel>Selecciona la jornada</FormLabel>
									<FormControl>
										<Select onValueChange={field.onChange} defaultValue={field.value}>
											<SelectTrigger className="w-[180px]">
												<SelectValue placeholder="Jornada" />
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
									<FormLabel>Notas</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Agrega una nota para el turno"
											className="resize-none"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type="submit">Submit</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}
