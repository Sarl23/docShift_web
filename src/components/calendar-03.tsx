import { Calendar } from "@/components/ui/calendar"
import { useEffect, useState } from "react"

export default function Calendar03() {
  const [dates, setDates] = useState<Date[]>([
    new Date(2025, 6, 24),
  ])

  useEffect(() => {
    console.log("Selected dates:", dates)
  }, [dates])

  return (
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
  )
}
