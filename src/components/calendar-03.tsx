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
import { Button } from './ui/button'

export default function Calendar03({ selectedUser }: { selectedUser: User | null }) {
	const [dates, setDates] = useState<Date[]>([new Date()])
	const [shiftTypesList, setShiftTypesList] = useState<Shift[] | null>(null)
	const formSchema = z.object({
		shift_type: z.string(),
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

	function onSubmit(values: z.infer<typeof formSchema>) {
		console.log(values, dates, selectedUser)
		createShiftType('XkoILa79OBMKs9QAp1qh', {
			shift_type_id: values.shift_type,
			user_id: 'ST5PTwuRTOhFqUCfepxx',
			manager_id: 'tD8PIguDfgMeAAAAALUHtq',
			notes: 'This is a note test of web side',
			date: dates,
		})
	}

	return (
		<>
			<Calendar
				mode="multiple"
				numberOfMonths={1}
				defaultMonth={dates[0]}
				required
				selected={dates}
				onSelect={setDates}
				max={4}
				className="rounded-lg border shadow-sm"
			/>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="shift_type"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Selecciona la jornada</FormLabel>
								<FormControl>
									<Select onValueChange={field.onChange} defaultValue={field.value}>
										<SelectTrigger className="w-[180px]">
											<SelectValue placeholder="Theme" />
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
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</>
	)
}
